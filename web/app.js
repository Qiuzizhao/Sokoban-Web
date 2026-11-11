import { createIcons, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Undo2, Redo2, RotateCcw, Grid2x2, VolumeX, Volume2, Maximize, Minimize, Footprints, Box, CircleCheck, Check, LockKeyhole, X } from 'lucide';
import { levels } from './levels.js';
import { assets } from './assets.js';
import { GameSession } from './session.js';
import { isCompleted, latestLevel, canEnterLevel, adjacentLevel } from './progression.js';
import { optimalMoves } from './optimal-moves.js';
import { playVictory, stopVictory } from './victory.js';
import { unlockSolution } from './solutions.js';

const icons = {ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ChevronLeft,ChevronRight,Undo2,Redo2,RotateCcw,Grid2x2,VolumeX,Volume2,Maximize,Minimize,Footprints,Box,CircleCheck,Check,LockKeyhole,X};
const $ = id => document.getElementById(id);
const singleLevel=levels.length===1;
const storageKey = singleLevel?'sokoban-first-level-v1':'sokoban-web-v1';
const mobileLayout=window.matchMedia('(max-width:680px)');
let records = {}, muted = true, savedGame, storageAvailable = true;
let currentVersion=0, pendingCurrentVersion=0, soundDirty=false;
function parseSave(raw) {
  try {return JSON.parse(raw)||{};} catch {return {};}
}
function saveVersion(saved) {
  return Number.isSafeInteger(saved.currentVersion)&&saved.currentVersion>0?saved.currentVersion:0;
}
try {
  const saved = parseSave(localStorage.getItem(storageKey));
  if (saved.records && typeof saved.records === 'object' && !Array.isArray(saved.records)) records = saved.records;
  muted = saved.muted !== false;
  savedGame = saved.current;
  currentVersion=saveVersion(saved);
} catch { storageAvailable = false; }
let session, currentSource, playerElement, page = 0, saveTimer, statusTimer;
let demonstration, unlockAttempt=0;
const crateElements=new Map();
const soundEffects = {push:new Audio(assets.push),win:new Audio(assets.win)};
const music=singleLevel?{game:new Audio(assets.gameMusic)}:{game:new Audio(assets.gameMusic),catalog:new Audio(assets.catalogMusic)};
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
  const active=catalogOpen()?'catalog':'game';
  for(const [name,audio] of Object.entries(music)){
    if(muted||document.hidden||session?.solved||name!==active)audio.pause();
    else audio.play().catch(()=>{});
  }
}
function catalogOpen() {
  return !singleLevel&&mobileLayout.matches&&$('catalog').classList.contains('open');
}
function setCatalog(open) {
  open=open&&!singleLevel&&mobileLayout.matches;
  $('catalog').classList.toggle('open',open);
  $('catalog-toggle').setAttribute('aria-expanded',String(open));
  if(open&&demonstration?.playing) pauseDemonstration();
  updateMusic();
}
function keepBest(id,candidate) {
  const previous=records[id];
  if(completed(id)&&!(candidate.moves<previous.moves||
      (candidate.moves===previous.moves&&candidate.pushes<(previous.pushes??Infinity)))) return false;
  records[id]=candidate;
  return true;
}
function mergeRecords(saved) {
  let changed=false;
  if(saved) for(const {id} of levels) {
    if(isCompleted(saved,id)&&keepBest(id,saved[id])) changed=true;
  }
  if(changed)renderCatalog();
}
function persist() {
  clearTimeout(saveTimer);
  if(!pendingCurrentVersion&&!soundDirty) return;
  try {
    const saved=parseSave(localStorage.getItem(storageKey));
    const storedVersion=saveVersion(saved);
    // A delayed save must preserve a newer move or selection from another tab.
    const saveCurrent=pendingCurrentVersion>=storedVersion&&pendingCurrentVersion>0;
    mergeRecords(saved.records);
    const version=saveCurrent?pendingCurrentVersion:storedVersion;
    localStorage.setItem(storageKey,JSON.stringify({
      records,muted:soundDirty?muted:saved.muted!==false,
      current:saveCurrent?session.serialize():saved.current,currentVersion:version,
    }));
    currentVersion=Math.max(currentVersion,version);
    pendingCurrentVersion=0;
    soundDirty=false;
  }
  catch { storageAvailable = false; }
}
function scheduleSave() {
  pendingCurrentVersion=Math.max(Date.now(),currentVersion+1,pendingCurrentVersion+1);
  clearTimeout(saveTimer);
  saveTimer=setTimeout(persist,180);
}
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
  const percent=Math.round(count/levels.length*100);
  $('completion-percent').textContent=`${percent}%`;
  $('completion-bar').style.width=`${percent}%`;
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
function renderBoard(view=session) {
  const board=$('board'), width=view.level.board.width;
  const walls=new Set(view.level.board.walls), goals=new Set(view.level.board.goals);
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
  const mobile=mobileLayout.matches;
  if(mobile){
    const stageTop=stage.getBoundingClientRect().top+window.scrollY;
    const controlsHeight=document.querySelector('.bottom-controls').offsetHeight;
    const desiredHeight=(stage.clientWidth-24)*currentSource.height/currentSource.width+24;
    const availableHeight=window.innerHeight-stageTop-controlsHeight-24;
    const height=Math.ceil(Math.max(160,Math.min(desiredHeight,availableHeight)));
    if(stage.style.height!==`${height}px`)stage.style.height=`${height}px`;
  }else stage.style.height='';
  const cell=Math.max(1,Math.floor(Math.min(
    (stage.clientWidth-(mobile?24:32))/currentSource.width,
    (stage.clientHeight-(mobile?24:36))/currentSource.height,
    mobile?66:96,
  )));
  const board=$('board');
  board.style.setProperty('--cell',`${cell}px`);
  board.style.width=`${cell*currentSource.width}px`;
  board.style.height=`${cell*currentSource.height}px`;
}
function renderState(moveResult,view=session) {
  const width=view.level.board.width,board=$('board');
  const goals=new Set(view.level.board.goals);
  if(moveResult?.kind==='push'){
    const moved=crateElements.get(moveResult.boxFrom);
    if(moved){crateElements.delete(moveResult.boxFrom);crateElements.set(moveResult.boxTo,moved);}
  }
  const boxes=new Set(view.level.state.boxes);
  for(const [key,element] of crateElements){if(!boxes.has(key)){element.remove();crateElements.delete(key);}}
  for(const position of boxes) {
    let box=crateElements.get(position);
    if(!box){box=document.createElement('div');box.className='piece crate';box.append(image(goals.has(position)?'boxGoal':'box'));board.append(box);crateElements.set(position,box);}
    place(box,position%width-1,Math.floor(position/width)-1);
    const nextImage=assets[goals.has(position)?'boxGoal':'box'];
    if(box.firstChild.getAttribute('src')!==nextImage)box.firstChild.src=nextImage;
  }
  const position=view.level.state.player;
  place(playerElement,position%width-1,Math.floor(position/width)-1);
  playerElement.firstChild.src=assets[`player${view.facing[0].toUpperCase()+view.facing.slice(1)}`];
  $('moves').textContent=view.moves;
  $('pushes').textContent=view.pushes;
  $('goals').textContent=`${view.onGoals} / ${boxes.size}`;
  $('board').setAttribute('aria-label',`第 ${view.id} 关，${view.moves} 步，${view.onGoals} 个箱子归位，共 ${boxes.size} 个`);
  if(view!==session) return;
  $('undo').disabled=!session.history.length;
  $('redo').disabled=!session.future.length;
  document.querySelectorAll('[data-direction]').forEach(b=>b.disabled=session.solved);
  updateMusic();
}
function load(id,restore,saveSelection=true) {
  if(!canEnterLevel(records,levels,id)){
    if(session){notify('该关卡尚未解锁');return;}
    id=latestLevel(records,levels)||levels[0].id;
    restore=undefined;
  }
  const source=levels.find(l=>l.id===id);
  endDemonstration(false);
  currentSource=source;
  session=new GameSession(source);
  if(restore) {try {session.resume(restore);} catch {notify('存档已重置');}}
  page=Math.floor((source.id-1)/25);
  setCatalog(false);
  stopVictory();
  if($('success').open) $('success').close();
  $('level-number').textContent=String(source.id).padStart(2,'0');
  $('optimal-moves').textContent=optimalMoves[source.id];
  renderBoard();renderState();renderCatalog();
  if(saveSelection) scheduleSave();
}
function recordWin(celebrate=false) {
  keepBest(session.id,{moves:session.moves,pushes:session.pushes});
  persist();renderCatalog();sound('win');
  if(singleLevel) {
    if(celebrate) notify('全部归位！');
  } else {
    $('success-stats').textContent=`第 ${String(session.id).padStart(2,'0')} 关 · ${session.moves} 步 · ${session.pushes} 次推动`;
    $('success-next').innerHTML=session.id===50?'返回选关 <i data-lucide="grid-2x2"></i>':'下一关 <i data-lucide="arrow-right"></i>';
    refreshIcons();
    $('success').showModal();
  }
  if(celebrate) playVictory();
}
function move(direction) {
  if(demonstration||$('solution-lock').open||$('success').open||catalogOpen()) return;
  const result=session.move(direction);
  if(!result.ok) return;
  notify('');renderState(result.move);scheduleSave();
  if(session.solved) recordWin(true);
  else if(result.move.kind==='push') sound('push');
}
function undo() {
  if(demonstration) return;
  if(session.undo()) {stopVictory();notify('');renderState();scheduleSave();}
}
function redo() {
  if(demonstration) return;
  if(session.redo()) {renderState();scheduleSave();if(session.solved) recordWin();}
}

