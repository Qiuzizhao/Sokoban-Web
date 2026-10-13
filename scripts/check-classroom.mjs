import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
const root=path.resolve('../2026PPT'),name='6.3我是小小控制员-推箱子.html';
const html=fs.readFileSync(path.join(root,name),'utf8');
assert.ok(!/\?\.|\?\?|\.replaceAll\(|structuredClone|Object\.hasOwn|findLast/.test(html),'Chrome 79 syntax');
const styles=[...html.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(match=>match[1]).join('\n');
assert.ok(!/aspect-ratio:|inset:|\d(?:dvh|svh)/.test(styles),'Classroom CSS compatibility');
assert.ok(!/stopPropagation\(|stopImmediatePropagation\(/.test(html),'Event propagation');
const server=http.createServer((req,res)=>{
  const relative=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\//,'')||'index.html';
  const file=path.resolve(root,relative);
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  try{const bytes=fs.readFileSync(file);res.writeHead(200,{'Content-Type':file.endsWith('.html')?'text/html; charset=utf-8':'application/octet-stream'});res.end(bytes);}
  catch{res.writeHead(404).end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,channel:'msedge'});
try{
  const page=await browser.newPage({viewport:{width:1024,height:768}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  const base=`http://127.0.0.1:${server.address().port}/`;
  await page.goto(base);
  const links=await page.locator('a.item').evaluateAll(items=>items.map(a=>a.getAttribute('href')));
  assert.equal(links.length,20);
  for(const file of links)assert.ok(fs.existsSync(path.join(root,file)),`index target ${file}`);
  await page.locator(`a[href="${name}"]`).click();
  await page.locator('.crate').first().waitFor();
  const gameURL=page.url();
  assert.equal(await page.evaluate(()=>history.state.mtSentinel),1);
  await page.evaluate(()=>window.__probe='kept');
  for(const method of ['back','forward']){
    await page.evaluate(method=>history[method](),method);
    await page.waitForTimeout(250);
    assert.equal(page.url(),gameURL);
    assert.equal(await page.evaluate(()=>window.__probe),'kept');
  }
  const guard=await page.evaluate(()=>{
    let bubbled=false;const board=document.getElementById('board');
    board.addEventListener('contextmenu',()=>bubbled=true,{once:true});
    const event=new MouseEvent('contextmenu',{bubbles:true,cancelable:true});board.dispatchEvent(event);
    const input=document.createElement('input');document.body.append(input);
    const native=new MouseEvent('contextmenu',{bubbles:true,cancelable:true});input.dispatchEvent(native);input.remove();
    return {blocked:event.defaultPrevented,bubbled,inputAllowed:!native.defaultPrevented};
  });
  assert.deepEqual(guard,{blocked:true,bubbled:true,inputAllowed:true});
  await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#moves').textContent(),'1');
  await page.locator('#undo').click();assert.equal(await page.locator('#moves').textContent(),'0');
  await page.evaluate(()=>document.documentElement.classList.add('no-flexgap'));
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  fs.mkdirSync('qa',{recursive:true});
  await page.screenshot({path:'qa/classroom-edge.png',fullPage:true});
  assert.deepEqual(errors,[]);
  const report={status:'passed',browser:'Microsoft Edge',indexLinks:links.length,guards:guard,historyDocumentPreserved:true,legacySyntaxScan:true,legacyLayoutFallback:true,errors};
  fs.writeFileSync('qa/classroom-report.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify(report));
}finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
