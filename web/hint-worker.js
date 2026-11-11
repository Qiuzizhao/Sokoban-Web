import { shortestSolution } from './shortest-solution.js';

self.onmessage=({data:level})=>{
  try {
    self.postMessage(shortestSolution(level,{maxExpanded:900000,maxStates:1400000,maxMs:12000}));
  } catch {
    self.postMessage({status:'error'});
  }
};
