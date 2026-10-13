import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
fs.mkdirSync('web/licenses',{recursive:true});
for(const name of ['miaoda-game-sokoban-core','miaoda-game-grid-core','miaoda-game-serialization-core','miaoda-game-random-core','lucide']){
  fs.copyFileSync(path.join('node_modules',name,'package.json'),path.join('web/licenses',`${name}-package.json`));
  for(const file of fs.readdirSync(`node_modules/${name}`)){
    if(/^licen[sc]e/i.test(file))fs.copyFileSync(path.join('node_modules',name,file),path.join('web/licenses',`${name}-${file}`));
  }
}
await build({entryPoints:['web/app.js'], bundle:true, outfile:'web/game.js', format:'iife', minify:true, target:['es2020'], legalComments:'eof'});
console.log('Built web/game.js. Open web/index.html directly.');
