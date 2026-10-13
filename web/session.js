import { parseLevel, applyMove, isSolved, assertValidLevel } from 'miaoda-game-sokoban-core';

export class GameSession {
  constructor(source) {
    const parsed = parseLevel(source.xsb);
    if (!parsed.ok) throw Error(`Invalid level ${source.id}`);
    this.id = source.id;
    this.initial = parsed.level;
    this.restart();
  }
  get solved() { return isSolved(this.level); }
  get onGoals() { return this.level.state.boxes.filter(k => this.level.board.goals.includes(k)).length; }
  snapshot() { return {level:this.level, moves:this.moves, pushes:this.pushes, facing:this.facing}; }
  restore(snapshot) { Object.assign(this, snapshot); }
  move(direction) {
    if (this.paused || this.solved) return {ok:false, code:'inactive'};
    const result = applyMove(this.level, direction);
    if (!result.ok) return result;
    this.history.push(this.snapshot());
    this.future = [];
    this.level = result.level;
    this.moves++;
    if (result.move.kind === 'push') this.pushes++;
    this.facing = direction;
    return result;
  }
  undo() {
    if (this.paused || !this.history.length) return false;
    this.future.push(this.snapshot());
    this.restore(this.history.pop());
    return true;
  }
  redo() {
    if (this.paused || !this.future.length) return false;
    this.history.push(this.snapshot());
    this.restore(this.future.pop());
    return true;
  }
  restart() {
    this.level = this.initial;
    this.moves = 0;
    this.pushes = 0;
    this.facing = 'down';
    this.history = [];
    this.future = [];
    this.paused = false;
  }
  serialize() {
    const compact = s => ({state:s.level.state,moves:s.moves,pushes:s.pushes,facing:s.facing});
    return {id:this.id, ...compact(this.snapshot()), history:this.history.map(compact), future:this.future.map(compact)};
  }
  resume(saved) {
    const valid = value => {
      if (!Number.isSafeInteger(value.moves) || value.moves < 0 || !Number.isSafeInteger(value.pushes) || value.pushes < 0 || value.pushes > value.moves || !['up','down','left','right'].includes(value.facing)) throw Error('Invalid saved counters');
      return {level:assertValidLevel({board:this.initial.board,state:value.state}), moves:value.moves, pushes:value.pushes, facing:value.facing};
    };
    if (saved.id !== this.id || !Array.isArray(saved.history) || !Array.isArray(saved.future)) throw Error('Invalid saved game');
    const current = valid(saved), history = saved.history.map(valid), future = saved.future.map(valid);
    this.restore(current);
    this.history = history;
    this.future = future;
  }
}
