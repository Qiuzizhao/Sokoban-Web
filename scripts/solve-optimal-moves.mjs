import assert from 'node:assert/strict';
import { createCipheriv, pbkdf2Sync, randomBytes } from 'node:crypto';
import fs from 'node:fs';
import { parseLevel, replayMoves, isSolved } from 'miaoda-game-sokoban-core';
import { levels } from '../web/levels.js';

const directions=['up','right','down','left'];

function shortestSolution(initial) {
  const {width,height,walls,goals}=initial.board;
  const size=width*height, blocked=new Set(walls);
  const neighbors=Array.from({length:size},(_,cell)=>{
    const x=cell%width,y=Math.floor(cell/width);
    return [y>0?cell-width:-1,x+1<width?cell+1:-1,y+1<height?cell+width:-1,x>0?cell-1:-1]
      .map(next=>blocked.has(next)?-1:next);
  });
  const distanceToGoal=goals.map(goal=>{
    const distance=Array(size).fill(Infinity),queue=[goal];
    distance[goal]=0;
    for(let i=0;i<queue.length;i++){
      const cell=queue[i];
      for(let dir=0;dir<4;dir++){
        const previous=neighbors[cell][dir];
        if(previous<0||neighbors[previous][dir]<0||distance[previous]!==Infinity)continue;
        distance[previous]=distance[cell]+1;
        queue.push(previous);
      }
    }
    return distance;
  });
  const bounds=new Map();
  const boxKey=boxes=>String.fromCharCode(...boxes);
  function lowerBound(boxes,key){
    if(bounds.has(key))return bounds.get(key);
    // Matching ignores other boxes and player walking, so it never overestimates.
    const costs=Array(1<<goals.length).fill(Infinity);
    costs[0]=0;
    for(let mask=0;mask<costs.length-1;mask++){
      if(costs[mask]===Infinity)continue;
      let count=0;
      for(let bits=mask;bits;bits&=bits-1)count++;
      for(let goal=0;goal<goals.length;goal++){
        if(mask&(1<<goal))continue;
        const next=mask|(1<<goal);
        costs[next]=Math.min(costs[next],costs[mask]+distanceToGoal[goal][boxes[count]]);
      }
    }
    const result=costs[costs.length-1];
    bounds.set(key,result);
    return result;
  }
  const heap=[];
  const before=(a,b)=>a.f<b.f||(a.f===b.f&&a.g>b.g);
  function enqueue(node){
    let i=heap.length;
    heap.push(node);
    while(i){
      const parent=(i-1)>>1;
      if(!before(node,heap[parent]))break;
      heap[i]=heap[parent];i=parent;
    }
    heap[i]=node;
  }
  function dequeue(){
    const first=heap[0],last=heap.pop();
    if(heap.length){
      let i=0;
      while(i*2+1<heap.length){
        let child=i*2+1;
        if(child+1<heap.length&&before(heap[child+1],heap[child]))child++;
        if(!before(heap[child],last))break;
        heap[i]=heap[child];i=child;
      }
      heap[i]=last;
    }
    return first;
  }
  const occupied=new Uint8Array(size),distance=new Int16Array(size),queue=new Int16Array(size);
  const parent=new Int16Array(size),walkDirection=new Int8Array(size);
  function walk(boxes,player){
    occupied.fill(0);distance.fill(-1);
    for(const box of boxes)occupied[box]=1;
    let tail=1;
    queue[0]=player;distance[player]=0;
    for(let head=0;head<tail;head++){
      const cell=queue[head];
      for(let dir=0;dir<4;dir++){
        const next=neighbors[cell][dir];
        if(next<0||occupied[next]||distance[next]>=0)continue;
        queue[tail++]=next;distance[next]=distance[cell]+1;
        parent[next]=cell;walkDirection[next]=dir;
      }
    }
  }
  const first=initial.state,firstBoxKey=boxKey(first.boxes);
  const initialKey=firstBoxKey+String.fromCharCode(first.player);
  const best=new Map([[initialKey,0]]);
  const h=lowerBound(first.boxes,firstBoxKey);
  enqueue({...first,key:initialKey,g:0,h,f:h});
  let expanded=0;
  while(heap.length){
    const node=dequeue();
    if(node.g!==best.get(node.key))continue;
    if(node.h===0){
      const path=[];
      for(let step=node;step.parent;step=step.parent){
        path.push(directions[step.dir]);
        walk(step.parent.boxes,step.parent.player);
        for(let cell=step.stand;cell!==step.parent.player;cell=parent[cell])path.push(directions[walkDirection[cell]]);
      }
      path.reverse();
      assert.equal(path.length,node.g);
      return {moves:node.g,path,expanded};
    }
    expanded++;
    // Each edge is the shortest walk to a legal push position, then one push.
    walk(node.boxes,node.player);
    for(const box of node.boxes){
      for(let dir=0;dir<4;dir++){
        const to=neighbors[box][dir],stand=neighbors[box][(dir+2)%4];
        if(to<0||stand<0||occupied[to]||distance[stand]<0)continue;
        const boxes=node.boxes.map(cell=>cell===box?to:cell).sort((a,b)=>a-b);
        const packed=boxKey(boxes),key=packed+String.fromCharCode(box);
        const g=node.g+distance[stand]+1;
        if(g>=(best.get(key)??Infinity))continue;
        const h=lowerBound(boxes,packed);
        if(h===Infinity)continue;
        best.set(key,g);
        enqueue({boxes,player:box,key,g,h,f:g+h,parent:node,dir,stand});
      }
    }
  }
  throw Error('No solution');
}

