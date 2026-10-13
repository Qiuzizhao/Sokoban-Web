import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { DOMParser } from '@xmldom/xmldom';
import { parseLevel, solveSokoban, replayMoves, isSolved } from 'miaoda-game-sokoban-core';
const sourceFile=fs.existsSync('unpacked/resource.bcm')?'unpacked/resource.bcm':'extracted/project.bcm';
const original=JSON.parse(fs.readFileSync(sourceFile,'utf8'));
const sourceHash=hashSource(sourceFile);
function hashSource(file){return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');}
const metadata=JSON.parse(fs.readFileSync('extracted/project-metadata.json','utf8'));
const manifest=JSON.parse(fs.readFileSync('extracted/manifest.json','utf8'));
const levels=JSON.parse(fs.readFileSync('extracted/levels.json','utf8'));
const reconstructed={...metadata,theatre:{...metadata.theatre,actors:{},scenes:{},styles:{}},audio:{}};
const hashes={};
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
function reconstructResources(entries,target,source){
  assert.equal(entries.length,Object.keys(source).length);
  for(const entry of entries){
    const {file,mime,bytes,sourceUrlPrefix,...properties}=entry;
    const buffer=fs.readFileSync(`extracted/${file}`);
    assert.equal(buffer.length,bytes);
    const originalUrl=source[entry.id].url;
    const raw=originalUrl.slice(originalUrl.indexOf(',')+1);
    const originalBytes=originalUrl.slice(0,originalUrl.indexOf(',')).includes(';base64')?Buffer.from(raw,'base64'):Buffer.from(decodeURIComponent(raw));
    assert.deepEqual(buffer,originalBytes,`resource ${entry.id}`);
    const data=sourceUrlPrefix.includes(';base64')?buffer.toString('base64'):encodeURIComponent(buffer.toString());
    target[entry.id]={...properties,url:sourceUrlPrefix+data};
    hashes[file]=hash(buffer);
  }
}
reconstructResources(manifest.images,reconstructed.theatre.styles,original.theatre.styles);
reconstructResources(manifest.audio,reconstructed.audio,original.audio);
assert.equal(manifest.actors.length,Object.keys(original.theatre.actors).length+Object.keys(original.theatre.scenes).length);
let blockCount=0;
for(const entry of manifest.actors){
  const {sourceKind,...properties}=entry;
  const file=`logic/${entry.id}.xml`,text=fs.readFileSync(`extracted/${file}`,'utf8');
  assert.equal(text,`<root>${original.theatre[sourceKind==='actor'?'actors':'scenes'][entry.id].blocksXML}</root>`);
  const xml=new DOMParser().parseFromString(text,'text/xml');
  blockCount+=xml.getElementsByTagName('block').length;
  reconstructed.theatre[sourceKind==='actor'?'actors':'scenes'][entry.id]={...properties,blocksXML:text.slice(6,-7)};
  hashes[file]=hash(text);
}
assert.deepEqual(reconstructed,original,'Every original BCM field must round-trip from the split extraction');
fs.writeFileSync('extracted/project.bcm',JSON.stringify(reconstructed));
const solutions=[];
for(const source of levels){
  const parsed=parseLevel(source.xsb);assert.equal(parsed.ok,true);
  const solved=solveSokoban(parsed.level,{maxNodes:50000,maxFrontier:25000});assert.equal(solved.status,'solved',`level ${source.id}`);
  const replay=replayMoves(parsed.level,solved.directions);assert.equal(replay.ok,true);assert.equal(isSolved(replay.level),true);
  solutions.push({id:source.id,pushes:solved.pushCount,moves:solved.directions.length,directions:solved.directions});
}
assert.equal(solutions.length,50);
fs.mkdirSync('qa',{recursive:true});
fs.writeFileSync('qa/solutions.json',JSON.stringify(solutions,null,2));
const report={status:'passed',sourceSHA256:sourceHash,exeSHA256:fs.existsSync('推箱子3.exe')?hash(fs.readFileSync('推箱子3.exe')):undefined,checks:{byteExactResources:true,byteExactLogic:true,completeBCMRoundTrip:true,all50LevelsSolvedAndReplayed:true},counts:{images:manifest.images.length,audio:manifest.audio.length,actors:Object.keys(original.theatre.actors).length,scenes:Object.keys(original.theatre.scenes).length,blocks:blockCount,levels:solutions.length},hashes};
fs.writeFileSync('extracted/audit.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,checks:report.checks,counts:report.counts}));
