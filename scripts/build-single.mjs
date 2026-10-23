import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
import { assets } from '../web/assets.js';
import { levels } from '../web/levels.js';

const classroom=process.argv.includes('--classroom');
const firstLevel=process.argv.includes('--first-level');
const outputIndex=process.argv.indexOf('--output');
const output=outputIndex>=0?process.argv[outputIndex+1]:firstLevel?'推箱子第一关.html':'推箱子单文件版.html';
if(!output)throw Error('Missing --output path');

const mime={'.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.mp3':'audio/mpeg','.wav':'audio/wav','.ogg':'audio/ogg'};
const firstLevelAssets=new Set(['playerUp','playerDown','playerLeft','playerRight','floor','wall','box','boxGoal','goal','push','win','gameMusic']);
const embedded=Object.fromEntries(Object.entries(assets).filter(([name])=>!firstLevel||firstLevelAssets.has(name)).map(([name,file])=>{
  const bytes=fs.readFileSync(path.resolve('web',file));
  const type=mime[path.extname(file)];
  if(!type)throw Error(`Unknown asset type: ${file}`);
  return [name,`data:${type};base64,${bytes.toString('base64')}`];
}));
const result=await build({
  entryPoints:['web/app.js'],bundle:true,write:false,format:'iife',minify:true,target:classroom?['chrome79']:['es2020'],legalComments:'eof',
  plugins:[{name:'embedded-assets',setup(builder){
    builder.onLoad({filter:/[\\/]web[\\/]assets\.js$/},()=>({contents:`export const assets = ${JSON.stringify(embedded)};`,loader:'js'}));
    if(firstLevel)builder.onLoad({filter:/[\\/]web[\\/]levels\.js$/},()=>({contents:`export const levels = ${JSON.stringify(levels.slice(0,1))};`,loader:'js'}));
  }}],
});
const script=result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script');
let css=fs.readFileSync('web/style.css','utf8');
if(classroom){
  css=css.replace('aspect-ratio:1;','height:38px;')
    .replaceAll('inset:0;','top:0;right:0;bottom:0;left:0;')
    .replace('inset:70px 0 0;','top:70px;right:0;bottom:0;left:0;')
    .replace('height:min(53vh,500px);','height:53vh;max-height:500px;')
    .replace('height:clamp(280px,48svh,500px);min-height:0;','height:48vh;min-height:280px;max-height:500px;')
    .replace('width:min(400px,calc(100% - 32px));','width:400px;max-width:calc(100% - 32px);');
  css+='\n@media(max-width:680px){.level-cell{height:56px}}\n';
  const flexRules={'.brand':12,'.header-actions':8,'.game-heading':0,'.level-navigation':8,'.stats':24,'.stats>div':8,'.catalog-bottom':12,'.bottom-controls':18,'.tools':8,'.primary-button':10,'.secondary-button':10,'.success-actions':10};
  for(const [selector,gap] of Object.entries(flexRules))if(gap)css+=`html.no-flexgap ${selector} > *:not(:last-child){margin-right:${gap}px}\n`;
  css+='@media(max-width:680px){html.no-flexgap .brand > *:not(:last-child){margin-right:9px}html.no-flexgap .header-actions > *:not(:last-child){margin-right:6px}html.no-flexgap .stats > *:not(:last-child){margin-right:14px}html.no-flexgap .stats>div > *:not(:last-child){margin-right:5px}html.no-flexgap .tools > *:not(:last-child){margin-right:6px}}';
  css+='@media(max-width:680px){html.no-flexgap .bottom-controls > *:not(:last-child){margin-right:12px;margin-bottom:0}html.no-flexgap .tools > *:not(:last-child){margin-right:0}}@media(max-width:360px){html.no-flexgap .bottom-controls > *:not(:last-child){margin-right:8px}}';
}
let html=fs.readFileSync('web/index.html','utf8');
if(firstLevel){
  html=html.replace('<title>推箱子</title>','<title>推箱子 · 第一关</title>');
  html=html.replace('<body>','<body class="single-level">');
  css+='\n.single-level .catalog,.single-level .level-navigation,.single-level #catalog-toggle{display:none!important}.single-level .layout{display:block;max-width:830px}.single-level .game{margin:0 auto}\n';
}
html=html.replace('<link rel="stylesheet" href="style.css">',`<style>${css}</style>`);
html=html.replace('<script src="game.js"></script>',()=>`<script>${script}</script>`);
if(classroom){
  const project=path.dirname(path.resolve(output));
  const instructions=fs.readFileSync(path.join(project,'AGENTS.md'),'utf8');
  const guard=instructions.match(/### 脚本原文[^]*?```html\s*([^]*?)\s*```/);
  if(!guard)throw Error('Classroom guard missing from AGENTS.md');
  const index=fs.readFileSync(path.join(project,'index.html'),'utf8');
  const flexProbe=index.match(/<script>[^]*?<\/script>/);
  if(!flexProbe)throw Error('Flex gap probe missing');
  const polyfill='<script>if(!Element.prototype.replaceChildren){Element.prototype.replaceChildren=function(){while(this.firstChild)this.removeChild(this.firstChild);for(var i=0;i<arguments.length;i++)this.appendChild(typeof arguments[i]==="string"?document.createTextNode(arguments[i]):arguments[i]);};}</script>';
  html=html.replace('</head>',()=>`${guard[1]}\n${flexProbe[0]}\n${polyfill}\n</head>`);
  html=html.replace('<title>推箱子</title>','<title>我是小小控制员 · 推箱子</title>');
  html=html.replace('href="#" aria-label="推箱子"','aria-label="推箱子"');
}
for(const [name,file] of Object.entries(assets).filter(([name])=>name in embedded)){
  html=html.replaceAll(`src="${file.replace(/^\.\//,'')}"`,`src="${embedded[name]}"`);
}
const licenses={};
for(const file of fs.readdirSync('web/licenses'))licenses[file]=fs.readFileSync(`web/licenses/${file}`,'utf8');
const notices=JSON.stringify({notice:fs.readFileSync('THIRD_PARTY_NOTICES.md','utf8'),licenses}).replace(/</g,'\\u003c');
html=html.replace('</body>',()=>`<script type="application/json" id="third-party-notices">${notices}</script>\n</body>`);
if(/(?:src|href)="(?:\.\/)?(?:assets\/|style\.css|game\.js)/.test(html))throw Error('External asset reference remains');
fs.writeFileSync(output,html);
console.log(`${output}: ${(Buffer.byteLength(html)/1024/1024).toFixed(2)} MB, ${Object.keys(embedded).length} embedded assets.`);
