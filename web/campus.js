const $=id=>document.getElementById(id);
const base='./sokoban-api/';
const pendingKey='sokoban-campus-pending';
const profiles=new Map();
let active, retry;

async function request(path,token,body) {
  const options={headers:{Authorization:`Bearer ${token}`},cache:'no-store'};
  if(body) {
    options.method='POST';
    options.headers['Content-Type']='application/json';
    options.body=JSON.stringify(body);
    options.keepalive=path==='progress';
  }
  const response=await fetch(base+path,options);
  const data=await response.json();
  if(!response.ok) {
    const error=Error(data.error);
    error.status=response.status;
    throw error;
  }
  return data;
}

function pendingScores() {
  try {return JSON.parse(sessionStorage.getItem(pendingKey))||{};} catch {return {};}
}

function storePending(student) {
  const pending=pendingScores();
  if(student.scores.size) pending[student.id]=Object.fromEntries(student.scores);
  else delete pending[student.id];
  try {sessionStorage.setItem(pendingKey,JSON.stringify(pending));} catch {}
}

async function sync(student) {
  if(student.saving) return;
  student.saving=true;
  try {
    while(student.scores.size) {
      const [level,moves]=student.scores.entries().next().value;
      const result=await request('progress',student.token,{level,moves});
      if(student.scores.get(level)===moves) student.scores.delete(level);
      storePending(student);
      if(active===student) student.onBest(level,result.moves);
    }
  } catch(error) {
    if(active===student) {
      clearTimeout(retry);
      if(error.status===401) {
        student.onError('通关记录待同步，请重新选择姓名');
      } else {
        student.onError('通关记录待同步，联网后会重试');
        retry=setTimeout(()=>sync(student),12000);
      }
    }
  } finally {
    student.saving=false;
  }
}

export function saveCampusWin(level,moves) {
  if(!active) return;
  active.scores.set(level,Math.min(moves,active.scores.get(level)||Infinity));
  storePending(active);
  sync(active);
}

export function setupProfiles({onGuest,onCampus,onBest,onError}) {
  if(!__CAMPUS__||!/^https?:$/.test(location.protocol)) return;
  const dialog=$('profile-dialog'), button=$('profile-toggle');
  const classSelect=$('profile-class'), students=$('profile-students'), message=$('profile-message');
  const title=$('profile-title'), modes=$('profile-modes'), modesBack=$('profile-modes-back');
  const classField=$('profile-class-field'), rosterField=$('profile-roster'), search=$('profile-search');
  let linkKey='', entered=false, generation=0;
  try {
    linkKey=new URLSearchParams(location.hash.slice(1)).get('campus')||'';
    if(linkKey) sessionStorage.setItem('sokoban-campus-link',linkKey);
    else linkKey=sessionStorage.getItem('sokoban-campus-link')||'';
  } catch {}

  function showModes() {
    generation++;
    title.textContent='选择身份';
    message.textContent='';
    modes.hidden=false;
    modesBack.hidden=classField.hidden=rosterField.hidden=true;
    $('profile-back').hidden=!entered;
  }

  function open() {
    showModes();
    dialog.showModal();
    title.focus();
  }

  function enter(student) {
    generation++;
    clearTimeout(retry);
    if(active) sync(active);
    active=student;
    if(student) {
      for(const [level,moves] of student.scores) {
        const best=student.records[level];
        if(!best||moves<best.moves) student.records[level]={moves};
      }
      onCampus(student.records);
      sync(student);
    } else {
      onGuest();
    }
    entered=true;
    button.textContent=student?student.name:'游客';
    button.title=student?`${student.className} · ${student.name}，切换身份`:'游客，切换身份';
    dialog.close();
  }

  button.hidden=false;
  document.body.classList.add('has-profiles');
  button.addEventListener('click',open);
  $('profile-back').addEventListener('click',()=>dialog.close());
  modesBack.addEventListener('click',()=>{
    showModes();
    $('play-campus').focus();
  });
  $('play-guest').addEventListener('click',()=>enter(null));
  dialog.addEventListener('cancel',event=>{if(!entered) event.preventDefault();});
  search.addEventListener('input',()=>{
    const query=search.value.trim().toLowerCase();
    let matches=0;
    for(const choice of students.children) {
      choice.hidden=!choice.textContent.toLowerCase().includes(query);
      if(!choice.hidden) matches++;
    }
    message.textContent=matches?'':'没有找到这个名字。';
  });
  $('play-campus').addEventListener('click',async()=>{
    const attempt=++generation;
    classField.hidden=rosterField.hidden=true;
    if(!linkKey) {message.textContent='请使用老师发放的校园链接。';return;}
    message.textContent='正在读取班级…';
    try {
      const {classes}=await request('classes',linkKey);
      if(!dialog.open||attempt!==generation) return;
      classSelect.replaceChildren(new Option('请选择班级',''),...classes.map(item=>new Option(item.name,item.id)));
      modes.hidden=$('profile-back').hidden=true;
      modesBack.hidden=classField.hidden=false;
      title.textContent='校园登录';
      message.textContent=classes.length?'':'暂时没有可选班级。';
      classSelect.focus();
    } catch(error) {
      if(attempt===generation) message.textContent=error.message||'读取班级失败，请重试。';
    }
  });
  classSelect.addEventListener('change',async()=>{
    const attempt=++generation;
    rosterField.hidden=true;
    if(classSelect.value==='') {message.textContent='';return;}
    const classId=Number(classSelect.value);
    message.textContent='正在读取姓名…';
    try {
      const roster=await request(`classes/${classId}/students`,linkKey);
      if(!dialog.open||attempt!==generation) return;
      students.replaceChildren(...roster.students.map(student=>{
        const choice=document.createElement('button');
        choice.textContent=student.name;
        choice.addEventListener('click',async()=>{
          const loginAttempt=++generation;
          message.textContent='正在进入游戏…';
          try {
            const profile=await request('login',linkKey,{classId,studentId:student.id});
            if(!dialog.open||loginAttempt!==generation) return;
            let current=profiles.get(student.id);
            if(current) Object.assign(current,profile);
            else {
              const scores=new Map(Object.entries(pendingScores()[student.id]||{}).map(([level,moves])=>[Number(level),moves]));
              current={...profile,id:student.id,scores,onBest,onError};
              profiles.set(student.id,current);
            }
            enter(current);
          } catch(error) {
            if(loginAttempt===generation) message.textContent=error.message||'进入失败，点姓名重试。';
          }
        });
        return choice;
      }));
      search.value='';
      search.hidden=roster.students.length<12;
      students.scrollTop=0;
      rosterField.hidden=!roster.students.length;
      message.textContent=roster.students.length?'':'这个班暂时没有学生名单。';
    } catch(error) {
      if(attempt===generation) message.textContent=error.message||'读取姓名失败，请重试。';
    }
  });
  window.addEventListener('online',()=>{if(active) sync(active);});
  window.addEventListener('pagehide',()=>{if(active) sync(active);});
  open();
}
