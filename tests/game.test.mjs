import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { parseLevel, solveSokoban, replayMoves, isSolved } from 'miaoda-game-sokoban-core';
import { GameSession } from '../web/session.js';
const levels=JSON.parse(fs.readFileSync('extracted/levels.json','utf8'));
const small={id:1,xsb:'#######\n# @$. #\n#######'};

test('all 50 authored maps extract without missing entities or invalid coordinates',()=>{
  assert.equal(levels.length,50);
  for(const [index,source] of levels.entries()){
    assert.equal(source.id,index+1);
    const parsed=parseLevel(source.xsb);
    assert.equal(parsed.ok,true,`level ${source.id}`);
    assert.equal(parsed.level.state.boxes.length,source.boxes.length);
    assert.equal(parsed.level.board.goals.length,source.goals.length);
    assert.equal(parsed.level.state.player,(source.player[1]+1)*(source.width+2)+source.player[0]+1);
  }
});
test('push, victory, undo and redo restore the whole state and counters',()=>{
  const game=new GameSession(small),initial=game.snapshot();
  assert.equal(game.move('right').ok,true);
  assert.equal(game.solved,true);assert.equal(game.moves,1);assert.equal(game.pushes,1);
  const victory=game.snapshot();
  assert.equal(game.move('right').ok,false);
  assert.equal(game.undo(),true);assert.deepEqual(game.snapshot(),initial);
  assert.equal(game.redo(),true);assert.deepEqual(game.snapshot(),victory);
});
test('walls and blocked pushes never mutate state or history',()=>{
  const game=new GameSession({id:1,xsb:'#######\n# @$$.#\n# .   #\n#######'}),initial=game.snapshot();
  assert.equal(game.move('up').ok,false);assert.equal(game.move('right').ok,false);
  assert.deepEqual(game.snapshot(),initial);assert.equal(game.history.length,0);
});
test('new moves clear redo, pause stops movement, restart clears history',()=>{
  const game=new GameSession(small);
  game.move('left');game.undo();assert.equal(game.future.length,1);
  game.move('left');assert.equal(game.future.length,0);
  game.paused=true;assert.equal(game.move('right').ok,false);assert.equal(game.undo(),false);
  game.restart();assert.equal(game.moves,0);assert.equal(game.history.length,0);assert.equal(game.paused,false);
});
test('save/resume preserves current state, undo and redo; corrupted saves are rejected',()=>{
  const game=new GameSession(small);game.move('left');game.move('right');game.undo();
  const copy=new GameSession(small);copy.resume(JSON.parse(JSON.stringify(game.serialize())));
  assert.deepEqual(copy.snapshot(),game.snapshot());assert.equal(copy.redo(),true);
  assert.throws(()=>copy.resume({...game.serialize(),state:{player:0,boxes:[]}}));
});
test('all 50 original levels solve and replay through the new engine',()=>{
  for(const {id} of levels){
    const game=new GameSession(levels[id-1]);
    const solution=solveSokoban(game.level,{maxNodes:50000,maxFrontier:25000});
    assert.equal(solution.status,'solved',`level ${id}`);
    const replay=replayMoves(game.level,solution.directions);assert.equal(replay.ok,true);assert.equal(isSolved(replay.level),true);
    for(const direction of solution.directions)assert.equal(game.move(direction).ok,true);
    assert.equal(game.solved,true);
    while(game.history.length)game.undo();assert.deepEqual(game.level,game.initial);assert.equal(game.pushes,0);
  }
});
