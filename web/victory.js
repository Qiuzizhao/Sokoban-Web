const colors=['#f3aa19','#ee5e63','#a062d5','#278fe0','#2baf78','#ed7d32'];
const duration=2.35;
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let canvas,frame;

function color() {
  return colors[Math.floor(Math.random()*colors.length)];
}

export function stopVictory() {
  if(!canvas) return;
  cancelAnimationFrame(frame);
  canvas.remove();
  canvas=undefined;
  document.body.classList.remove('win-celebrating');
  window.removeEventListener('resize',stopVictory);
  document.removeEventListener('visibilitychange',stopVictory);
}

export function playVictory() {
  stopVictory();
  if(reducedMotion.matches||document.hidden) return;

  const width=window.innerWidth,height=window.innerHeight;
  const scale=Math.min(window.devicePixelRatio||1,1.5,2560/Math.max(width,height));
  const surface=document.createElement('canvas');
  surface.width=Math.ceil(width*scale);
  surface.height=Math.ceil(height*scale);
  const ctx=surface.getContext('2d');
  if(!ctx) return;

  const unit=Math.max(.65,Math.min(1.35,height/720));
  const paper=[];
  for(const side of [-1,1]) {
    for(let i=0;i<38;i++) {
      paper.push({
        x:side===1?width*.06:width*.94,y:height*.86,
        vx:side*width*(.13+Math.random()*.36),vy:-height*(.55+Math.random()*.64),
        size:(6+Math.random()*7)*unit,angle:Math.random()*Math.PI,
        spin:side*(2+Math.random()*8),color:color(),delay:Math.random()*.18,
      });
    }
  }

  const fireworks=[];
  for(const [x,y,delay] of [[.23,.25,.08],[.77,.23,.30],[.5,.15,.55]]) {
    const accent=color();
    for(let i=0;i<32;i++) {
      const angle=(i+Math.random()*.65)*Math.PI/16;
      const speed=(75+Math.random()*110)*unit;
      fireworks.push({
        x:x*width,y:y*height,delay,life:.68+Math.random()*.55,
        vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,
        color:i%5===0?'#ffca52':accent,
      });
    }
  }

  canvas=surface;
  canvas.className='victory-canvas';
  canvas.setAttribute('aria-hidden','true');
  document.body.append(canvas);
  document.body.classList.add('win-celebrating');
  window.addEventListener('resize',stopVictory);
  document.addEventListener('visibilitychange',stopVictory);

  ctx.scale(scale,scale);
  ctx.lineCap='round';
  const start=performance.now();
  function draw(now) {
    const elapsed=(now-start)/1000;
    if(elapsed>=duration||reducedMotion.matches) {stopVictory();return;}
    ctx.clearRect(0,0,width,height);

    for(const spark of fireworks) {
      const t=elapsed-spark.delay;
      if(t<0||t>=spark.life) continue;
      const spread=t*(1-.28*t);
      const x=spark.x+spark.vx*spread;
      const y=spark.y+spark.vy*spread+38*unit*t*t;
      const trail=Math.min(.105,t);
      ctx.globalAlpha=.94*(1-t/spark.life);
      ctx.strokeStyle=spark.color;
      ctx.lineWidth=2.6*unit;
      ctx.beginPath();
      ctx.moveTo(x-spark.vx*trail,y-(spark.vy+76*unit*t)*trail);
      ctx.lineTo(x,y);
      ctx.stroke();
    }

    for(const piece of paper) {
      const t=elapsed-piece.delay;
      if(t<0) continue;
      const x=piece.x+piece.vx*(1-Math.exp(-1.6*t))/1.6;
      const y=piece.y+piece.vy*t+height*.64*t*t;
      ctx.globalAlpha=Math.min(.95,(duration-elapsed)*2.4);
      ctx.fillStyle=piece.color;
      ctx.save();
      ctx.translate(x,y);
      ctx.rotate(piece.angle+piece.spin*t);
      ctx.scale(.28+.72*Math.abs(Math.cos(piece.angle+t*7)),1);
      ctx.fillRect(-piece.size/2,-piece.size/3,piece.size,piece.size*.66);
      ctx.restore();
    }
    frame=requestAnimationFrame(draw);
  }
  frame=requestAnimationFrame(draw);
}