const requested=process.argv[2];
const check=requested==='--check';
const seal=requested==='--seal';
const selected=requested&&!check&&!seal?levels.filter(level=>level.id===Number(requested)):levels;
assert.ok(selected.length>0,'Unknown level');
const counts={};
const paths={};
const iterations=600000;
const salt=seal?randomBytes(16):null;
const password=seal?fs.readFileSync(0,'utf8').replace(/\r?\n$/,''):null;
if(seal) assert.ok(password.length>=8,'Supply a password of at least 8 characters on stdin');
const key=seal?pbkdf2Sync(password,salt,iterations,32,'sha256'):null;
for(const level of selected){
  const parsed=parseLevel(level.xsb);
  assert.equal(parsed.ok,true);
  const result=shortestSolution(parsed.level);
  const replay=replayMoves(parsed.level,result.path);
  assert.ok(replay.ok&&isSolved(replay.level),`Invalid solution for level ${level.id}`);
  counts[level.id]=result.moves;
  if(seal){
    const iv=randomBytes(12);
    const cipher=createCipheriv('aes-256-gcm',key,iv);
    cipher.setAAD(Buffer.from(String(level.id)));
    const path=result.path.map(direction=>direction[0]).join('');
    paths[level.id]=Buffer.concat([iv,cipher.update(path),cipher.final(),cipher.getAuthTag()]).toString('base64');
  }
  console.log(`Level ${level.id}: ${result.moves} moves (${result.expanded} expanded states)`);
}
if(check||seal){
  const {optimalMoves}=await import('../web/optimal-moves.js');
  assert.deepEqual(counts,optimalMoves,'Published move counts differ from exact search');
  if(seal){
    const data={salt:salt.toString('base64'),iterations,paths};
    fs.writeFileSync('web/solution-data.js',`// Generated by scripts/solve-optimal-moves.mjs --seal.\nexport const solutionData = ${JSON.stringify(data)};\n`);
  }
}else if(!requested){
  fs.writeFileSync('web/optimal-moves.js',`// Generated by scripts/solve-optimal-moves.mjs.\nexport const optimalMoves = ${JSON.stringify(counts)};\n`);
}
