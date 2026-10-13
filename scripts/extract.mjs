import fs from 'node:fs';
import path from 'node:path';
import { DOMParser } from '@xmldom/xmldom';
import { parseLevel } from 'miaoda-game-sokoban-core';

const sourceFile=fs.existsSync('unpacked/resource.bcm')?'unpacked/resource.bcm':'extracted/project.bcm';
const work = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
const actors = Object.values(work.theatre.actors);
const variableNames = Object.fromEntries(Object.values(work.variables).map(v => [v.id, v.name]));
const children = n => Array.from(n?.childNodes || []).filter(c => c.nodeType === 1);
const child = (n, tag, name) => children(n).find(c => c.tagName === tag && (name === undefined || c.getAttribute('name') === name));
const field = (n, name) => child(n, 'field', name)?.textContent;
const descendants = (n, tag) => Array.from(n.getElementsByTagName(tag));
const valueBlock = (n, name) => {
  const v = child(n, 'value', name);
  return child(v, 'block') || child(v, 'shadow');
};
const evaluate = (b, vars) => {
  if (!b) throw Error('Missing expression');
  const type = b.getAttribute('type');
  if (type === 'math_number') return Number(field(b, 'NUM'));
  if (type === 'text') return field(b, 'TEXT') || '';
  if (type === 'variables_get') return vars[field(b, 'VAR')] ?? 0;
  if (type === 'text_join') return children(b).filter(c => c.tagName === 'value').map(v => evaluate(child(v, 'block') || child(v, 'shadow'), vars)).join('');
  if (type === 'math_arithmetic') {
    const a = evaluate(valueBlock(b, 'A'), vars), c = evaluate(valueBlock(b, 'B'), vars);
    return {ADD: () => a + c, MINUS: () => a - c, MULTIPLY: () => a * c, DIVIDE: () => a / c, POWER: () => a ** c}[field(b, 'OP')]();
  }
  throw Error(`Unsupported constant expression: ${type}`);
};
// Coordinates are authored as separate row/column expressions, including two-digit columns.
const coordinate = (b, vars) => {
  if (b.getAttribute('type') !== 'text_join') throw Error('Unexpected coordinate expression');
  const values = children(b).filter(c => c.tagName === 'value').map(v => evaluate(child(v, 'block') || child(v, 'shadow'), vars));
  if (values.length !== 3 || String(values[1]).trim() !== '') throw Error(`Unexpected coordinate: ${values}`);
  return [Number(values[2]) - 1, Number(values[0]) - 1];
};

fs.mkdirSync('extracted/logic', {recursive: true});
fs.mkdirSync('extracted/images', {recursive: true});
fs.mkdirSync('extracted/audio', {recursive: true});
fs.mkdirSync('web/assets', {recursive: true});
const resourceManifest = {images: [], audio: [], actors: [], variables: work.variables, cloudVariables: work.cloud_variables};
const {theatre, audio, ...projectMetadata} = work;
fs.writeFileSync('extracted/project-metadata.json', JSON.stringify({...projectMetadata, theatre:{...theatre,actors:undefined,scenes:undefined,styles:undefined}}, null, 2));
function saveDataResource(resource, folder, id) {
  const match = resource.url?.match(/^data:([^;,]+)(;base64)?,([\s\S]*)$/);
  if (!match) throw Error(`Resource is not embedded: ${id}`);
  const ext = ({'image/png':'png','image/jpeg':'jpg','image/svg+xml':'svg','audio/mpeg':'mp3','audio/mp3':'mp3','audio/wav':'wav','audio/x-wav':'wav','audio/ogg':'ogg'})[match[1]] || match[1].split('/')[1];
  const file = `${id}.${ext}`;
  const buffer = match[2] ? Buffer.from(match[3], 'base64') : Buffer.from(decodeURIComponent(match[3]));
  fs.writeFileSync(path.join('extracted', folder, file), buffer);
  const {url, ...properties} = resource;
  return {...properties, id, file: `${folder}/${file}`, mime: match[1], bytes: buffer.length, sourceUrlPrefix:url.slice(0,url.indexOf(',')+1)};
}
for (const [id, image] of Object.entries(work.theatre.styles)) resourceManifest.images.push(saveDataResource(image, 'images', id));
for (const [id, audio] of Object.entries(work.audio)) resourceManifest.audio.push(saveDataResource(audio, 'audio', id));
for (const actor of [...actors, ...Object.values(work.theatre.scenes)]) {
  fs.writeFileSync(`extracted/logic/${actor.id}.xml`, `<root>${actor.blocksXML}</root>`);
  const {blocksXML, ...properties} = actor;
  resourceManifest.actors.push({...properties,sourceKind:work.theatre.actors[actor.id]?'actor':'scene'});
}
fs.writeFileSync('extracted/manifest.json', JSON.stringify(resourceManifest, null, 2));

