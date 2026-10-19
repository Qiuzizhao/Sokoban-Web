import test from 'node:test';
import assert from 'node:assert/strict';
import { isCompleted,latestLevel,canEnterLevel,adjacentLevel } from '../web/progression.js';
const levels=Array.from({length:50},(_,i)=>({id:i+1}));
test('new players can only enter level 1',()=>{
  assert.equal(latestLevel({},levels),1);
  for(const {id} of levels)assert.equal(canEnterLevel({},levels,id),id===1);
  assert.equal(adjacentLevel({},levels,1,1),undefined);
});
test('each victory unlocks exactly the next level and cleared levels stay available',()=>{
  const records={};
  for(let id=1;id<=50;id++){
    assert.equal(canEnterLevel(records,levels,id),true);
    if(id<50)assert.equal(canEnterLevel(records,levels,id+1),false);
    records[id]={moves:10,pushes:2};
    for(let cleared=1;cleared<=id;cleared++)assert.equal(canEnterLevel(records,levels,cleared),true);
    if(id<50)assert.equal(canEnterLevel(records,levels,id+1),true);
    if(id<49)assert.equal(canEnterLevel(records,levels,id+2),false);
  }
  assert.equal(latestLevel(records,levels),undefined);
  assert.equal(adjacentLevel(records,levels,50,1),undefined);
  assert.equal(adjacentLevel(records,levels,1,-1),undefined);
});
test('old sparse records remain playable while only the first unfinished level is open',()=>{
  const records={1:{moves:5},5:{moves:20},50:{moves:30}};
  assert.equal(latestLevel(records,levels),2);
  assert.equal(canEnterLevel(records,levels,5),true);
  assert.equal(canEnterLevel(records,levels,3),false);
  assert.equal(canEnterLevel(records,levels,6),false);
  assert.equal(adjacentLevel(records,levels,5,-1),2);
  assert.equal(adjacentLevel(records,levels,5,1),50);
});
test('invalid ids and invalid completion records cannot unlock levels',()=>{
  for(const id of [undefined,0,51,'1',1.5])assert.equal(canEnterLevel({},levels,id),false);
  for(const moves of [NaN,Infinity,-1,'3',1.5])assert.equal(isCompleted({1:{moves}},1),false);
});
