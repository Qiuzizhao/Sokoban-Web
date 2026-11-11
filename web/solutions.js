import { solutionData } from './solution-data.js';

const directions={u:'up',r:'right',d:'down',l:'left'};
const fromBase64=value=>Uint8Array.from(atob(value),character=>character.charCodeAt(0));

export async function unlockSolution(id,password) {
  const subtle=window.crypto.subtle;
  const encoder=new TextEncoder();
  const passwordKey=await subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveKey']);
  const key=await subtle.deriveKey({
    name:'PBKDF2',salt:fromBase64(solutionData.salt),iterations:solutionData.iterations,hash:'SHA-256',
  },passwordKey,{name:'AES-GCM',length:256},false,['decrypt']);
  const data=fromBase64(solutionData.paths[id]);
  const decoded=await subtle.decrypt({
    name:'AES-GCM',iv:data.slice(0,12),additionalData:encoder.encode(String(id)),
  },key,data.slice(12));
  return Array.from(new TextDecoder().decode(decoded),character=>directions[character]);
}
