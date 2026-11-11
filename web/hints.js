import { applyMove } from 'miaoda-game-sokoban-core';

const keyFor=state=>`${state.player}:${state.boxes.slice().sort((a,b)=>a-b).join(',')}`;
const cache=new Map();
let cachedLevelId,timer,worker,workerUrl;

export function cancelHint() {
  clearTimeout(timer);
  if(worker) worker.terminate();
  worker=undefined;
}

export function closeHints() {
  cancelHint();
  if(workerUrl) URL.revokeObjectURL(workerUrl);
  workerUrl=undefined;
  cachedLevelId=undefined;
  cache.clear();
}

export function requestHint(id,level,show) {
  cancelHint();
  if(id!==cachedLevelId) {
    cachedLevelId=id;
    cache.clear();
  }
  const key=keyFor(level.state);
  if(cache.has(key)) {show(cache.get(key));return;}

  show({status:'searching'});
  timer=setTimeout(()=>{
    let search;
    try {
      if(!workerUrl) workerUrl=URL.createObjectURL(new Blob([__HINT_WORKER_SOURCE__],{type:'text/javascript'}));
      search=new Worker(workerUrl);
      worker=search;
      search.onmessage=({data:result})=>{
        if(worker!==search) return;
        cancelHint();
        if(cache.size>4096) cache.clear();
        if(result.status==='solved') {
          let position=level;
          for(const [index,direction] of result.path.entries()) {
            cache.set(keyFor(position.state),{status:'solved',direction,remaining:result.path.length-index});
            position=applyMove(position,direction).level;
          }
        } else if(result.status==='unsolvable') {
          cache.set(key,result);
        }
        show(cache.get(key)||result);
      };
      search.onerror=()=>{
        if(worker!==search) return;
        cancelHint();
        show({status:'error'});
      };
      search.postMessage(level);
    } catch {
      cancelHint();
      show({status:'error'});
    }
  },45);
}