function showDemonstrationControls(active) {
  const controls=$('solution-controls');
  controls.hidden=!active;
  controls.parentElement.classList.toggle('is-demonstrating',active);
  document.querySelector('.tools').hidden=active;
  document.querySelector('.dpad').hidden=active;
  $('show-solution').disabled=active;
}
function refreshDemonstration() {
  const {view,steps,playing}=demonstration;
  const finished=view.moves===steps.length;
  $('solution-progress').textContent=`${finished?'演示完成':'最优解演示'} · ${view.moves} / ${steps.length} 步`;
  $('solution-play').textContent=playing?'暂停演示':finished?'重播':'继续演示';
  $('solution-step').disabled=finished;
}
function queueDemonstrationStep() {
  demonstration.timer=setTimeout(advanceDemonstration,Number($('solution-speed').value));
}
function pauseDemonstration() {
  clearTimeout(demonstration.timer);
  demonstration.playing=false;
  refreshDemonstration();
}
function advanceDemonstration() {
  const {view,steps}=demonstration;
  if(view.moves>=steps.length) return;
  const result=view.move(steps[view.moves]);
  if(!result.ok) {
    endDemonstration();
    notify('本关解法数据有误');
    return;
  }
  renderState(result.move,view);
  if(view.moves===steps.length) demonstration.playing=false;
  refreshDemonstration();
  if(demonstration.playing) queueDemonstrationStep();
}
function endDemonstration(restoreBoard=true) {
  if(!demonstration) return;
  clearTimeout(demonstration.timer);
  demonstration=undefined;
  showDemonstrationControls(false);
  if(restoreBoard) {
    renderBoard();
    renderState();
    $('show-solution').focus();
  }
}