const levels = [];
for (const actorName of ['第二关', '25(1)']) {
  const actor = actors.find(a => a.name === actorName);
  const xml = new DOMParser().parseFromString(`<root>${actor.blocksXML}</root>`, 'text/xml');
  const procedure = descendants(xml, 'block').find(b => b.getAttribute('type') === 'procedures_2_defnoreturn');
  const warps = descendants(procedure, 'block').filter(b => b.getAttribute('type') === 'warp');
  if (warps.length !== 25) throw Error(`Expected 25 levels in ${actorName}`);
  for (const warp of warps) {
    const vars = Object.fromEntries(Object.values(work.variables).map(v => [v.id, v.value]));
    const lists = {};
    let player;
    for (const block of descendants(warp, 'block')) {
      const type = block.getAttribute('type');
      if (type === 'variables_set') {
        const id = field(block, 'VAR');
        if (!['地图宽度','地图高度','NPC初始位置'].includes(variableNames[id])) continue;
        vars[id] = evaluate(valueBlock(block, 'VALUE'), vars);
        if (variableNames[id] === 'NPC初始位置') player = coordinate(valueBlock(block, 'VALUE'), vars);
      }
      if (type === 'lists_insert_value') {
        const id = field(valueBlock(block, 'VAR'), 'VAR');
        (lists[variableNames[id]] ||= []).push(coordinate(valueBlock(block, 'VALUE'), vars));
      }
    }
    const byName = name => vars[Object.keys(variableNames).find(id => variableNames[id] === name)];
    // The enclosing IF is authoritative; the procedure's assignment is outside the warp.
    let parent = warp.parentNode;
    while (parent && !(parent.tagName === 'statement' && /^DO\d+$/.test(parent.getAttribute('name')))) parent = parent.parentNode;
    const branch = parent?.parentNode;
    const condition = valueBlock(branch, parent.getAttribute('name').replace('DO','IF'));
    const idExpression = valueBlock(condition, 'A');
    if (field(idExpression, 'VAR') !== Object.keys(variableNames).find(id => variableNames[id] === '选择关卡')) throw Error('Unexpected level condition');
    const id = evaluate(valueBlock(condition, 'B'), vars);
    const width = byName('地图宽度'), height = byName('地图高度');
    const walls = lists['障碍坐标'] || [], goals = lists['目标点坐标'] || [], boxes = lists['箱子初始坐标'] || [];
    const grid = Array.from({length:height}, () => Array(width).fill(' '));
    const put = (coords, symbol) => coords.forEach(([x,y]) => {
      if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0 || x >= width || y >= height) throw Error(`Level ${id}: out-of-bounds ${x},${y}`);
      grid[y][x] = symbol;
    });
    put(walls,'#'); put(goals,'.');
    for (const [x,y] of boxes) { if (grid[y][x] === '#') throw Error(`Box on wall: ${id}`); grid[y][x] = grid[y][x] === '.' ? '*' : '$'; }
    if (!player || grid[player[1]][player[0]] === '#' || boxes.some(b=>b[0]===player[0]&&b[1]===player[1])) throw Error(`Invalid player: ${id}`);
    grid[player[1]][player[0]] = grid[player[1]][player[0]] === '.' ? '+' : '@';
    // Some original maps leave the visual perimeter open. An external wall border makes bounds explicit.
    const rows = ['#'.repeat(width+2), ...grid.map(row => `#${row.join('')}#`), '#'.repeat(width+2)];
    const xsb = rows.join('\n');
    const parsed = parseLevel(xsb);
    if (!parsed.ok) throw Error(`Invalid extracted level ${id}: ${JSON.stringify(parsed)}`);
    levels.push({id, width, height, player, walls, boxes, goals, trees: lists['树坐标'] || [], xsb});
  }
}
levels.sort((a,b)=>a.id-b.id);
if (levels.length !== 50 || levels.some((l,i)=>l.id!==i+1)) throw Error('Missing or duplicated levels');
fs.writeFileSync('extracted/levels.json', JSON.stringify(levels, null, 2));
fs.writeFileSync('web/levels.js', `export const levels = ${JSON.stringify(levels)};\n`);

const selection = {playerUp:['NPC',0], playerDown:['NPC',1], playerLeft:['NPC',2], playerRight:['NPC',3],floor:['地面',0],wall:['障碍',0],box:['箱子',0],boxGoal:['箱子',1],goal:['目标点',0],tree:['风景',0]};
const assets = {};
for (const [key,[actorName,index]] of Object.entries(selection)) {
  const id = actors.find(a => a.name === actorName).styles[index];
  const source = resourceManifest.images.find(r=>r.id===id);
  const file = `${key}.${path.extname(source.file).slice(1)}`;
  fs.copyFileSync(`extracted/${source.file}`, `web/assets/${file}`);
  assets[key] = `./assets/${file}`;
}
for (const [key, index] of [['catalogExit',0],['push',1],['win',2],['menu',3],['catalogMusic',4],['extraMusic',5],['gameMusic',6],['gameStart',7]]) {
  const source = resourceManifest.audio[index];
  const file = `${key}${path.extname(source.file)}`;
  fs.copyFileSync(`extracted/${source.file}`,`web/assets/${file}`);
  assets[key] = `./assets/${file}`;
}
fs.writeFileSync('web/assets.js', `export const assets = ${JSON.stringify(assets)};\n`);
console.log(`Extracted ${levels.length} levels, ${resourceManifest.images.length} images, ${resourceManifest.audio.length} sounds, ${resourceManifest.actors.length} logic files.`);
