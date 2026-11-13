const $=id=>document.getElementById(id);
const base='./sokoban-api/';
const pendingKey='sokoban-account-pending';
const profiles=new Map();
let active, retry;

async function request(path,body,token) {
  const options={method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',
    body:JSON.stringify(body),keepalive:path==='progress'};
  if(token) options.headers.Authorization=`Bearer ${token}`;
  const response=await fetch(base+path,options);
  const data=await response.json().catch(()=>({}));
  if(!response.ok) {
    const error=Error(data.error||(response.status===429?'操作太频繁，请稍后再试。':'服务暂不可用，请重试。'));
    error.status=response.status;
    throw error;
  }
  return data;
}

function pendingScores() {
  try {return JSON.parse(sessionStorage.getItem(pendingKey))||{};} catch {return {};}
}

function storePending(profile) {
  const pending=pendingScores();
  if(profile.scores.size) pending[profile.id]=Object.fromEntries(profile.scores);
  else delete pending[profile.id];
  try {sessionStorage.setItem(pendingKey,JSON.stringify(pending));} catch {}
}

async function sync(profile) {
  if(profile.saving) return;
  profile.saving=true;
  try {
    while(profile.scores.size) {
      const [level,moves]=profile.scores.entries().next().value;
      const result=await request('progress',{level,moves},profile.token);
      if(profile.scores.get(level)===moves) profile.scores.delete(level);
      storePending(profile);
      if(active===profile) profile.onBest(level,result.moves);
    }
  } catch(error) {
    if(active===profile) {
      clearTimeout(retry);
      if(error.status===401) {
        profile.onError('通关记录待同步，请重新登录');
      } else {
        profile.onError('通关记录待同步，联网后会重试');
        retry=setTimeout(()=>sync(profile),12000);
      }
    }
  } finally {
    profile.saving=false;
  }
}

export function saveAccountWin(level,moves) {
  if(!active) return;
  active.scores.set(level,Math.min(moves,active.scores.get(level)||Infinity));
  storePending(active);
  sync(active);
}


export function setupProfiles({onGuest,onLogin,onBest,onError}) {
  if(!__ACCOUNTS__||!/^https?:$/.test(location.protocol)) return;
  const dialog=$('profile-dialog'), button=$('profile-toggle');
  const title=$('profile-title'), modes=$('profile-modes'), modesBack=$('profile-modes-back');
  const form=$('profile-form'), message=$('profile-message');
  const account=$('profile-account'), password=$('profile-password'), confirm=$('profile-confirm');
  const submit=$('profile-submit'), changeMode=$('profile-change-mode');
  let mode='login', entered=false, generation=0;

  function showModes() {
    generation++;
    title.textContent='选择身份';
    message.textContent='';
    form.reset();
    modes.hidden=false;
    modesBack.hidden=form.hidden=true;
    $('profile-back').hidden=!entered;
  }

  function showForm(nextMode) {
    generation++;
    mode=nextMode;
    const registering=mode==='register';
    title.textContent=registering?'注册':'登录';
    modes.hidden=$('profile-back').hidden=true;
    modesBack.hidden=form.hidden=false;
    message.textContent='';
    password.value=confirm.value='';
    password.autocomplete=registering?'new-password':'current-password';
    $('profile-confirm-field').hidden=!registering;
    confirm.required=registering;
    submit.disabled=false;
    submit.textContent=registering?'注册并进入':'登录';
    changeMode.textContent=registering?'已有账号，去登录':'注册账号';
    account.focus();
  }

  function open() {
    showModes();
    dialog.showModal();
    title.focus();
  }

  function enter(profile) {
    generation++;
    clearTimeout(retry);
    if(active&&active!==profile) sync(active);
    active=profile;
    if(profile) {
      for(const [level,moves] of profile.scores) {
        const best=profile.records[level];
        if(!best||moves<best.moves) profile.records[level]={moves};
      }
      onLogin(profile.records);
      sync(profile);
    } else {
      onGuest();
    }
    entered=true;
    button.textContent=profile?profile.id:'游客';
    button.title=profile?`账号 ${profile.id}，切换身份`:'游客，切换身份';
    form.reset();
    dialog.close();
  }

  button.hidden=false;
  document.body.classList.add('has-profiles');
  button.addEventListener('click',open);
  $('profile-back').addEventListener('click',()=>dialog.close());
  modesBack.addEventListener('click',()=>{
    showModes();
    $('play-login').focus();
  });
  $('play-guest').addEventListener('click',()=>enter(null));
  $('play-login').addEventListener('click',()=>showForm('login'));
  changeMode.addEventListener('click',()=>showForm(mode==='login'?'register':'login'));
  dialog.addEventListener('cancel',event=>{if(!entered) event.preventDefault();});
  dialog.addEventListener('close',()=>{if(!dialog.open) form.reset();});
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    if(submit.disabled) return;
    if(mode==='register'&&password.value!==confirm.value) {
      message.textContent='两次输入的密码不一致。';
      confirm.focus();
      return;
    }
    const attempt=++generation;
    submit.disabled=true;
    message.textContent=mode==='register'?'正在注册…':'正在登录…';
    try {
      const result=await request(mode,{account:account.value,password:password.value});
      if(!dialog.open||attempt!==generation) return;
      let profile=profiles.get(result.account);
      if(profile) Object.assign(profile,result);
      else {
        const scores=new Map(Object.entries(pendingScores()[result.account]||{}).map(([level,moves])=>[Number(level),moves]));
        profile={...result,id:result.account,scores,onBest,onError};
        profiles.set(profile.id,profile);
      }
      enter(profile);
    } catch(error) {
      if(dialog.open&&attempt===generation) message.textContent=error.message||'请重试。';
    } finally {
      if(attempt===generation) submit.disabled=false;
    }
  });
  window.addEventListener('online',()=>{if(active) sync(active);});
  window.addEventListener('pagehide',()=>{if(active) sync(active);});
  open();
}