$('show-solution').addEventListener('click',()=>{
  unlockAttempt++;
  $('solution-form').reset();
  $('solution-error').textContent='';
  $('solution-unlock').disabled=false;
  $('solution-lock').showModal();
});
$('solution-cancel').addEventListener('click',()=>$('solution-lock').close());
$('solution-form').addEventListener('submit',async event=>{
  event.preventDefault();
  const dialog=$('solution-lock'),input=$('solution-password'),error=$('solution-error'),button=$('solution-unlock');
  if(button.disabled) return;
  if(!window.crypto||!window.crypto.subtle) {
    error.textContent='请通过 HTTPS 或本地文件打开课件。';
    return;
  }
  const attempt=++unlockAttempt,source=currentSource;
  button.disabled=true;
  error.textContent='正在验证…';
  const password=input.value;
  input.value='';
  let steps;
  try {
    steps=await unlockSolution(source.id,password);
  } catch {
    if(attempt===unlockAttempt&&dialog.open) {
      error.textContent='密码不正确，请重试。';
      input.focus();
    }
    return;
  } finally {
    if(attempt===unlockAttempt) button.disabled=false;
  }
  if(attempt!==unlockAttempt||!dialog.open||source!==currentSource) return;
  if(steps.length!==optimalMoves[source.id]||steps.some(step=>!step)) {
    error.textContent='本关解法数据有误。';
    return;
  }
  dialog.close();
  setCatalog(false);
  stopVictory();
  notify('');
  demonstration={view:new GameSession(source),steps,playing:true};
  showDemonstrationControls(true);
  renderBoard(demonstration.view);
  renderState(undefined,demonstration.view);
  refreshDemonstration();
  $('solution-play').focus();
  queueDemonstrationStep();
});
$('solution-play').addEventListener('click',()=>{
  if(demonstration.playing) {pauseDemonstration();return;}
  const {view,steps}=demonstration;
  if(view.moves===steps.length) {
    view.restart();
    renderBoard(view);
    renderState(undefined,view);
  }
  demonstration.playing=true;
  refreshDemonstration();
  queueDemonstrationStep();
});
$('solution-step').addEventListener('click',()=>{
  pauseDemonstration();
  advanceDemonstration();
});
$('solution-speed').addEventListener('change',()=>{
  if(!demonstration.playing) return;
  clearTimeout(demonstration.timer);
  queueDemonstrationStep();
});
$('solution-exit').addEventListener('click',()=>endDemonstration());

