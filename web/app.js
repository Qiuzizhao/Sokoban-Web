import { createIcons, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Undo2, Redo2, RotateCcw, Pause, Play, Grid2x2, VolumeX, Volume2, Maximize, Minimize, Footprints, Box, CircleCheck, Check, LockKeyhole, X } from 'lucide';
import { levels } from './levels.js';
import { assets } from './assets.js';
import { GameSession } from './session.js';
import { isCompleted, latestLevel, canEnterLevel, adjacentLevel } from './progression.js';

const icons = {ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ChevronLeft,ChevronRight,Undo2,Redo2,RotateCcw,Pause,Play,Grid2x2,VolumeX,Volume2,Maximize,Minimize,Footprints,Box,CircleCheck,Check,LockKeyhole,X};
const $ = id => document.getElementById(id);
const storageKey = 'sokoban-web-v1';
let records = {}, muted = true, savedGame, storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  if (saved.records && typeof saved.records === 'object' && !Array.isArray(saved.records)) records = saved.records;
  muted = saved.muted !== false;
  savedGame = saved.current;
} catch { storageAvailable = false; }
let session, currentSource, playerElement, page = 0, saveTimer, statusTimer;
const crateElements=new Map();
const soundEffects = {push:new Audio(assets.push),win:new Audio(assets.win)};
const music={game:new Audio(assets.gameMusic),catalog:new Audio(assets.catalogMusic)};
for(const audio of Object.values(music)){audio.loop=true;audio.volume=.18;audio.preload='none';}
soundEffects.push.volume = .16;
soundEffects.win.volume = .32;
function sound(name) {
  if (muted) return;
  const audio = soundEffects[name];
  audio.currentTime = 0;
  audio.play().catch(()=>{});
}
function updateMusic() {
  const active=$('catalog').classList.contains('open')?'catalog':'game';
  for(const [name,audio] of Object.entries(music)){
    if(muted||document.hidden||session?.paused||session?.solved||name!==active)audio.pause();
    else audio.play().catch(()=>{});
  }
}
function setCatalog(open) {
  $('catalog').classList.toggle('open',open);
  $('catalog-toggle').setAttribute('aria-expanded',String(open));
  updateMusic();
}
function persist() {
  clearTimeout(saveTimer);
  try { localStorage.setItem(storageKey, JSON.stringify({records,muted,current:session.serialize()})); }
  catch { storageAvailable = false; }
}
function scheduleSave() { clearTimeout(saveTimer); saveTimer = setTimeout(persist,180); }
function notify(message) {
  clearTimeout(statusTimer);
  $('status').textContent = message;
  if (message) statusTimer = setTimeout(()=>$('status').textContent='',2600);
}
function refreshIcons() { createIcons({icons}); }
function replaceIcon(button, name, label) {
  button.innerHTML = `<i data-lucide="${name}"></i>`;
  button.title = label;
  button.setAttribute('aria-label',label);
  refreshIcons();
}
function completed(id) { return isCompleted(records,id); }
function renderCatalog() {
  const count = levels.filter(l=>completed(l.id)).length;
  $('completed-count').textContent=count;
  $('completion-percent').textContent=`${count*2}%`;
  $('completion-bar').style.width=`${count*2}%`;
  document.querySelectorAll('[data-page]').forEach(b=>b.setAttribute('aria-selected',String(Number(b.dataset.page)===page)));
  const fragment = document.createDocumentFragment();
  for (const level of levels.slice(page*25,page*25+25)) {
    const button = document.createElement('button');
    const locked=!canEnterLevel(records,levels,level.id);
    button.className = `level-cell${completed(level.id)?' completed':''}${session.id===level.id?' active':''}`;
    button.textContent=String(level.id).padStart(2,'0');
    button.disabled=locked;
    if(locked){
      const lock=document.createElement('i');lock.dataset.lucide='lock-keyhole';lock.className='lock-icon';button.append(lock);
      button.title=`先完成第 ${latestLevel(records,levels)} 关`;
    }
    button.setAttribute('aria-label',`第 ${level.id} 关${locked?'，未解锁':completed(level.id)?'，已通关':''}`);
    button.setAttribute('aria-current',session.id===level.id?'true':'false');
    button.addEventListener('click',()=>load(level.id));
    fragment.append(button);
  }
  $('level-grid').replaceChildren(fragment);
  $('personal-best').textContent=completed(session.id)?`本关最佳 ${records[session.id].moves} 步`:'还未通关';
  $('previous').disabled=adjacentLevel(records,levels,session.id,-1)===undefined;
  $('next').disabled=adjacentLevel(records,levels,session.id,1)===undefined;
  refreshIcons();
}
function image(key) {
  const img = document.createElement('img');
  img.src=assets[key]; img.alt=''; img.draggable=false;
  return img;
}
function place(element,x,y) { element.style.setProperty('--x',x);element.style.setProperty('--y',y); }
function renderBoard() {
  const board=$('board'), width=session.level.board.width;
  const walls=new Set(session.level.board.walls), goals=new Set(session.level.board.goals);
  const fragment=document.createDocumentFragment();
  for(let y=0;y<currentSource.height;y++) for(let x=0;x<currentSource.width;x++) {
    const key=(y+1)*width+x+1;
    const tile=document.createElement('div');
    tile.className=`tile${walls.has(key)?' wall':goals.has(key)?' goal':''}`;
    place(tile,x,y);
    tile.append(image(walls.has(key)?'wall':'floor'));
    if(goals.has(key)) {const goal=image('goal');goal.className='goal-image';tile.append(goal);}
    fragment.append(tile);
  }
  playerElement=document.createElement('div');
  playerElement.className='piece player';
  playerElement.append(image('playerDown'));
  fragment.append(playerElement);
  board.replaceChildren(fragment);
  crateElements.clear();
  fitBoard();
}
function fitBoard() {
  if (!currentSource) return;
  const stage=$('board-stage');
  const mobile=window.matchMedia('(max-width:680px)').matches;
  if(mobile){
    const stageTop=stage.getBoundingClientRect().top+window.scrollY;
    const controlsHeight=document.querySelector('.bottom-controls').offsetHeight;
    const desiredHeight=(stage.clientWidth-24)*currentSource.height/currentSource.width+24;
    const availableHeight=window.innerHeight-stageTop-controlsHeight-24;
    const height=Math.ceil(Math.max(160,Math.min(desiredHeight,availableHeight)));
    if(stage.style.height!==`${height}px`)stage.style.height=`${height}px`;
  }else stage.style.height='';
  const cell=Math.floor(Math.min((stage.clientWidth-(mobile?24:40))/currentSource.width,(stage.clientHeight-(mobile?24:44))/currentSource.height,66));
  const board=$('board');
  board.style.setProperty('--cell',`${Math.max(12,cell)}px`);
  board.style.width=`${Math.max(12,cell)*currentSource.width}px`;
  board.style.height=`${Math.max(12,cell)*currentSource.height}px`;
}
function renderState(moveResult) {
  const width=session.level.board.width,board=$('board');
  const goals=new Set(session.level.board.goals);
  if(moveResult?.kind==='push'){
    const moved=crateElements.get(moveResult.boxFrom);
    if(moved){crateElements.delete(moveResult.boxFrom);crateElements.set(moveResult.boxTo,moved);}
  }
  const boxes=new Set(session.level.state.boxes);
  for(const [key,element] of crateElements){if(!boxes.has(key)){element.remove();crateElements.delete(key);}}
  for(const position of session.level.state.boxes) {
    let box=crateElements.get(position);
    if(!box){box=document.createElement('div');box.className='piece crate';box.append(image(goals.has(position)?'boxGoal':'box'));board.append(box);crateElements.set(position,box);}
    place(box,position%width-1,Math.floor(position/width)-1);
    const nextImage=assets[goals.has(position)?'boxGoal':'box'];
    if(box.firstChild.getAttribute('src')!==nextImage)box.firstChild.src=nextImage;
  }
  const position=session.level.state.player;
  place(playerElement,position%width-1,Math.floor(position/width)-1);
  playerElement.firstChild.src=assets[`player${session.facing[0].toUpperCase()+session.facing.slice(1)}`];
  $('moves').textContent=session.moves;
  $('pushes').textContent=session.pushes;
  $('goals').textContent=`${session.onGoals} / ${session.level.state.boxes.length}`;
  $('board').setAttribute('aria-label',`第 ${session.id} 关，${session.moves} 步，${session.onGoals} 个箱子归位，共 ${session.level.state.boxes.length} 个`);
  $('undo').disabled=!session.history.length||session.paused;
  $('redo').disabled=!session.future.length||session.paused;
  document.querySelectorAll('[data-direction]').forEach(b=>b.disabled=session.paused||session.solved);
  $('pause').disabled=session.solved;
  $('pause-cover').hidden=!session.paused;
  updateMusic();
}
function load(id,restore) {
  if(!canEnterLevel(records,levels,id)){
    if(session){notify('该关卡尚未解锁');return;}
    id=latestLevel(records,levels)||levels[0].id;
    restore=undefined;
  }
  const source=levels.find(l=>l.id===id);
  currentSource=source;
  session=new GameSession(source);
  if(restore) {try {session.resume(restore);} catch {notify('存档已重置');}}
  page=Math.floor((source.id-1)/25);
  setCatalog(false);
  if($('success').open) $('success').close();
  $('level-number').textContent=String(source.id).padStart(2,'0');
  replaceIcon($('pause'),'pause','暂停');
  renderBoard();renderState();renderCatalog();scheduleSave();
}
function recordWin() {
  const previous=records[session.id];
  if(!completed(session.id)||session.moves<previous.moves||(session.moves===previous.moves&&session.pushes<previous.pushes)) records[session.id]={moves:session.moves,pushes:session.pushes};
  persist();renderCatalog();sound('win');
  $('success-stats').textContent=`第 ${String(session.id).padStart(2,'0')} 关 · ${session.moves} 步 · ${session.pushes} 次推动`;
  $('success-next').innerHTML=session.id===50?'返回选关 <i data-lucide="grid-2x2"></i>':'下一关 <i data-lucide="arrow-right"></i>';
  refreshIcons();
  $('success').showModal();
}
function move(direction) {
  if($('success').open||$('catalog').classList.contains('open')) return;
  const result=session.move(direction);
  if(!result.ok) return;
  notify('');renderState(result.move);scheduleSave();
  if(session.solved) recordWin();
  else if(result.move.kind==='push') sound('push');
}
function undo() {
  if(session.undo()) {notify('');renderState();scheduleSave();}
}
function redo() {
  if(session.redo()) {renderState();scheduleSave();if(session.solved) recordWin();}
}
function togglePause() {
  if(session.solved) return;
  session.paused=!session.paused;
  replaceIcon($('pause'),session.paused?'play':'pause',session.paused?'继续':'暂停');
  renderState();
}
$('undo').addEventListener('click',undo);
$('redo').addEventListener('click',redo);
$('restart').addEventListener('click',()=>{session.restart();notify('');replaceIcon($('pause'),'pause','暂停');renderState();scheduleSave();});
$('previous').addEventListener('click',()=>load(adjacentLevel(records,levels,session.id,-1)));
$('next').addEventListener('click',()=>load(adjacentLevel(records,levels,session.id,1)));
$('pause').addEventListener('click',togglePause);
$('resume').addEventListener('click',togglePause);
$('success-close').addEventListener('click',()=>$('success').close());
$('success-next').addEventListener('click',()=>{if(session.id<50)load(session.id+1);else{$('success').close();setCatalog(true);}});
$('sound').addEventListener('click',()=>{
  muted=!muted;
  $('sound').setAttribute('aria-pressed',String(!muted));
  replaceIcon($('sound'),muted?'volume-x':'volume-2',muted?'开启音效':'关闭音效');
  if(!muted) sound('push');updateMusic();persist();
});
$('fullscreen').addEventListener('click',async()=>{
  try {if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
  catch {notify('当前浏览器暂不支持全屏');}
});
document.addEventListener('fullscreenchange',()=>replaceIcon($('fullscreen'),document.fullscreenElement?'minimize':'maximize',document.fullscreenElement?'退出全屏':'全屏'));
$('catalog-toggle').setAttribute('aria-expanded','false');
$('catalog-toggle').addEventListener('click',()=>setCatalog(!$('catalog').classList.contains('open')));
$('catalog-close').addEventListener('click',()=>setCatalog(false));
document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>{page=Number(button.dataset.page);renderCatalog();}));
document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>move(button.dataset.direction)));
const keyDirections={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right'};
document.addEventListener('keydown',event=>{
  if(event.ctrlKey||event.metaKey||event.altKey||['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName))return;
  if($('success').open)return;
  if($('catalog').classList.contains('open')){if(event.key==='Escape')setCatalog(false);return;}
  const key=event.key.length===1?event.key.toLowerCase():event.key;
  if(keyDirections[key]){event.preventDefault();move(keyDirections[key]);}
  else if(key==='z'){event.preventDefault();undo();}
  else if(key==='y'){event.preventDefault();redo();}
  else if(key==='r'&&!event.repeat){event.preventDefault();$('restart').click();}
  else if(key==='Escape'&&!event.repeat){event.preventDefault();togglePause();}
});
let touchStart;
$('board-stage').addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'||session.paused||session.solved)return;
  touchStart={x:event.clientX,y:event.clientY,id:event.pointerId};
  if(event.isTrusted)$('board-stage').setPointerCapture(event.pointerId);
});
$('board-stage').addEventListener('pointerup',event=>{
  if(!touchStart||touchStart.id!==event.pointerId)return;
  const dx=event.clientX-touchStart.x,dy=event.clientY-touchStart.y;touchStart=null;
  if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;
  move(Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy>0?'down':'up');
});
$('board-stage').addEventListener('pointercancel',()=>touchStart=null);
window.addEventListener('pagehide',persist);
document.addEventListener('visibilitychange',()=>{if(document.hidden)persist();updateMusic();});
new ResizeObserver(fitBoard).observe($('board-stage'));
window.addEventListener('resize',fitBoard);
replaceIcon($('sound'),muted?'volume-x':'volume-2',muted?'开启音效':'关闭音效');
$('sound').setAttribute('aria-pressed',String(!muted));
load(Number.isInteger(savedGame?.id)?savedGame.id:1,savedGame);
if(!storageAvailable)notify('当前浏览器无法保存进度');
refreshIcons();
