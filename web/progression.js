export function isCompleted(records,id) {
  const moves=records[id]?.moves;
  return Number.isSafeInteger(moves)&&moves>=0;
}

export function latestLevel(records,levels) {
  return levels.find(level=>!isCompleted(records,level.id))?.id;
}

export function canEnterLevel(records,levels,id) {
  return levels.some(level=>level.id===id)&&(isCompleted(records,id)||id===latestLevel(records,levels));
}

export function adjacentLevel(records,levels,id,direction) {
  const accessible=levels.filter(level=>canEnterLevel(records,levels,level.id));
  const index=accessible.findIndex(level=>level.id===id);
  return index<0?undefined:accessible[index+direction]?.id;
}