$('undo').addEventListener('click',undo);
$('redo').addEventListener('click',redo);
$('restart').addEventListener('click',()=>{if(demonstration)return;stopVictory();session.restart();notify('');renderState();scheduleSave();});
$('previous').addEventListener('click',()=>load(adjacentLevel(records,levels,session.id,-1)));
$('next').addEventListener('click',()=>load(adjacentLevel(records,levels,session.id,1)));
$('success').addEventListener('close',()=>{if(!$('success').open) stopVictory();});
$('success-close').addEventListener('click',()=>$('success').close());
$('success-next').addEventListener('click',()=>{if(singleLevel){$('success').close();$('restart').click();}else if(session.id<50)load(session.id+1);else{$('success').close();setCatalog(true);}});
$('sound').addEventListener('click',()=>{
  muted=!muted;
  soundDirty=true;
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
$('catalog-toggle').addEventListener('click',()=>setCatalog(!catalogOpen()));
$('catalog-close').addEventListener('click',()=>setCatalog(false));
document.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>{page=Number(button.dataset.page);renderCatalog();}));
document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>move(button.dataset.direction)));
const keyDirections={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right'};
document.addEventListener('keydown',event=>{
  if(event.ctrlKey||event.metaKey||event.altKey||['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName))return;
  if($('success').open||$('solution-lock').open)return;
  if(catalogOpen()){if(event.key==='Escape')setCatalog(false);return;}
  if(demonstration){if(event.key==='Escape')endDemonstration();return;}
  const key=event.key.length===1?event.key.toLowerCase():event.key;
  if(keyDirections[key]){event.preventDefault();move(keyDirections[key]);}
  else if(key==='z'){event.preventDefault();undo();}
  else if(key==='y'){event.preventDefault();redo();}
  else if(key==='r'&&!event.repeat){event.preventDefault();$('restart').click();}
});
let touchStart;
$('board-stage').addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'||demonstration||session.solved)return;
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
document.addEventListener('visibilitychange',()=>{
  if(document.hidden) {
    if(demonstration) pauseDemonstration();
    persist();
  }
  updateMusic();
});
window.addEventListener('storage',event=>{
  if(event.key!==storageKey||event.storageArea!==localStorage) return;
  const saved=parseSave(event.newValue);
  currentVersion=Math.max(currentVersion,saveVersion(saved));
  mergeRecords(saved.records);
});
new ResizeObserver(fitBoard).observe($('board-stage'));
window.addEventListener('resize',()=>{
  if(!mobileLayout.matches&&$('catalog').classList.contains('open')) setCatalog(false);
  fitBoard();
});
replaceIcon($('sound'),muted?'volume-x':'volume-2',muted?'开启音效':'关闭音效');
$('sound').setAttribute('aria-pressed',String(!muted));
load(Number.isInteger(savedGame?.id)?savedGame.id:1,savedGame,false);
if(!storageAvailable)notify('当前浏览器无法保存进度');
refreshIcons();
