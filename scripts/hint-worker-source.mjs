import { build } from 'esbuild';

export async function hintWorkerSource() {
  const result=await build({entryPoints:['web/hint-worker.js'],bundle:true,write:false,format:'iife',minify:true,target:'chrome79'});
  return JSON.stringify(result.outputFiles[0].text);
}
