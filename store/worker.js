addEventListener('fetch',e=>e.respondWith(h(e.request)));

const CSS=`:root{--navy:#0D1B2A;--blue:#1B6CDE;--orange:#E8611A;--gold:#F5B800;--white:#fff;--bg:#F8F9FA;--bg2:#EEF2F8;--text:#1A1A2E;--muted:#6B7280;--border:#E5E7EB;--r:12px}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#fff;color:var(--text);overflow-x:hidden}
a{text-decoration:none;color:inherit}
.topbar{background:var(--navy);color:rgba(255,255,255,.8);text-align:center;padding:10px 16px;font-size:12px;letter-spacing:.8px;font-weight:500}
.topbar span{color:var(--gold)}
.mainnav{background:#fff;border-bottom:1px solid var(--border);padding:0 40px;height:64px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:200;box-shadow:0 1px 12px rgba(0,0,0,.06)}
.logo{font-size:22px;font-weight:800;color:var(--navy);letter-spacing:2px}
.logo em{font-style:normal;color:var(--orange)}
.nav-links{display:flex;gap:8px;list-style:none}
.nav-links a{color:var(--muted);font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;padding:6px 12px;border-radius:6px;transition:all .2s}
.nav-links a:hover{background:var(--bg);color:var(--navy)}
.nav-r{display:flex;gap:8px;align-items:center}
.nav-icon{width:38px;height:38px;border:1.5px solid var(--border);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;position:relative}
.nav-icon:hover{border-color:var(--blue);background:var(--bg2)}
.nav-icon svg{width:17px;height:17px;stroke:var(--text);fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.cart-badge{position:absolute;top:-4px;right:-4px;background:var(--orange);color:#fff;border-radius:50%;width:16px;height:16px;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid #fff}
.catnav{background:#fff;border-bottom:2px solid var(--border);position:sticky;top:64px;z-index:190;overflow-x:auto;scrollbar-width:none}
.catnav::-webkit-scrollbar{display:none}
.catnav-inner{display:flex;min-width:max-content;padding:0 40px}
.catnav a{display:flex;align-items:center;gap:6px;padding:14px 20px;font-size:12.5px;font-weight:600;color:var(--muted);white-space:nowrap;border-bottom:3px solid transparent;margin-bottom:-2px;transition:all .2s}
.catnav a:hover,.catnav a.active{color:var(--blue);border-bottom-color:var(--blue)}
.hero{background:linear-gradient(135deg,var(--navy) 0%,#1B3A6A 60%,#1E5FAF 100%);padding:80px 40px;min-height:400px;display:flex;align-items:center;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;right:-100px;top:-100px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(27,108,222,.25),transparent 65%)}
.hero-inner{max-width:640px;position:relative;z-index:1}
.hero-eye{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;display:flex;align-items:center;gap:10px}
.hero-eye::before{content:'';width:24px;height:2px;background:var(--gold)}
.hero-h1{font-size:clamp(30px,5vw,54px);font-weight:800;line-height:1.1;color:#fff;margin-bottom:16px}
.hero-sub{font-size:16px;color:rgba(255,255,255,.65);line-height:1.7;margin-bottom:30px;max-width:500px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.btn-p{background:var(--orange);color:#fff;padding:14px 28px;font-size:13px;font-weight:700;border:none;border-radius:8px;cursor:pointer;transition:all .25s;display:inline-block}
.btn-p:hover{background:#C84E12;transform:translateY(-2px)}
.btn-o{background:transparent;color:#fff;border:2px solid rgba(255,255,255,.35);padding:14px 28px;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;transition:all .25s;display:inline-block}
.btn-o:hover{border-color:#fff;background:rgba(255,255,255,.1)}
.hero-badges{display:flex;gap:20px;margin-top:40px;padding-top:28px;border-top:1px solid rgba(255,255,255,.15);flex-wrap:wrap}
.hb{display:flex;align-items:center;gap:8px}
.hb-ico{width:34px;height:34px;background:rgba(255,255,255,.12);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px}
.hb-txt{font-size:12px;font-weight:600;color:rgba(255,255,255,.8)}
.cat-sec{padding:72px 40px}
.cat-sec:nth-child(even){background:var(--bg)}
.sec-hd{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:28px}
.sec-lbl{font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--blue);margin-bottom:6px}
.sec-h{font-size:clamp(20px,3vw,30px);font-weight:800;color:var(--navy)}
.sec-arrows{display:flex;gap:8px}
.arr{width:40px;height:40px;border:2px solid var(--border);border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;cursor:pointer;transition:all .2s;color:var(--navy);user-select:none}
.arr:hover{border-color:var(--blue);color:var(--blue)}
.ctrack{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:8px 4px 20px}
.ctrack::-webkit-scrollbar{display:none}
.pc{width:260px;flex-shrink:0;scroll-snap-align:start;background:#fff;border:1.5px solid var(--border);border-radius:var(--r);overflow:hidden;transition:all .3s;cursor:pointer;display:flex;flex-direction:column}
.pc:hover{border-color:rgba(27,108,222,.4);transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.1)}
.pc-img{height:200px;display:flex;align-items:center;justify-content:center;font-size:72px;position:relative;flex-shrink:0}
.pc-bdg{position:absolute;top:10px;left:10px;font-size:10px;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:20px}
.bh{background:#E63946;color:#fff}.bn{background:#2D6A4F;color:#fff}.bt{background:var(--blue);color:#fff}.bs{background:var(--orange);color:#fff}
.pc-body{padding:16px 18px 20px;flex:1;display:flex;flex-direction:column}
.pc-name{font-size:14px;font-weight:700;color:var(--navy);margin-bottom:4px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.pc-ben{font-size:12px;color:var(--muted);margin-bottom:8px;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.pc-stars{font-size:12px;color:var(--muted);margin-bottom:8px}
.pc-stars s{color:#F59E0B;font-style:normal}
.pc-pr{display:flex;align-items:baseline;gap:8px;margin-bottom:14px;flex-wrap:wrap}
.pc-p{font-size:19px;font-weight:800;color:var(--navy)}
.pc-op{font-size:12px;color:var(--muted);text-decoration:line-through}
.pc-sv{font-size:10px;background:#FEF3C7;color:#92400E;padding:2px 7px;border-radius:12px;font-weight:700}
.pc-btn{background:var(--navy);color:#fff;border:none;padding:10px;font-size:11.5px;font-weight:700;border-radius:7px;cursor:pointer;transition:all .2s;width:100%;margin-top:auto}
.pc-btn:hover{background:var(--blue)}
.va{text-align:center;margin-top:24px}
.btn-va{display:inline-flex;align-items:center;gap:6px;border:2px solid var(--border);color:var(--navy);padding:11px 24px;font-size:12px;font-weight:700;border-radius:8px;cursor:pointer;transition:all .2s;background:#fff}
.btn-va:hover{border-color:var(--blue);color:var(--blue)}
.trust-strip{background:var(--navy);padding:40px}
.tg{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;max-width:900px;margin:0 auto;text-align:center}
.tg-ico{font-size:28px;margin-bottom:10px}
.tg-t{font-size:14px;font-weight:700;color:#fff;margin-bottom:4px}
.tg-s{font-size:12px;color:rgba(255,255,255,.45)}
footer{background:var(--navy);padding:60px 40px 32px}
.fg{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}
.fl{font-size:22px;font-weight:800;color:#fff;letter-spacing:2px;margin-bottom:10px}
.fl em{font-style:normal;color:var(--orange)}
.fd{font-size:13px;color:rgba(255,255,255,.4);line-height:1.7}
.fch{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.45);margin-bottom:14px}
.fcl{list-style:none}
.fcl li{margin-bottom:9px}
.fcl a{color:rgba(255,255,255,.55);font-size:13px;transition:color .2s}
.fcl a:hover{color:var(--gold)}
.fb{border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;align-items:center;font-size:12px;color:rgba(255,255,255,.3)}
.cart-ov{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:400;opacity:0;pointer-events:none;transition:opacity .3s}
.cart-ov.on{opacity:1;pointer-events:all}
.cart-dr{position:fixed;top:0;right:-440px;width:440px;max-width:100vw;height:100vh;background:#fff;z-index:401;display:flex;flex-direction:column;transition:right .35s cubic-bezier(.4,0,.2,1);box-shadow:-4px 0 32px rgba(0,0,0,.1)}
.cart-dr.on{right:0}
.cart-hd{padding:24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center}
.cart-hd h3{font-size:18px;font-weight:800;color:var(--navy)}
.cart-cl{background:none;border:none;font-size:22px;cursor:pointer;color:var(--muted)}
.cart-bd{flex:1;overflow-y:auto;padding:20px 24px}
.ce{text-align:center;padding:60px 20px;color:var(--muted)}
.ce-ico{font-size:48px;margin-bottom:12px}
.ci{display:flex;gap:14px;padding:16px 0;border-bottom:1px solid var(--border)}
.ci-img{width:56px;height:56px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:26px;background:var(--bg)}
.ci-n{font-size:13px;font-weight:600;color:var(--navy);margin-bottom:2px}
.ci-v{font-size:11px;color:var(--muted)}
.ci-p{font-size:15px;font-weight:700;color:var(--blue)}
.ci-rm{background:none;border:none;color:var(--muted);cursor:pointer;font-size:14px;margin-left:auto;align-self:flex-start}
.cart-ft{padding:20px 24px;border-top:1px solid var(--border)}
.ct{display:flex;justify-content:space-between;font-size:16px;font-weight:700;color:var(--navy);margin-bottom:14px}
.btn-co{width:100%;background:var(--orange);color:#fff;border:none;padding:14px;font-size:14px;font-weight:700;border-radius:8px;cursor:pointer}
.btn-co:hover{background:#C84E12}
.btn-cs{width:100%;background:transparent;color:var(--navy);border:2px solid var(--border);padding:11px;font-size:13px;font-weight:600;border-radius:8px;cursor:pointer;margin-top:8px}
.st{position:fixed;bottom:24px;right:24px;width:42px;height:42px;background:var(--navy);color:#fff;border:none;border-radius:8px;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:100;opacity:0;pointer-events:none;transition:all .3s}
.st.on{opacity:1;pointer-events:all}
.st:hover{background:var(--blue)}
.pp-back{display:inline-flex;align-items:center;gap:6px;color:var(--muted);font-size:13px;font-weight:600;padding:20px 40px;cursor:pointer;transition:color .2s}
.pp-back:hover{color:var(--blue)}
.pp-wrap{max-width:1100px;margin:0 auto;padding:0 40px 80px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
.pp-gal{position:sticky;top:130px}
.pp-main{height:360px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:110px;border:2px solid var(--border);background:linear-gradient(135deg,#F8F9FA,#EEF2F8);margin-bottom:12px}
.pp-thumbs{display:flex;gap:10px}
.pp-th{width:68px;height:68px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:26px;border:2px solid var(--border);cursor:pointer;background:var(--bg);transition:all .2s}
.pp-th.act,.pp-th:hover{border-color:var(--blue)}
.pp-cat{font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--blue);margin-bottom:8px}
.pp-nm{font-size:clamp(20px,3vw,30px);font-weight:800;color:var(--navy);line-height:1.15;margin-bottom:10px}
.pp-rat{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted);margin-bottom:16px}
.pp-rat .st2{color:#F59E0B}
.pp-pr{display:flex;align-items:baseline;gap:10px;margin-bottom:18px;flex-wrap:wrap}
.pp-p{font-size:30px;font-weight:800;color:var(--navy)}
.pp-op{font-size:16px;color:var(--muted);text-decoration:line-through}
.pp-sv{background:#FEF3C7;color:#92400E;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700}
.pp-ben{background:var(--bg2);border-left:4px solid var(--blue);padding:12px 16px;border-radius:0 8px 8px 0;font-size:14px;font-weight:600;color:var(--navy);margin-bottom:20px;line-height:1.5}
.pp-lbl{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.pp-vars{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}
.pp-v{padding:8px 14px;border:2px solid var(--border);border-radius:7px;font-size:12.5px;font-weight:600;cursor:pointer;transition:all .2s;color:var(--navy)}
.pp-v.act,.pp-v:hover{border-color:var(--blue);color:var(--blue);background:var(--bg2)}
.pp-qty{display:flex;align-items:center;gap:0;margin-bottom:20px;width:120px;border:2px solid var(--border);border-radius:8px;overflow:hidden}
.pp-qty button{background:none;border:none;width:36px;height:38px;font-size:18px;cursor:pointer;color:var(--navy)}
.pp-qty button:hover{background:var(--bg)}
.pp-qty span{flex:1;text-align:center;font-size:15px;font-weight:700}
.pp-btns{display:flex;gap:10px;margin-bottom:24px}
.btn-ac{flex:1;background:var(--navy);color:#fff;border:none;padding:14px;font-size:13px;font-weight:700;border-radius:8px;cursor:pointer;transition:background .2s}
.btn-ac:hover{background:var(--blue)}
.btn-bn{flex:1;background:var(--orange);color:#fff;border:none;padding:14px;font-size:13px;font-weight:700;border-radius:8px;cursor:pointer;transition:background .2s}
.btn-bn:hover{background:#C84E12}
.pp-tr{display:flex;gap:14px;flex-wrap:wrap;padding:14px;background:var(--bg);border-radius:10px;margin-bottom:24px}
.pp-tr span{font-size:12px;font-weight:600;color:var(--muted);display:flex;align-items:center;gap:5px}
.pp-sh{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:10px;padding-bottom:8px;border-top:1px solid var(--border);padding-top:18px;margin-top:8px}
.pp-d{font-size:14px;color:var(--muted);line-height:1.75;margin-bottom:16px}
.pp-ul{list-style:none;display:flex;flex-direction:column;gap:7px;margin-bottom:16px}
.pp-ul li{font-size:14px;color:var(--text);display:flex;gap:8px}
.pp-ul li::before{content:'✓';color:var(--blue);font-weight:700;flex-shrink:0}
.pp-il li::before{content:'•';color:var(--orange)}
.sg{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.sc{background:var(--bg);border-radius:10px;padding:12px;font-size:13px}
.sc strong{display:block;color:var(--navy);font-weight:700;margin-bottom:2px}
.sc span{color:var(--muted)}
.fq-item{border-bottom:1px solid var(--border)}
.fq-q{width:100%;background:none;border:none;padding:13px 0;font-size:14px;font-weight:600;color:var(--navy);text-align:left;cursor:pointer;display:flex;justify-content:space-between}
.fq-q s{color:var(--blue);font-size:18px;font-style:normal;transition:transform .3s}
.fq-q.o s{transform:rotate(45deg)}
.fq-a{font-size:14px;color:var(--muted);line-height:1.7;padding-bottom:13px;display:none}
.fq-a.o{display:block}
.rel-sec{padding:52px 40px;background:var(--bg)}
.rel-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;max-width:1100px;margin:0 auto}
@media(max-width:960px){
  .mainnav{padding:0 16px}.nav-links{display:none}
  .catnav-inner{padding:0 16px}
  .hero{padding:60px 20px}
  .cat-sec{padding:52px 16px}
  .sec-hd{flex-direction:column;align-items:flex-start;gap:12px}
  .tg{grid-template-columns:repeat(2,1fr)}
  .fg{grid-template-columns:1fr 1fr}
  footer{padding:48px 20px 24px}
  .pp-wrap{grid-template-columns:1fr;gap:32px;padding:0 20px 60px}
  .pp-gal{position:static}
  .rel-grid{grid-template-columns:repeat(2,1fr)}
  .rel-sec{padding:40px 16px}
}
@media(max-width:520px){
  .fg{grid-template-columns:1fr}
  .hero-btns{flex-direction:column}
  .hero-badges{gap:12px}
  .cart-dr{width:100%}
  .pp-btns{flex-direction:column}
  .sg{grid-template-columns:1fr}
  .rel-grid{grid-template-columns:1fr 1fr}
}
/* ═══ HERO v5 — Premium DTC ═══ */
.hero{display:grid;grid-template-columns:55fr 45fr;min-height:640px;position:relative;overflow:visible}
.hero-left{
  background:
    radial-gradient(ellipse 55% 50% at 8% 65%, rgba(37,99,235,.2) 0%, transparent 55%),
    radial-gradient(ellipse 40% 35% at 92% 8%, rgba(14,48,120,.15) 0%, transparent 50%),
    linear-gradient(148deg,#050D1A 0%,#09162C 28%,#0D1F3C 60%,#081528 100%);
  padding:88px 68px 84px 60px;
  display:flex;flex-direction:column;justify-content:center;
  position:relative;overflow:hidden;
}
.h-shimmer{position:absolute;right:0;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,transparent 0%,rgba(91,158,240,.35) 30%,rgba(126,200,255,.55) 60%,transparent 100%);pointer-events:none}
.hero-right{position:relative;overflow:hidden;background:#060F1C;min-height:640px}
.h-img-glow{position:absolute;inset:-15%;background:radial-gradient(ellipse 75% 70% at 55% 52%,rgba(200,144,42,.2) 0%,rgba(30,70,160,.1) 45%,transparent 70%);z-index:0;pointer-events:none}
.hero-img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.86) saturate(1.1) contrast(1.03);transition:transform 9s ease;position:relative;z-index:1}
.hero:hover .hero-img{transform:scale(1.04)}
.h-vignette{position:absolute;inset:0;z-index:2;pointer-events:none;background:
  linear-gradient(to right,rgba(5,13,26,.5) 0%,rgba(5,13,26,.12) 28%,transparent 52%),
  linear-gradient(to top,rgba(4,10,20,.7) 0%,rgba(4,10,20,.12) 38%,transparent 58%),
  linear-gradient(to bottom,rgba(4,10,20,.35) 0%,transparent 28%)}

/* — Eyebrow — */
.h-eyebrow{display:inline-flex;align-items:center;gap:10px;margin-bottom:26px;position:relative;z-index:1}
.h-eyedot{width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#7EC8FF,#5B9EF0);flex-shrink:0;box-shadow:0 0 8px rgba(91,158,240,.5)}
.h-eyetext{font-size:10.5px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(126,200,255,.85);position:relative}

/* — Headline — */
.h-headline{font-size:clamp(27px,3vw,46px);font-weight:800;line-height:1.11;color:#EEF2FF;letter-spacing:-.5px;margin-bottom:20px;position:relative;z-index:1}
.h-headline em{font-style:normal;background:linear-gradient(125deg,#93C5FD 0%,#60A5FA 45%,#93C5FD 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.h-rule{width:44px;height:2px;background:linear-gradient(to right,rgba(91,158,240,.6),transparent);margin-bottom:20px;position:relative;z-index:1}

/* — Quote + Sub — */
.h-quote{font-size:13.5px;color:rgba(238,242,255,.38);font-style:italic;line-height:1.65;margin-bottom:20px;padding:11px 16px;border-left:2px solid rgba(91,158,240,.4);background:rgba(91,158,240,.06);border-radius:0 10px 10px 0;position:relative;z-index:1}
.h-sub{font-size:14.5px;color:rgba(238,242,255,.56);line-height:1.78;margin-bottom:36px;max-width:435px;position:relative;z-index:1;font-weight:400}

/* — CTAs — */
.h-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;position:relative;z-index:1}
.h-cta1{background:#EEF2FF;color:#07111E;padding:15px 28px;font-size:13px;font-weight:800;border:none;border-radius:10px;cursor:pointer;transition:all .3s;display:inline-block;text-decoration:none;letter-spacing:.1px;box-shadow:0 2px 16px rgba(238,242,255,.15)}
.h-cta1:hover{background:#fff;transform:translateY(-2px);box-shadow:0 8px 28px rgba(238,242,255,.22)}
.h-cta2{background:transparent;color:rgba(238,242,255,.68);border:1.5px solid rgba(238,242,255,.16);padding:15px 28px;font-size:13px;font-weight:600;border-radius:10px;cursor:pointer;transition:all .3s;display:inline-block;text-decoration:none}
.h-cta2:hover{border-color:rgba(91,158,240,.55);color:rgba(147,197,253,.9);background:rgba(91,158,240,.09)}

/* — Glass Trust Bar — */
.h-trust{display:flex;align-items:stretch;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1);border-radius:16px;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);overflow:hidden;position:relative;z-index:1}
.h-ti{display:flex;align-items:center;gap:11px;padding:16px 18px;flex:1;border-right:1px solid rgba(255,255,255,.07);transition:background .2s;cursor:default}
.h-ti:last-child{border-right:none}
.h-ti:hover{background:rgba(255,255,255,.04)}
.h-ti-ico{font-size:20px;flex-shrink:0;line-height:1}
.h-ti-inner{display:flex;flex-direction:column;gap:1px}
.h-ti-label{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(238,242,255,.3)}
.h-ti-txt{font-size:12px;font-weight:700;color:rgba(238,242,255,.75);white-space:nowrap}

/* — Floating Cards — */
.fc5{position:absolute;z-index:10;background:rgba(255,255,255,.97);border-radius:18px;box-shadow:0 16px 56px rgba(0,0,0,.26),0 3px 12px rgba(0,0,0,.12)}
/* Product card — bottom-left overlap */
.fc5-prod{bottom:36px;left:-44px;padding:18px 20px;display:flex;align-items:flex-start;gap:14px;min-width:248px;animation:fc5f 5.5s ease-in-out infinite}
/* Rating card — top-right */
.fc5-rate{top:38px;right:-36px;padding:18px 22px;min-width:178px;animation:fc5f 5.5s ease-in-out 1.8s infinite}
/* Delivery badge — mid-right */
.fc5-del{bottom:148px;right:-34px;padding:13px 18px;display:flex;align-items:center;gap:11px;min-width:195px;animation:fc5f 5.5s ease-in-out .9s infinite}
@keyframes fc5f{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}

/* Product card internals */
.fc5-badge{display:inline-block;font-size:9px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;background:#E8611A;color:#fff;padding:3px 9px;border-radius:6px;margin-bottom:8px}
.fc5-imgbox{width:52px;height:52px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:27px;background:linear-gradient(135deg,#EFF6FF,#DBEAFE);flex-shrink:0;margin-top:3px}
.fc5-name{font-size:13px;font-weight:700;color:#0F172A;line-height:1.3;margin-bottom:6px}
.fc5-prow{display:flex;align-items:center;gap:7px}
.fc5-price{font-size:16px;font-weight:800;color:#1B6CDE}
.fc5-was{font-size:11px;color:#94A3B8;text-decoration:line-through;font-weight:500}
.fc5-pstars{font-size:11px;color:#F59E0B;letter-spacing:.5px;margin-top:4px}

/* Rating card internals */
.fc5-rstars{font-size:16px;color:#F59E0B;letter-spacing:1px;margin-bottom:6px}
.fc5-rnum{font-size:24px;font-weight:800;color:#0F172A;line-height:1}
.fc5-rlabel{font-size:12px;font-weight:600;color:#334155;margin:3px 0 1px}
.fc5-rsub{font-size:11px;color:#94A3B8}
.fc5-rbar{height:5px;background:#F1F5F9;border-radius:3px;margin-top:12px;overflow:hidden}
.fc5-rbar-fill{height:100%;width:96%;background:linear-gradient(to right,#F59E0B,#FCD34D);border-radius:3px}

/* Delivery card internals */
.fc5-del-ico{font-size:22px;flex-shrink:0}
.fc5-del-title{font-size:13px;font-weight:700;color:#0F172A}
.fc5-del-sub{font-size:11px;color:#64748B;margin-top:2px}

/* Mobile */
@media(max-width:960px){
  .hero{grid-template-columns:1fr;min-height:auto}
  .hero-left{padding:52px 24px 48px}
  .hero-right{min-height:340px}
  .fc5-prod{bottom:14px;left:12px;min-width:200px;padding:14px 16px}
  .fc5-rate{top:14px;right:12px;min-width:155px;padding:14px 16px}
  .fc5-del{display:none}
  .h-ti{padding:13px 14px}
  .h-ti-txt{font-size:11.5px}
}
@media(max-width:520px){
  .hero-right{min-height:240px}
  .h-headline{font-size:25px}
  .fc5-prod{min-width:170px}
  .h-btns{flex-direction:column}
  .h-trust{flex-direction:column;border-radius:12px}
  .h-ti{border-right:none;border-bottom:1px solid rgba(255,255,255,.07);flex:none}
  .h-ti:last-child{border-bottom:none}
}`;

const JS=`let C=[];
function oC(){document.getElementById('co').classList.add('on');document.getElementById('cd').classList.add('on')}
function cC(){document.getElementById('co').classList.remove('on');document.getElementById('cd').classList.remove('on')}
function addC(slug,vn,price,emoji){
  C.push({slug,vn,price,emoji});rC();oC();
  document.getElementById('cb').textContent=C.length;
}
function rmC(i){C.splice(i,1);rC();document.getElementById('cb').textContent=C.length||'0'}
function rC(){
  const b=document.getElementById('cdb'),f=document.getElementById('cdf');
  if(!C.length){b.innerHTML='<div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div>';f.innerHTML='';return;}
  const t=C.reduce((a,x)=>a+x.price,0).toFixed(2);
  b.innerHTML=C.map((x,i)=>\`<div class="ci"><div class="ci-img">\${x.emoji}</div><div style="flex:1"><div class="ci-n">\${x.slug.replace(/-/g,' ').replace(/\\b\\w/g,c=>c.toUpperCase())}</div><div class="ci-v">\${x.vn||''}</div><div class="ci-p">$\${x.price.toFixed(2)}</div></div><button class="ci-rm" onclick="rmC(\${i})">✕</button></div>\`).join('');
  f.innerHTML=\`<div class="ct"><span>Total</span><span>$\${t}</span></div><button class="btn-co">Checkout →</button><button class="btn-cs" onclick="cC()">Continue Shopping</button>\`;
}
function sl(id,d){const t=document.getElementById(id);if(!t)return;const c=t.querySelector('.pc');if(!c)return;t.scrollBy({left:d*(c.offsetWidth+20)*2,behavior:'smooth'});}
function tfaq(el){const a=el.nextElementSibling;const o=a.classList.contains('o');document.querySelectorAll('.fq-a').forEach(x=>x.classList.remove('o'));document.querySelectorAll('.fq-q').forEach(x=>x.classList.remove('o'));if(!o){a.classList.add('o');el.classList.add('o');}}
function qd(d){const s=document.getElementById('qd');if(!s)return;let v=parseInt(s.textContent)+d;if(v<1)v=1;if(v>99)v=99;s.textContent=v;}
function sv(el,p){document.querySelectorAll('.pp-v').forEach(v=>v.classList.remove('act'));el.classList.add('act');const pe=document.getElementById('ppp');if(pe)pe.textContent='$'+p.toFixed(2);}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.ctrack').forEach(t=>{let sx;t.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});t.addEventListener('touchend',e=>{const d=sx-e.changedTouches[0].clientX;if(Math.abs(d)>40)t.scrollBy({left:d*1.5,behavior:'smooth'});},{passive:true});});
  const ids=['best-sellers','kitchen','home-org','smart-home','pet'];
  const nls=document.querySelectorAll('.catnav a');
  window.addEventListener('scroll',()=>{
    document.getElementById('stt').classList.toggle('on',scrollY>400);
    ids.forEach((id,i)=>{const el=document.getElementById(id);if(!el)return;const t=el.getBoundingClientRect().top;if(t<=140&&t>-el.offsetHeight+140){nls.forEach(l=>l.classList.remove('active'));if(nls[i])nls[i].classList.add('active');}});
  });
});`;

async function h(req){
  const url=new URL(req.url);
  const path=url.pathname.replace(/\/$/,'').toLowerCase();
  const html={'Content-Type':'text/html;charset=UTF-8','Cache-Control':'public,max-age=120'};
  const css={'Content-Type':'text/css;charset=UTF-8','Cache-Control':'public,max-age=86400'};
  const js={'Content-Type':'text/javascript;charset=UTF-8','Cache-Control':'public,max-age=86400'};
  if(path==='/styles.css')return new Response(CSS,{headers:css});
  if(path==='/script.js')return new Response(JS,{headers:js});
  if(path===''||path==='/')return new Response(P0(),{headers:html});
  const m=path.match(/^\/products\/(.+)$/);
  if(m){const fn=PM[m[1]];if(fn)return new Response(fn(),{headers:html});return new Response('Product not found',{status:404});}
  const sp=STATIC[path];if(sp)return new Response(sp(),{headers:html});
  return new Response('Not found',{status:404});
}

function P0(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Premium Home & Lifestyle Store | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<section class="hero">
  <div class="hero-left">
    <div class="h-shimmer"></div>
    <div class="h-eyebrow">
      <span class="h-eyedot"></span>
      <span class="h-eyetext">Trusted U.S. Home Essentials</span>
    </div>
    <h1 class="h-headline">Make Every Corner<br>Of Your Home Feel<br><em>Smarter &amp; Easier</em></h1>
    <div class="h-rule"></div>
    <p class="h-quote">&ldquo;Small upgrades that make everyday home life feel easier.&rdquo;</p>
    <p class="h-sub">Practical kitchen, organization, smart home, and pet essentials&nbsp;&mdash; designed to save time, reduce clutter, and simplify the way you live.</p>
    <div class="h-btns">
      <a href="#best-sellers" class="h-cta1">Shop Customer Favorites</a>
      <a href="#kitchen" class="h-cta2">Explore Collections</a>
    </div>
    <div class="h-trust">
      <div class="h-ti">
        <span class="h-ti-ico">&#127968;</span>
        <div class="h-ti-inner">
          <div class="h-ti-label">Selection</div>
          <div class="h-ti-txt">Curated Home Finds</div>
        </div>
      </div>
      <div class="h-ti">
        <span class="h-ti-ico">&#128230;</span>
        <div class="h-ti-inner">
          <div class="h-ti-label">Delivery</div>
          <div class="h-ti-txt">Fast US Shipping</div>
        </div>
      </div>
      <div class="h-ti">
        <span class="h-ti-ico">&#128274;</span>
        <div class="h-ti-inner">
          <div class="h-ti-label">Payment</div>
          <div class="h-ti-txt">Secure Checkout</div>
        </div>
      </div>
      <div class="h-ti">
        <span class="h-ti-ico">&#8617;&#65039;</span>
        <div class="h-ti-inner">
          <div class="h-ti-label">Guarantee</div>
          <div class="h-ti-txt">30-Day Returns</div>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-right">
    <div class="h-img-glow"></div>
    <img class="hero-img"
      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=750&q=88&auto=format&fit=crop&crop=center"
      alt="Modern organized kitchen with practical home essentials"
      loading="eager"/>
    <div class="h-vignette"></div>
    <div class="fc5 fc5-prod">
      <div class="fc5-imgbox">&#129803;</div>
      <div>
        <div class="fc5-badge">Best Seller</div>
        <div class="fc5-name">Airtight Container Set</div>
        <div class="fc5-prow">
          <span class="fc5-price">$24.99</span>
          <span class="fc5-was">$44.99</span>
        </div>
        <div class="fc5-pstars">&#9733;&#9733;&#9733;&#9733;&#9733; 4.8</div>
      </div>
    </div>
    <div class="fc5 fc5-rate">
      <div class="fc5-rstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <div class="fc5-rnum">4.8</div>
      <div class="fc5-rlabel">Customer Rating</div>
      <div class="fc5-rsub">Based on verified orders</div>
      <div class="fc5-rbar"><div class="fc5-rbar-fill"></div></div>
    </div>
    <div class="fc5 fc5-del">
      <span class="fc5-del-ico">&#128230;</span>
      <div>
        <div class="fc5-del-title">Free Shipping on $50+</div>
        <div class="fc5-del-sub">Tracked to your door</div>
      </div>
    </div>
  </div>
</section>



<section class="cat-sec" id="best-sellers">
  <div class="sec-hd">
    <div><div class="sec-lbl">🔥 Best Sellers</div><h2 class="sec-h">Best Sellers</h2></div>
    <div class="sec-arrows"><button class="arr" onclick="sl('t-best-sellers',-1)">&#8249;</button><button class="arr" onclick="sl('t-best-sellers',1)">&#8250;</button></div>
  </div>
  <div class="ctrack" id="t-best-sellers"><div class="pc" onclick="location='/products/airtight-steel-container'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2)"><span>🥫</span><div class="pc-bdg bh">Best Seller</div></div>
  <div class="pc-body">
    <div class="pc-name">Airtight Steel Food Container Set</div>
    <div class="pc-ben">Keeps pantry staples fresh and neatly organized</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (342)</div>
    <div class="pc-pr"><span class="pc-p">$24.99</span><span class="pc-op">$44.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/motion-sensor-night-light'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4)"><span>💡</span><div class="pc-bdg bh">Best Seller</div></div>
  <div class="pc-body">
    <div class="pc-name">Motion Sensor LED Night Light (2-Pack)</div>
    <div class="pc-ben">Hands-free lighting for hallways, stairs & bathrooms</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (518)</div>
    <div class="pc-pr"><span class="pc-p">$16.99</span><span class="pc-op">$29.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/foldable-storage-organizer'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9)"><span>📦</span><div class="pc-bdg bh">Best Seller</div></div>
  <div class="pc-body">
    <div class="pc-name">Foldable Fabric Storage Organizer Box</div>
    <div class="pc-ben">Collapses flat when not in use</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (289)</div>
    <div class="pc-pr"><span class="pc-p">$19.99</span><span class="pc-op">$34.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/pet-water-feeder'">
  <div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9)"><span>🐾</span><div class="pc-bdg bh">Best Seller</div></div>
  <div class="pc-body">
    <div class="pc-name">Gravity-Fed Pet Water & Food Feeder</div>
    <div class="pc-ben">Auto-refills so pets always have access to water</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (402)</div>
    <div class="pc-pr"><span class="pc-p">$22.99</span><span class="pc-op">$39.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/electric-cleaning-brush'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB)"><span>🪥</span><div class="pc-bdg bh">Best Seller</div></div>
  <div class="pc-body">
    <div class="pc-name">Electric Spin Scrubber Cleaning Brush</div>
    <div class="pc-ben">Makes scrubbing tiles, grout, and tubs easier</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (637)</div>
    <div class="pc-pr"><span class="pc-p">$29.99</span><span class="pc-op">$54.99</span><span class="pc-sv">45% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/kitchen-shelf-organizer'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2)"><span>🗄️</span><div class="pc-bdg bh">Best Seller</div></div>
  <div class="pc-body">
    <div class="pc-name">Adjustable 2-Tier Counter Shelf Organizer</div>
    <div class="pc-ben">Doubles usable counter space instantly</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (724)</div>
    <div class="pc-pr"><span class="pc-p">$21.99</span><span class="pc-op">$38.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div></div>
  <div class="va"><button class="btn-va">View All Best Sellers →</button></div>
</section><section class="cat-sec" id="kitchen">
  <div class="sec-hd">
    <div><div class="sec-lbl">🍳 Kitchen Essentials</div><h2 class="sec-h">Kitchen Essentials</h2></div>
    <div class="sec-arrows"><button class="arr" onclick="sl('t-kitchen',-1)">&#8249;</button><button class="arr" onclick="sl('t-kitchen',1)">&#8250;</button></div>
  </div>
  <div class="ctrack" id="t-kitchen"><div class="pc" onclick="location='/products/spice-organizer-rack'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FAFAFA,#F0F0F0)"><span>🧂</span><div class="pc-bdg bn">New Arrival</div></div>
  <div class="pc-body">
    <div class="pc-name">Rotating 2-Tier Spice Rack</div>
    <div class="pc-ben">Keeps all your spices visible and within easy reach</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (481)</div>
    <div class="pc-pr"><span class="pc-p">$18.99</span><span class="pc-op">$32.99</span><span class="pc-sv">42% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/oil-spray-bottle'">
  <div class="pc-img" style="background:linear-gradient(135deg,#F1F8E9,#DCEDC8)"><span>🫒</span><div class="pc-bdg bn">New Arrival</div></div>
  <div class="pc-body">
    <div class="pc-name">Refillable Glass Oil Misting Spray Bottle</div>
    <div class="pc-ben">Even oil coating for cooking — easy to control</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (893)</div>
    <div class="pc-pr"><span class="pc-p">$12.99</span><span class="pc-op">$22.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/fridge-storage-box'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB)"><span>❄️</span><div class="pc-bdg bn">New Arrival</div></div>
  <div class="pc-body">
    <div class="pc-name">Stackable Fridge Storage Bins (4-Pack)</div>
    <div class="pc-ben">Keep your fridge tidy and food easy to find</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (612)</div>
    <div class="pc-pr"><span class="pc-p">$16.99</span><span class="pc-op">$29.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/vegetable-chopper'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9)"><span>🥦</span><div class="pc-bdg bn">New Arrival</div></div>
  <div class="pc-body">
    <div class="pc-name">Manual Push Vegetable Chopper & Dicer</div>
    <div class="pc-ben">Dice onions, tomatoes, and veggies quickly</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (748)</div>
    <div class="pc-pr"><span class="pc-p">$19.99</span><span class="pc-op">$34.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/sink-organizer'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2)"><span>🚰</span><div class="pc-bdg bn">New Arrival</div></div>
  <div class="pc-body">
    <div class="pc-name">Over-Sink Dish Drying Rack</div>
    <div class="pc-ben">Maximizes sink-side space for drying dishes</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (394)</div>
    <div class="pc-pr"><span class="pc-p">$26.99</span><span class="pc-op">$46.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/airtight-container-set'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2)"><span>🫙</span><div class="pc-bdg bn">New Arrival</div></div>
  <div class="pc-body">
    <div class="pc-name">BPA-Free Dry Goods Container Set (6-Pack)</div>
    <div class="pc-ben">Lock in freshness with airtight flip-lock lids</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (519)</div>
    <div class="pc-pr"><span class="pc-p">$22.99</span><span class="pc-op">$39.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div></div>
  <div class="va"><button class="btn-va">View All Kitchen Essentials →</button></div>
</section><section class="cat-sec" id="home-org">
  <div class="sec-hd">
    <div><div class="sec-lbl">🏠 Home Organization</div><h2 class="sec-h">Home Organization</h2></div>
    <div class="sec-arrows"><button class="arr" onclick="sl('t-home-org',-1)">&#8249;</button><button class="arr" onclick="sl('t-home-org',1)">&#8250;</button></div>
  </div>
  <div class="ctrack" id="t-home-org"><div class="pc" onclick="location='/products/drawer-organizer'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFF8E1,#FFECB3)"><span>🗃️</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Expandable Bamboo Drawer Organizer Set</div>
    <div class="pc-ben">Divides drawer space into neat compartments</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (826)</div>
    <div class="pc-pr"><span class="pc-p">$17.99</span><span class="pc-op">$29.99</span><span class="pc-sv">40% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/foldable-storage-box'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9)"><span>📦</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Collapsible Fabric Storage Box with Lid</div>
    <div class="pc-ben">Collapses for compact storage between uses</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (533)</div>
    <div class="pc-pr"><span class="pc-p">$14.99</span><span class="pc-op">$24.99</span><span class="pc-sv">40% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/cable-organizer'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9)"><span>🔌</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Desk Cable Management Clips (10-Pack)</div>
    <div class="pc-ben">Keeps desk cables tidy and tangle-free</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (1,124)</div>
    <div class="pc-pr"><span class="pc-p">$9.99</span><span class="pc-op">$17.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/closet-space-saver'">
  <div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7)"><span>👔</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Velvet Slim Closet Hangers (50-Pack)</div>
    <div class="pc-ben">Slim profile saves significant closet space</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (2,187)</div>
    <div class="pc-pr"><span class="pc-p">$18.99</span><span class="pc-op">$32.99</span><span class="pc-sv">42% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/laundry-basket'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2)"><span>🧺</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Pop-Up Mesh Laundry Hamper (65L)</div>
    <div class="pc-ben">Pops open instantly, collapses to 3cm flat</div>
    <div class="pc-stars"><s>★★★★★</s> 4.5 (718)</div>
    <div class="pc-pr"><span class="pc-p">$14.99</span><span class="pc-op">$26.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/wall-storage-rack'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2)"><span>🔧</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Floating Wall-Mounted Storage Shelf</div>
    <div class="pc-ben">Adds storage space to any wall</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (489)</div>
    <div class="pc-pr"><span class="pc-p">$23.99</span><span class="pc-op">$41.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div></div>
  <div class="va"><button class="btn-va">View All Home Organization →</button></div>
</section><section class="cat-sec" id="smart-home">
  <div class="sec-hd">
    <div><div class="sec-lbl">💡 Smart Home Finds</div><h2 class="sec-h">Smart Home Finds</h2></div>
    <div class="sec-arrows"><button class="arr" onclick="sl('t-smart-home',-1)">&#8249;</button><button class="arr" onclick="sl('t-smart-home',1)">&#8250;</button></div>
  </div>
  <div class="ctrack" id="t-smart-home"><div class="pc" onclick="location='/products/motion-sensor-light'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4)"><span>🔦</span><div class="pc-bdg bs">Popular</div></div>
  <div class="pc-body">
    <div class="pc-name">Wireless Motion-Activated Closet Light</div>
    <div class="pc-ben">Lights up automatically when you open a cabinet</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (1,382)</div>
    <div class="pc-pr"><span class="pc-p">$14.99</span><span class="pc-op">$26.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/smart-plug'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9)"><span>🔌</span><div class="pc-bdg bs">Popular</div></div>
  <div class="pc-body">
    <div class="pc-name">WiFi Smart Plug with Energy Monitor (2-Pack)</div>
    <div class="pc-ben">Control any outlet from your phone — no hub needed</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (2,043)</div>
    <div class="pc-pr"><span class="pc-p">$22.99</span><span class="pc-op">$39.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/mini-humidifier'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB)"><span>💧</span><div class="pc-bdg bs">Popular</div></div>
  <div class="pc-body">
    <div class="pc-name">USB Mini Cool Mist Desk Humidifier</div>
    <div class="pc-ben">Adds moisture to dry indoor air at your desk</div>
    <div class="pc-stars"><s>★★★★★</s> 4.5 (876)</div>
    <div class="pc-pr"><span class="pc-p">$17.99</span><span class="pc-op">$31.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/led-night-lamp'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4)"><span>🌙</span><div class="pc-bdg bs">Popular</div></div>
  <div class="pc-body">
    <div class="pc-name">Touch-Dimming LED Bedside Night Lamp</div>
    <div class="pc-ben">Adjustable soft light for reading or winding down</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (1,247)</div>
    <div class="pc-pr"><span class="pc-p">$19.99</span><span class="pc-op">$34.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/portable-desk-fan'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2)"><span>🌀</span><div class="pc-bdg bs">Popular</div></div>
  <div class="pc-body">
    <div class="pc-name">USB Rechargeable Portable Desk Fan</div>
    <div class="pc-ben">Personal cooling for desk or nightstand use</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (1,583)</div>
    <div class="pc-pr"><span class="pc-p">$18.99</span><span class="pc-op">$32.99</span><span class="pc-sv">42% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/wireless-doorbell'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFF8E1,#FFECB3)"><span>🔔</span><div class="pc-bdg bs">Popular</div></div>
  <div class="pc-body">
    <div class="pc-name">Wireless Plug-In Doorbell with Chime Receiver</div>
    <div class="pc-ben">Easy no-wiring doorbell for any home</div>
    <div class="pc-stars"><s>★★★★★</s> 4.6 (924)</div>
    <div class="pc-pr"><span class="pc-p">$21.99</span><span class="pc-op">$38.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div></div>
  <div class="va"><button class="btn-va">View All Smart Home Finds →</button></div>
</section><section class="cat-sec" id="pet">
  <div class="sec-hd">
    <div><div class="sec-lbl">🐾 Pet Home Essentials</div><h2 class="sec-h">Pet Home Essentials</h2></div>
    <div class="sec-arrows"><button class="arr" onclick="sl('t-pet',-1)">&#8249;</button><button class="arr" onclick="sl('t-pet',1)">&#8250;</button></div>
  </div>
  <div class="ctrack" id="t-pet"><div class="pc" onclick="location='/products/pet-water-bottle'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9)"><span>💧</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Portable Pet Water Bottle with Dispenser</div>
    <div class="pc-ben">Hydrate pets on walks without a separate bowl</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (843)</div>
    <div class="pc-pr"><span class="pc-p">$14.99</span><span class="pc-op">$26.99</span><span class="pc-sv">44% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/pet-feeding-mat'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9)"><span>🟩</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Non-Slip Silicone Pet Feeding Mat</div>
    <div class="pc-ben">Keeps pet bowls in place and protects floors</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (1,027)</div>
    <div class="pc-pr"><span class="pc-p">$11.99</span><span class="pc-op">$19.99</span><span class="pc-sv">40% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/pet-hair-remover'">
  <div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9)"><span>🐾</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Self-Cleaning Pet Hair Remover Roller</div>
    <div class="pc-ben">Removes pet hair without tape refills — reusable</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (2,341)</div>
    <div class="pc-pr"><span class="pc-p">$17.99</span><span class="pc-op">$29.99</span><span class="pc-sv">40% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/pet-storage-container'">
  <div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2)"><span>🐕</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Airtight Pet Food Storage Container</div>
    <div class="pc-ben">Keeps dry pet food fresh and away from pests</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (612)</div>
    <div class="pc-pr"><span class="pc-p">$19.99</span><span class="pc-op">$34.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/pet-grooming-brush'">
  <div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7)"><span>🪮</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Self-Cleaning Slicker Pet Grooming Brush</div>
    <div class="pc-ben">Removes loose fur with a one-click release</div>
    <div class="pc-stars"><s>★★★★★</s> 4.7 (1,938)</div>
    <div class="pc-pr"><span class="pc-p">$15.99</span><span class="pc-op">$27.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div><div class="pc" onclick="location='/products/pet-travel-bowl'">
  <div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9)"><span>🥣</span><div class="pc-bdg bt">Top Rated</div></div>
  <div class="pc-body">
    <div class="pc-name">Collapsible Silicone Pet Travel Bowl Set</div>
    <div class="pc-ben">Folds flat for walks, trips, and outdoor use</div>
    <div class="pc-stars"><s>★★★★★</s> 4.8 (769)</div>
    <div class="pc-pr"><span class="pc-p">$12.99</span><span class="pc-op">$22.99</span><span class="pc-sv">43% OFF</span></div>
    <button class="pc-btn">View Product</button>
  </div>
</div></div>
  <div class="va"><button class="btn-va">View All Pet Home Essentials →</button></div>
</section>
<div class="trust-strip"><div class="tg">
  <div><div class="tg-ico">📦</div><div class="tg-t">Tracked Shipping</div><p class="tg-s">Every order ships with tracking</p></div>
  <div><div class="tg-ico">🔒</div><div class="tg-t">Secure Checkout</div><p class="tg-s">SSL-encrypted payments</p></div>
  <div><div class="tg-ico">↩️</div><div class="tg-t">30-Day Returns</div><p class="tg-s">Not satisfied? Return within 30 days</p></div>
  <div><div class="tg-ico">🏡</div><div class="tg-t">Curated Selection</div><p class="tg-s">Practical finds for everyday use</p></div>
</div></div>
<footer><div class="fg">
  <div><div class="fl">LIVEASE<em>US</em></div><p class="fd">Practical home, kitchen, smart home, and pet essentials for everyday living.</p></div>
  <div><div class="fch">Shop</div><ul class="fcl"><li><a href="#best-sellers">Best Sellers</a></li><li><a href="#kitchen">Kitchen Essentials</a></li><li><a href="#home-org">Home Organization</a></li><li><a href="#smart-home">Smart Home Finds</a></li><li><a href="#pet">Pet Essentials</a></li></ul></div>
  <div><div class="fch">Support</div><ul class="fcl"><li><a href="/pages/track">Track Order</a></li><li><a href="/pages/contact">Contact Us</a></li><li><a href="/pages/shipping">Shipping Policy</a></li><li><a href="/pages/returns">Return &amp; Refund</a></li><li><a href="/pages/faq">FAQ</a></li></ul></div>
  <div><div class="fch">Company</div><ul class="fcl"><li><a href="/pages/about">About Us</a></li><li><a href="/pages/privacy">Privacy Policy</a></li><li><a href="/pages/terms">Terms of Service</a></li></ul></div>
</div><div class="fb"><span>© 2026 LiveaseUS. All rights reserved.</span><span>💳 🏦 🔒</span></div></footer>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

const PM={
  'airtight-steel-container':P1,
  'motion-sensor-night-light':P2,
  'foldable-storage-organizer':P3,
  'pet-water-feeder':P4,
  'electric-cleaning-brush':P5,
  'kitchen-shelf-organizer':P6,
  'spice-organizer-rack':P7,
  'oil-spray-bottle':P8,
  'fridge-storage-box':P9,
  'vegetable-chopper':P10,
  'sink-organizer':P11,
  'airtight-container-set':P12,
  'drawer-organizer':P13,
  'foldable-storage-box':P14,
  'cable-organizer':P15,
  'closet-space-saver':P16,
  'laundry-basket':P17,
  'wall-storage-rack':P18,
  'motion-sensor-light':P19,
  'smart-plug':P20,
  'mini-humidifier':P21,
  'led-night-lamp':P22,
  'portable-desk-fan':P23,
  'wireless-doorbell':P24,
  'pet-water-bottle':P25,
  'pet-feeding-mat':P26,
  'pet-hair-remover':P27,
  'pet-storage-container':P28,
  'pet-grooming-brush':P29,
  'pet-travel-bowl':P30,
};

function P1(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Airtight Steel Food Container Set | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🥫</div>
    <div class="pp-thumbs"><div class="pp-th act">🥫</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Best Sellers</div>
    <h1 class="pp-nm">Airtight Steel Food Container Set</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 342 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$24.99</span><span class="pp-op">$44.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Keeps pantry staples fresh and neatly organized</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,24.99)">3-Piece Set — $24.99</button><button class="pp-v" onclick="sv(this,38.99)">5-Piece Set — $38.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('airtight-steel-container',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🥫')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-001</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A practical 3-piece stainless steel container set for everyday pantry use. Silicone-sealed lids keep dry goods stored efficiently. Stackable and easy to clean.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Airtight silicone lid seal</li><li>Food-grade stainless steel</li><li>Stackable design</li><li>BPA-free components</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>3 stainless steel containers (S/M/L)</li><li>3 silicone-sealed lids</li><li>Label stickers</li><li>Measuring scoop</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Can I store liquids?<s>+</s></button><div class="fq-a">Designed primarily for dry goods.</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Are these BPA-free?<s>+</s></button><div class="fq-a">Yes, all components are BPA-free and food-safe.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/motion-sensor-night-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>💡</span></div><div class="pc-body"><div class="pc-name">Motion Sensor LED Night Light (2-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Foldable Fabric Storage Organizer Box</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-water-feeder'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Gravity-Fed Pet Water & Food Feeder</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/electric-cleaning-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>🪥</span></div><div class="pc-body"><div class="pc-name">Electric Spin Scrubber Cleaning Brush</div><div class="pc-pr"><span class="pc-p">$29.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P2(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Motion Sensor LED Night Light (2-Pack) | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">💡</div>
    <div class="pp-thumbs"><div class="pp-th act">💡</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Best Sellers</div>
    <h1 class="pp-nm">Motion Sensor LED Night Light (2-Pack)</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 518 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$16.99</span><span class="pp-op">$29.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Hands-free lighting for hallways, stairs & bathrooms</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,16.99)">Pack of 2 — $16.99</button><button class="pp-v" onclick="sv(this,29.99)">Pack of 4 — $29.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('motion-sensor-night-light',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'💡')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-002</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A plug-in LED night light with a built-in motion sensor. Turns on automatically when movement is detected and off when the area is clear.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Auto on/off motion sensor</li><li>Soft warm white LED</li><li>USB rechargeable</li><li>Compact design</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>2 motion sensor night lights</li><li>2 USB charging cables</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Detection range?<s>+</s></button><div class="fq-a">Approximately 3 meters (10 feet).</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Battery life?<s>+</s></button><div class="fq-a">Approximately 8–12 hours per charge.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/airtight-steel-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🥫</span></div><div class="pc-body"><div class="pc-name">Airtight Steel Food Container Set</div><div class="pc-pr"><span class="pc-p">$24.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Foldable Fabric Storage Organizer Box</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-water-feeder'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Gravity-Fed Pet Water & Food Feeder</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/electric-cleaning-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>🪥</span></div><div class="pc-body"><div class="pc-name">Electric Spin Scrubber Cleaning Brush</div><div class="pc-pr"><span class="pc-p">$29.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P3(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Foldable Fabric Storage Organizer Box | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">📦</div>
    <div class="pp-thumbs"><div class="pp-th act">📦</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Best Sellers</div>
    <h1 class="pp-nm">Foldable Fabric Storage Organizer Box</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 289 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$19.99</span><span class="pp-op">$34.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Collapses flat when not in use</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,19.99)">Small (30L) – Grey — $19.99</button><button class="pp-v" onclick="sv(this,26.99)">Large (60L) – Grey — $26.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('foldable-storage-organizer',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'📦')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-003</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A collapsible fabric storage box with reinforced base. Collapses flat for compact storage. Works well in closets, under beds, or on shelves.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Folds flat for easy storage</li><li>Reinforced base panel</li><li>Side handles</li><li>Wipe-clean surface</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>2 foldable storage boxes</li><li>Lid covers</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">What can I store in this?<s>+</s></button><div class="fq-a">Clothing, blankets, toys, and other household items.</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Is the lid waterproof?<s>+</s></button><div class="fq-a">Provides basic dust protection but is not waterproof.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/airtight-steel-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🥫</span></div><div class="pc-body"><div class="pc-name">Airtight Steel Food Container Set</div><div class="pc-pr"><span class="pc-p">$24.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/motion-sensor-night-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>💡</span></div><div class="pc-body"><div class="pc-name">Motion Sensor LED Night Light (2-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-water-feeder'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Gravity-Fed Pet Water & Food Feeder</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/electric-cleaning-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>🪥</span></div><div class="pc-body"><div class="pc-name">Electric Spin Scrubber Cleaning Brush</div><div class="pc-pr"><span class="pc-p">$29.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P4(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Gravity-Fed Pet Water & Food Feeder | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🐾</div>
    <div class="pp-thumbs"><div class="pp-th act">🐾</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Best Sellers</div>
    <h1 class="pp-nm">Gravity-Fed Pet Water & Food Feeder</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 402 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$22.99</span><span class="pp-op">$39.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Auto-refills so pets always have access to water</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,22.99)">Water Feeder – 2.5L — $22.99</button><button class="pp-v" onclick="sv(this,39.99)">Combo Set — $39.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('pet-water-feeder',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🐾')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-004</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A gravity-fed pet feeder and water dispenser for cats and small to medium dogs. The reservoir automatically refills the bowl as your pet drinks or eats.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Gravity auto-refill</li><li>BPA-free plastic</li><li>Non-slip base</li><li>Easy to clean</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 water dispenser</li><li>1 food feeder</li><li>Cleaning brush</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Pet sizes?<s>+</s></button><div class="fq-a">Cats and small to medium-sized dogs.</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">BPA-free?<s>+</s></button><div class="fq-a">Yes, all components are BPA-free food-grade.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/airtight-steel-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🥫</span></div><div class="pc-body"><div class="pc-name">Airtight Steel Food Container Set</div><div class="pc-pr"><span class="pc-p">$24.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/motion-sensor-night-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>💡</span></div><div class="pc-body"><div class="pc-name">Motion Sensor LED Night Light (2-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Foldable Fabric Storage Organizer Box</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/electric-cleaning-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>🪥</span></div><div class="pc-body"><div class="pc-name">Electric Spin Scrubber Cleaning Brush</div><div class="pc-pr"><span class="pc-p">$29.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P5(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Electric Spin Scrubber Cleaning Brush | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🪥</div>
    <div class="pp-thumbs"><div class="pp-th act">🪥</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Best Sellers</div>
    <h1 class="pp-nm">Electric Spin Scrubber Cleaning Brush</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 637 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$29.99</span><span class="pp-op">$54.99</span><span class="pp-sv">45% OFF</span></div>
    <div class="pp-ben">Makes scrubbing tiles, grout, and tubs easier</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,29.99)">White — $29.99</button><button class="pp-v" onclick="sv(this,29.99)">Blue — $29.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('electric-cleaning-brush',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🪥')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-005</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A cordless electric spin scrubber with interchangeable brush heads for tiles, grout, bathtubs, and kitchen surfaces. USB rechargeable with approx. 60 minutes battery life.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>360° rotating brush</li><li>4 interchangeable heads</li><li>USB rechargeable</li><li>Waterproof (IPX5)</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 electric scrubber</li><li>4 brush heads</li><li>USB cable</li><li>Carry bag</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Is it waterproof?<s>+</s></button><div class="fq-a">Yes, splash-proof (IPX5). Avoid fully submerging.</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Charge time?<s>+</s></button><div class="fq-a">Approximately 2–3 hours.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/airtight-steel-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🥫</span></div><div class="pc-body"><div class="pc-name">Airtight Steel Food Container Set</div><div class="pc-pr"><span class="pc-p">$24.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/motion-sensor-night-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>💡</span></div><div class="pc-body"><div class="pc-name">Motion Sensor LED Night Light (2-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Foldable Fabric Storage Organizer Box</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-water-feeder'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Gravity-Fed Pet Water & Food Feeder</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P6(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Adjustable 2-Tier Counter Shelf Organizer | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🗄️</div>
    <div class="pp-thumbs"><div class="pp-th act">🗄️</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Best Sellers</div>
    <h1 class="pp-nm">Adjustable 2-Tier Counter Shelf Organizer</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 724 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$21.99</span><span class="pp-op">$38.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Doubles usable counter space instantly</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,21.99)">Small (30cm) – Black — $21.99</button><button class="pp-v" onclick="sv(this,27.99)">Large (40cm) – Black — $27.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('kitchen-shelf-organizer',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🗄️')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-006</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A two-tier kitchen counter shelf organizer made from carbon steel with rust-resistant coating. Adjustable height fits most kitchen items.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Two-tier design</li><li>Rust-resistant steel</li><li>Adjustable height</li><li>Easy to clean</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 two-tier shelf</li><li>Assembly hardware</li><li>Instruction guide</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Weight capacity?<s>+</s></button><div class="fq-a">Each shelf holds up to 10kg (22 lbs).</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Assembly needed?<s>+</s></button><div class="fq-a">Minimal — under 5 minutes.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/airtight-steel-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🥫</span></div><div class="pc-body"><div class="pc-name">Airtight Steel Food Container Set</div><div class="pc-pr"><span class="pc-p">$24.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/motion-sensor-night-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>💡</span></div><div class="pc-body"><div class="pc-name">Motion Sensor LED Night Light (2-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Foldable Fabric Storage Organizer Box</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-water-feeder'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Gravity-Fed Pet Water & Food Feeder</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P7(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Rotating 2-Tier Spice Rack | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🧂</div>
    <div class="pp-thumbs"><div class="pp-th act">🧂</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Kitchen Essentials</div>
    <h1 class="pp-nm">Rotating 2-Tier Spice Rack</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 481 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$18.99</span><span class="pp-op">$32.99</span><span class="pp-sv">42% OFF</span></div>
    <div class="pp-ben">Keeps all your spices visible and within easy reach</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,18.99)">White — $18.99</button><button class="pp-v" onclick="sv(this,18.99)">Black — $18.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('spice-organizer-rack',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🧂')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-K01</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A two-tier rotating spice rack with 360° turntable base. Holds 20+ standard spice bottles.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>360° rotating base</li><li>Holds 20+ bottles</li><li>Non-slip base pad</li><li>No assembly required</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 two-tier rotating rack</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Comes with jars?<s>+</s></button><div class="fq-a">Rack only — jars not included.</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Bottle size?<s>+</s></button><div class="fq-a">Up to 6.5cm diameter.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/oil-spray-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#F1F8E9,#DCEDC8);height:150px;font-size:52px"><span>🫒</span></div><div class="pc-body"><div class="pc-name">Refillable Glass Oil Misting Spray Bottle</div><div class="pc-pr"><span class="pc-p">$12.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/fridge-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>❄️</span></div><div class="pc-body"><div class="pc-name">Stackable Fridge Storage Bins (4-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/vegetable-chopper'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🥦</span></div><div class="pc-body"><div class="pc-name">Manual Push Vegetable Chopper & Dicer</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/sink-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🚰</span></div><div class="pc-body"><div class="pc-name">Over-Sink Dish Drying Rack</div><div class="pc-pr"><span class="pc-p">$26.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P8(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Refillable Glass Oil Misting Spray Bottle | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🫒</div>
    <div class="pp-thumbs"><div class="pp-th act">🫒</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Kitchen Essentials</div>
    <h1 class="pp-nm">Refillable Glass Oil Misting Spray Bottle</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 893 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$12.99</span><span class="pp-op">$22.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Even oil coating for cooking — easy to control</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,12.99)">100ml — $12.99</button><button class="pp-v" onclick="sv(this,15.99)">200ml — $15.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('oil-spray-bottle',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🫒')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-K02</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A reusable borosilicate glass oil spray bottle. Pump to pressurize, then spray a fine even mist. Helps manage oil portions when cooking.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Fine mist nozzle</li><li>Borosilicate glass</li><li>No aerosol chemicals</li><li>Easy to refill</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 oil spray bottle</li><li>Cleaning brush</li><li>Funnel</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Works with thick oils?<s>+</s></button><div class="fq-a">Best with lighter oils. Thick oils may clog the nozzle.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/spice-organizer-rack'"><div class="pc-img" style="background:linear-gradient(135deg,#FAFAFA,#F0F0F0);height:150px;font-size:52px"><span>🧂</span></div><div class="pc-body"><div class="pc-name">Rotating 2-Tier Spice Rack</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/fridge-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>❄️</span></div><div class="pc-body"><div class="pc-name">Stackable Fridge Storage Bins (4-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/vegetable-chopper'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🥦</span></div><div class="pc-body"><div class="pc-name">Manual Push Vegetable Chopper & Dicer</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/sink-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🚰</span></div><div class="pc-body"><div class="pc-name">Over-Sink Dish Drying Rack</div><div class="pc-pr"><span class="pc-p">$26.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P9(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Stackable Fridge Storage Bins (4-Pack) | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">❄️</div>
    <div class="pp-thumbs"><div class="pp-th act">❄️</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Kitchen Essentials</div>
    <h1 class="pp-nm">Stackable Fridge Storage Bins (4-Pack)</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 612 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$16.99</span><span class="pp-op">$29.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Keep your fridge tidy and food easy to find</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,16.99)">4-Pack — $16.99</button><button class="pp-v" onclick="sv(this,23.99)">6-Pack — $23.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('fridge-storage-box',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'❄️')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-K03</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Clear stackable refrigerator organizer bins with pull-out drawer access. BPA-free and food safe.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Crystal-clear visibility</li><li>Pull-out drawer</li><li>Stackable</li><li>BPA-free food-safe</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>4 stackable bins</li><li>2 pull-out drawers</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Freezer safe?<s>+</s></button><div class="fq-a">Yes, suitable for fridge and freezer.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/spice-organizer-rack'"><div class="pc-img" style="background:linear-gradient(135deg,#FAFAFA,#F0F0F0);height:150px;font-size:52px"><span>🧂</span></div><div class="pc-body"><div class="pc-name">Rotating 2-Tier Spice Rack</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/oil-spray-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#F1F8E9,#DCEDC8);height:150px;font-size:52px"><span>🫒</span></div><div class="pc-body"><div class="pc-name">Refillable Glass Oil Misting Spray Bottle</div><div class="pc-pr"><span class="pc-p">$12.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/vegetable-chopper'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🥦</span></div><div class="pc-body"><div class="pc-name">Manual Push Vegetable Chopper & Dicer</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/sink-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🚰</span></div><div class="pc-body"><div class="pc-name">Over-Sink Dish Drying Rack</div><div class="pc-pr"><span class="pc-p">$26.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P10(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Manual Push Vegetable Chopper & Dicer | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🥦</div>
    <div class="pp-thumbs"><div class="pp-th act">🥦</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Kitchen Essentials</div>
    <h1 class="pp-nm">Manual Push Vegetable Chopper & Dicer</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 748 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$19.99</span><span class="pp-op">$34.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Dice onions, tomatoes, and veggies quickly</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,19.99)">Standard Set — $19.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('vegetable-chopper',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🥦')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-K04</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">A manual push-down vegetable chopper with interchangeable blade inserts. All removable parts are dishwasher safe.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>3 interchangeable blades</li><li>Integrated catcher</li><li>Non-slip base</li><li>Dishwasher-safe parts</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 chopper with catcher</li><li>3 blade inserts</li><li>Cleaning brush</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Blade material?<s>+</s></button><div class="fq-a">Stainless steel blades.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/spice-organizer-rack'"><div class="pc-img" style="background:linear-gradient(135deg,#FAFAFA,#F0F0F0);height:150px;font-size:52px"><span>🧂</span></div><div class="pc-body"><div class="pc-name">Rotating 2-Tier Spice Rack</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/oil-spray-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#F1F8E9,#DCEDC8);height:150px;font-size:52px"><span>🫒</span></div><div class="pc-body"><div class="pc-name">Refillable Glass Oil Misting Spray Bottle</div><div class="pc-pr"><span class="pc-p">$12.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/fridge-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>❄️</span></div><div class="pc-body"><div class="pc-name">Stackable Fridge Storage Bins (4-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/sink-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🚰</span></div><div class="pc-body"><div class="pc-name">Over-Sink Dish Drying Rack</div><div class="pc-pr"><span class="pc-p">$26.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P11(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Over-Sink Dish Drying Rack | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🚰</div>
    <div class="pp-thumbs"><div class="pp-th act">🚰</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Kitchen Essentials</div>
    <h1 class="pp-nm">Over-Sink Dish Drying Rack</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 394 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$26.99</span><span class="pp-op">$46.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Maximizes sink-side space for drying dishes</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,26.99)">55–85cm Adjustable — $26.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('sink-organizer',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🚰')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-K05</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Stainless steel over-the-sink drying rack. Adjustable width, removable utensil caddy, and drainage slope.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Adjustable width</li><li>Rust-resistant steel</li><li>Drip tray</li><li>Removable utensil holder</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 drying rack</li><li>Utensil caddy</li><li>Side supports</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Sink sizes?<s>+</s></button><div class="fq-a">Adjusts 55cm to 85cm.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/spice-organizer-rack'"><div class="pc-img" style="background:linear-gradient(135deg,#FAFAFA,#F0F0F0);height:150px;font-size:52px"><span>🧂</span></div><div class="pc-body"><div class="pc-name">Rotating 2-Tier Spice Rack</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/oil-spray-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#F1F8E9,#DCEDC8);height:150px;font-size:52px"><span>🫒</span></div><div class="pc-body"><div class="pc-name">Refillable Glass Oil Misting Spray Bottle</div><div class="pc-pr"><span class="pc-p">$12.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/fridge-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>❄️</span></div><div class="pc-body"><div class="pc-name">Stackable Fridge Storage Bins (4-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/vegetable-chopper'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🥦</span></div><div class="pc-body"><div class="pc-name">Manual Push Vegetable Chopper & Dicer</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P12(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>BPA-Free Dry Goods Container Set (6-Pack) | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🫙</div>
    <div class="pp-thumbs"><div class="pp-th act">🫙</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Kitchen Essentials</div>
    <h1 class="pp-nm">BPA-Free Dry Goods Container Set (6-Pack)</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 519 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$22.99</span><span class="pp-op">$39.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Lock in freshness with airtight flip-lock lids</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,22.99)">6-Piece Set — $22.99</button><button class="pp-v" onclick="sv(this,34.99)">10-Piece Set — $34.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('airtight-container-set',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🫙')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-K06</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">6-piece BPA-free clear containers with airtight flip-lock lids. Ideal for cereal, pasta, sugar, flour, coffee, and pantry staples. Stackable.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Airtight flip-lock lids</li><li>BPA-free clear plastic</li><li>Stackable</li><li>Dishwasher safe</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>6 airtight containers</li><li>6 flip-lock lids</li><li>Label stickers</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Microwave safe?<s>+</s></button><div class="fq-a">Yes, without the lid.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/spice-organizer-rack'"><div class="pc-img" style="background:linear-gradient(135deg,#FAFAFA,#F0F0F0);height:150px;font-size:52px"><span>🧂</span></div><div class="pc-body"><div class="pc-name">Rotating 2-Tier Spice Rack</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/oil-spray-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#F1F8E9,#DCEDC8);height:150px;font-size:52px"><span>🫒</span></div><div class="pc-body"><div class="pc-name">Refillable Glass Oil Misting Spray Bottle</div><div class="pc-pr"><span class="pc-p">$12.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/fridge-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>❄️</span></div><div class="pc-body"><div class="pc-name">Stackable Fridge Storage Bins (4-Pack)</div><div class="pc-pr"><span class="pc-p">$16.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/vegetable-chopper'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🥦</span></div><div class="pc-body"><div class="pc-name">Manual Push Vegetable Chopper & Dicer</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P13(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Expandable Bamboo Drawer Organizer Set | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🗃️</div>
    <div class="pp-thumbs"><div class="pp-th act">🗃️</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Home Organization</div>
    <h1 class="pp-nm">Expandable Bamboo Drawer Organizer Set</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 826 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$17.99</span><span class="pp-op">$29.99</span><span class="pp-sv">40% OFF</span></div>
    <div class="pp-ben">Divides drawer space into neat compartments</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,17.99)">5-Piece Set — $17.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('drawer-organizer',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🗃️')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-H01</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Expandable bamboo drawer dividers for utensils, cutlery, office supplies, or cosmetics. Adjusts 25–48cm.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Expands 25–48cm</li><li>Natural bamboo</li><li>Spring-tension fit</li><li>Smooth base</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>5 bamboo dividers</li><li>Non-slip pads</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Drawer fit?<s>+</s></button><div class="fq-a">Adjusts from 25cm to 48cm wide.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/foldable-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Collapsible Fabric Storage Box with Lid</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/cable-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">Desk Cable Management Clips (10-Pack)</div><div class="pc-pr"><span class="pc-p">$9.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/closet-space-saver'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>👔</span></div><div class="pc-body"><div class="pc-name">Velvet Slim Closet Hangers (50-Pack)</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/laundry-basket'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🧺</span></div><div class="pc-body"><div class="pc-name">Pop-Up Mesh Laundry Hamper (65L)</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P14(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Collapsible Fabric Storage Box with Lid | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">📦</div>
    <div class="pp-thumbs"><div class="pp-th act">📦</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Home Organization</div>
    <h1 class="pp-nm">Collapsible Fabric Storage Box with Lid</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 533 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$14.99</span><span class="pp-op">$24.99</span><span class="pp-sv">40% OFF</span></div>
    <div class="pp-ben">Collapses for compact storage between uses</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,14.99)">Medium – Grey — $14.99</button><button class="pp-v" onclick="sv(this,18.99)">Large – Grey — $18.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('foldable-storage-box',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'📦')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-H02</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Collapsible non-woven fabric storage box with lid. Folds flat when empty. Great for closets, shelves, and under beds.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Folds flat</li><li>Dust-protecting lid</li><li>Side handles</li><li>Wipe-clean</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 storage box with lid</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">For heavy items?<s>+</s></button><div class="fq-a">Suitable for clothing and linens. Not recommended for very heavy objects.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/drawer-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF8E1,#FFECB3);height:150px;font-size:52px"><span>🗃️</span></div><div class="pc-body"><div class="pc-name">Expandable Bamboo Drawer Organizer Set</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/cable-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">Desk Cable Management Clips (10-Pack)</div><div class="pc-pr"><span class="pc-p">$9.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/closet-space-saver'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>👔</span></div><div class="pc-body"><div class="pc-name">Velvet Slim Closet Hangers (50-Pack)</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/laundry-basket'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🧺</span></div><div class="pc-body"><div class="pc-name">Pop-Up Mesh Laundry Hamper (65L)</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P15(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Desk Cable Management Clips (10-Pack) | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🔌</div>
    <div class="pp-thumbs"><div class="pp-th act">🔌</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Home Organization</div>
    <h1 class="pp-nm">Desk Cable Management Clips (10-Pack)</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 1,124 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$9.99</span><span class="pp-op">$17.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Keeps desk cables tidy and tangle-free</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,9.99)">10-Pack – Black — $9.99</button><button class="pp-v" onclick="sv(this,9.99)">10-Pack – White — $9.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('cable-organizer',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🔌')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-H03</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Self-adhesive cable management clips for desks and walls. Peel-and-stick 3M backing. No drilling.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>3M self-adhesive</li><li>Works on flat surfaces</li><li>No drilling</li><li>Fits up to 8mm cables</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>10 cable clips</li><li>1 cable sleeve</li><li>5 cable ties</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Surface damage?<s>+</s></button><div class="fq-a">Pull slowly at a low angle to minimize risk.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/drawer-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF8E1,#FFECB3);height:150px;font-size:52px"><span>🗃️</span></div><div class="pc-body"><div class="pc-name">Expandable Bamboo Drawer Organizer Set</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Collapsible Fabric Storage Box with Lid</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/closet-space-saver'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>👔</span></div><div class="pc-body"><div class="pc-name">Velvet Slim Closet Hangers (50-Pack)</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/laundry-basket'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🧺</span></div><div class="pc-body"><div class="pc-name">Pop-Up Mesh Laundry Hamper (65L)</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P16(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Velvet Slim Closet Hangers (50-Pack) | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">👔</div>
    <div class="pp-thumbs"><div class="pp-th act">👔</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Home Organization</div>
    <h1 class="pp-nm">Velvet Slim Closet Hangers (50-Pack)</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 2,187 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$18.99</span><span class="pp-op">$32.99</span><span class="pp-sv">42% OFF</span></div>
    <div class="pp-ben">Slim profile saves significant closet space</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,18.99)">50-Pack – Black — $18.99</button><button class="pp-v" onclick="sv(this,18.99)">50-Pack – Grey — $18.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('closet-space-saver',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'👔')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-H04</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Ultra-thin velvet-coated hangers that save space vs. standard plastic hangers. Velvet coating prevents slipping. Suitable for all garment types.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Ultra-slim profile</li><li>Non-slip velvet</li><li>360° swivel hook</li><li>Holds up to 5kg</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>50 velvet slim hangers</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Delicate fabrics?<s>+</s></button><div class="fq-a">Yes, gentle on silk, knitwear, and all fabric types.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/drawer-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF8E1,#FFECB3);height:150px;font-size:52px"><span>🗃️</span></div><div class="pc-body"><div class="pc-name">Expandable Bamboo Drawer Organizer Set</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Collapsible Fabric Storage Box with Lid</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/cable-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">Desk Cable Management Clips (10-Pack)</div><div class="pc-pr"><span class="pc-p">$9.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/laundry-basket'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🧺</span></div><div class="pc-body"><div class="pc-name">Pop-Up Mesh Laundry Hamper (65L)</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P17(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Pop-Up Mesh Laundry Hamper (65L) | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🧺</div>
    <div class="pp-thumbs"><div class="pp-th act">🧺</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Home Organization</div>
    <h1 class="pp-nm">Pop-Up Mesh Laundry Hamper (65L)</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.5 · 718 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$14.99</span><span class="pp-op">$26.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Pops open instantly, collapses to 3cm flat</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,14.99)">65L – Dark Grey — $14.99</button><button class="pp-v" onclick="sv(this,14.99)">65L – Navy — $14.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('laundry-basket',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🧺')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-H05</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Pop-up laundry hamper with breathable mesh fabric and steel wire frame. Opens instantly, collapses to 3cm for flat storage.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>65L capacity</li><li>Breathable mesh</li><li>Folds to 3cm</li><li>Two handles</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 hamper (65L)</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Machine washable?<s>+</s></button><div class="fq-a">Yes. Remove frame first.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/drawer-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF8E1,#FFECB3);height:150px;font-size:52px"><span>🗃️</span></div><div class="pc-body"><div class="pc-name">Expandable Bamboo Drawer Organizer Set</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Collapsible Fabric Storage Box with Lid</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/cable-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">Desk Cable Management Clips (10-Pack)</div><div class="pc-pr"><span class="pc-p">$9.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/closet-space-saver'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>👔</span></div><div class="pc-body"><div class="pc-name">Velvet Slim Closet Hangers (50-Pack)</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P18(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Floating Wall-Mounted Storage Shelf | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🔧</div>
    <div class="pp-thumbs"><div class="pp-th act">🔧</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Home Organization</div>
    <h1 class="pp-nm">Floating Wall-Mounted Storage Shelf</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 489 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$23.99</span><span class="pp-op">$41.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Adds storage space to any wall</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,23.99)">40cm – White — $23.99</button><button class="pp-v" onclick="sv(this,29.99)">60cm – White — $29.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('wall-storage-rack',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🔧')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-H06</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Wall-mounted floating shelf for any room. MDF board with clean finish. Includes drywall anchors and mounting hardware.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>No visible brackets</li><li>Supports up to 8kg</li><li>MDF finish</li><li>Hardware included</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 floating shelf</li><li>Wall anchors</li><li>Screws</li><li>Guide</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Drywall compatible?<s>+</s></button><div class="fq-a">Yes, wall anchors for standard drywall included.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/drawer-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF8E1,#FFECB3);height:150px;font-size:52px"><span>🗃️</span></div><div class="pc-body"><div class="pc-name">Expandable Bamboo Drawer Organizer Set</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/foldable-storage-box'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>📦</span></div><div class="pc-body"><div class="pc-name">Collapsible Fabric Storage Box with Lid</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/cable-organizer'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">Desk Cable Management Clips (10-Pack)</div><div class="pc-pr"><span class="pc-p">$9.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/closet-space-saver'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>👔</span></div><div class="pc-body"><div class="pc-name">Velvet Slim Closet Hangers (50-Pack)</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P19(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Wireless Motion-Activated Closet Light | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🔦</div>
    <div class="pp-thumbs"><div class="pp-th act">🔦</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Smart Home Finds</div>
    <h1 class="pp-nm">Wireless Motion-Activated Closet Light</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 1,382 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$14.99</span><span class="pp-op">$26.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Lights up automatically when you open a cabinet</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,14.99)">2-Pack — $14.99</button><button class="pp-v" onclick="sv(this,26.99)">4-Pack — $26.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('motion-sensor-light',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🔦')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-S01</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Battery-powered LED strip with built-in motion sensor. Mounts inside closets or cabinets via adhesive magnetic strip. Turns on automatically and off after a set period.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Auto on/off detection</li><li>USB rechargeable</li><li>Magnetic mount</li><li>No wiring</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>2 LED sensor lights</li><li>Adhesive strips</li><li>USB cable</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">On-time duration?<s>+</s></button><div class="fq-a">Turns off after approximately 30 seconds of no motion.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/smart-plug'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">WiFi Smart Plug with Energy Monitor (2-Pack)</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/mini-humidifier'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">USB Mini Cool Mist Desk Humidifier</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/led-night-lamp'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🌙</span></div><div class="pc-body"><div class="pc-name">Touch-Dimming LED Bedside Night Lamp</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/portable-desk-fan'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🌀</span></div><div class="pc-body"><div class="pc-name">USB Rechargeable Portable Desk Fan</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P20(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>WiFi Smart Plug with Energy Monitor (2-Pack) | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🔌</div>
    <div class="pp-thumbs"><div class="pp-th act">🔌</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Smart Home Finds</div>
    <h1 class="pp-nm">WiFi Smart Plug with Energy Monitor (2-Pack)</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 2,043 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$22.99</span><span class="pp-op">$39.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Control any outlet from your phone — no hub needed</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,22.99)">2-Pack — $22.99</button><button class="pp-v" onclick="sv(this,39.99)">4-Pack — $39.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('smart-plug',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🔌')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-S02</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">WiFi smart plug (2.4GHz) with app control. Set schedules, timers, monitor energy. Works with Alexa and Google Home.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>App scheduling</li><li>Energy monitoring</li><li>Alexa & Google Home</li><li>No hub required</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>2 smart plugs</li><li>Setup guide</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">5GHz compatible?<s>+</s></button><div class="fq-a">No, requires 2.4GHz WiFi.</div></div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Monthly fee?<s>+</s></button><div class="fq-a">No subscription — app is free.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/motion-sensor-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🔦</span></div><div class="pc-body"><div class="pc-name">Wireless Motion-Activated Closet Light</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/mini-humidifier'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">USB Mini Cool Mist Desk Humidifier</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/led-night-lamp'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🌙</span></div><div class="pc-body"><div class="pc-name">Touch-Dimming LED Bedside Night Lamp</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/portable-desk-fan'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🌀</span></div><div class="pc-body"><div class="pc-name">USB Rechargeable Portable Desk Fan</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P21(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>USB Mini Cool Mist Desk Humidifier | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">💧</div>
    <div class="pp-thumbs"><div class="pp-th act">💧</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Smart Home Finds</div>
    <h1 class="pp-nm">USB Mini Cool Mist Desk Humidifier</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.5 · 876 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$17.99</span><span class="pp-op">$31.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Adds moisture to dry indoor air at your desk</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,17.99)">250ml – White — $17.99</button><button class="pp-v" onclick="sv(this,17.99)">250ml – Pink — $17.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('mini-humidifier',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'💧')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-S03</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Compact USB-powered cool mist humidifier for desks and small rooms. Two misting modes, auto shut-off when empty. Quiet operation.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Two mist modes</li><li>Auto shut-off</li><li>Ultra-quiet (<30dB)</li><li>USB powered</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 humidifier</li><li>USB cable</li><li>Cotton wick</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">How long per tank?<s>+</s></button><div class="fq-a">6–8 hours on low, 3–4 hours on high.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/motion-sensor-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🔦</span></div><div class="pc-body"><div class="pc-name">Wireless Motion-Activated Closet Light</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/smart-plug'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">WiFi Smart Plug with Energy Monitor (2-Pack)</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/led-night-lamp'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🌙</span></div><div class="pc-body"><div class="pc-name">Touch-Dimming LED Bedside Night Lamp</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/portable-desk-fan'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🌀</span></div><div class="pc-body"><div class="pc-name">USB Rechargeable Portable Desk Fan</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P22(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Touch-Dimming LED Bedside Night Lamp | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🌙</div>
    <div class="pp-thumbs"><div class="pp-th act">🌙</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Smart Home Finds</div>
    <h1 class="pp-nm">Touch-Dimming LED Bedside Night Lamp</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 1,247 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$19.99</span><span class="pp-op">$34.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Adjustable soft light for reading or winding down</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,19.99)">Warm White – White — $19.99</button><button class="pp-v" onclick="sv(this,19.99)">Warm White – Black — $19.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('led-night-lamp',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🌙')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-S04</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Touch-sensitive LED lamp with three brightness levels and warm/cool light modes. USB rechargeable 2000mAh battery.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Touch-dimming (3 levels)</li><li>Warm & cool modes</li><li>USB rechargeable</li><li>Flicker-free</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 LED lamp</li><li>USB cable</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Battery life?<s>+</s></button><div class="fq-a">Approximately 4–8 hours depending on brightness.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/motion-sensor-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🔦</span></div><div class="pc-body"><div class="pc-name">Wireless Motion-Activated Closet Light</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/smart-plug'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">WiFi Smart Plug with Energy Monitor (2-Pack)</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/mini-humidifier'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">USB Mini Cool Mist Desk Humidifier</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/portable-desk-fan'"><div class="pc-img" style="background:linear-gradient(135deg,#E0F7FA,#B2EBF2);height:150px;font-size:52px"><span>🌀</span></div><div class="pc-body"><div class="pc-name">USB Rechargeable Portable Desk Fan</div><div class="pc-pr"><span class="pc-p">$18.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P23(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>USB Rechargeable Portable Desk Fan | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🌀</div>
    <div class="pp-thumbs"><div class="pp-th act">🌀</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Smart Home Finds</div>
    <h1 class="pp-nm">USB Rechargeable Portable Desk Fan</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 1,583 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$18.99</span><span class="pp-op">$32.99</span><span class="pp-sv">42% OFF</span></div>
    <div class="pp-ben">Personal cooling for desk or nightstand use</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,18.99)">White — $18.99</button><button class="pp-v" onclick="sv(this,18.99)">Black — $18.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('portable-desk-fan',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🌀')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-S05</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Compact 6-inch USB-rechargeable desk fan with 3 speeds and 360° tilt. 2400mAh battery, 4–10 hours runtime.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>3 speed settings</li><li>4–10 hrs battery</li><li>360° tilt</li><li>Low noise</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 desk fan</li><li>USB cable</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Noise level?<s>+</s></button><div class="fq-a">Approximately 25dB on lowest setting.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/motion-sensor-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🔦</span></div><div class="pc-body"><div class="pc-name">Wireless Motion-Activated Closet Light</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/smart-plug'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">WiFi Smart Plug with Energy Monitor (2-Pack)</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/mini-humidifier'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">USB Mini Cool Mist Desk Humidifier</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/led-night-lamp'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🌙</span></div><div class="pc-body"><div class="pc-name">Touch-Dimming LED Bedside Night Lamp</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P24(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Wireless Plug-In Doorbell with Chime Receiver | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🔔</div>
    <div class="pp-thumbs"><div class="pp-th act">🔔</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Smart Home Finds</div>
    <h1 class="pp-nm">Wireless Plug-In Doorbell with Chime Receiver</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.6 · 924 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$21.99</span><span class="pp-op">$38.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Easy no-wiring doorbell for any home</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,21.99)">1 Button + 1 Chime — $21.99</button><button class="pp-v" onclick="sv(this,31.99)">1 Button + 2 Chimes — $31.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('wireless-doorbell',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🔔')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-S06</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Wireless doorbell with waterproof outdoor button and plug-in chime receiver. 52 ringtones, adjustable volume, 300m range. No wiring required.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>No wiring needed</li><li>52 ringtones</li><li>4 volume levels</li><li>Waterproof (IP44)</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 outdoor button</li><li>1 indoor chime</li><li>Mounting hardware</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Range?<s>+</s></button><div class="fq-a">Up to 300 meters in open space.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/motion-sensor-light'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🔦</span></div><div class="pc-body"><div class="pc-name">Wireless Motion-Activated Closet Light</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/smart-plug'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>🔌</span></div><div class="pc-body"><div class="pc-name">WiFi Smart Plug with Energy Monitor (2-Pack)</div><div class="pc-pr"><span class="pc-p">$22.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/mini-humidifier'"><div class="pc-img" style="background:linear-gradient(135deg,#E3F2FD,#BBDEFB);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">USB Mini Cool Mist Desk Humidifier</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/led-night-lamp'"><div class="pc-img" style="background:linear-gradient(135deg,#FFFDE7,#FFF9C4);height:150px;font-size:52px"><span>🌙</span></div><div class="pc-body"><div class="pc-name">Touch-Dimming LED Bedside Night Lamp</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P25(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Portable Pet Water Bottle with Dispenser | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">💧</div>
    <div class="pp-thumbs"><div class="pp-th act">💧</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Pet Home Essentials</div>
    <h1 class="pp-nm">Portable Pet Water Bottle with Dispenser</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 843 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$14.99</span><span class="pp-op">$26.99</span><span class="pp-sv">44% OFF</span></div>
    <div class="pp-ben">Hydrate pets on walks without a separate bowl</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,14.99)">350ml – Blue — $14.99</button><button class="pp-v" onclick="sv(this,17.99)">550ml – Blue — $17.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('pet-water-bottle',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'💧')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-P01</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Portable pet water bottle with integrated dispensing tray. Press to release water, release to retract unused water. BPA-free, food-safe.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Integrated tray</li><li>One-button operation</li><li>BPA-free</li><li>Carabiner clip</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 pet water bottle (350ml)</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Other liquids?<s>+</s></button><div class="fq-a">Designed for water only.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/pet-feeding-mat'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🟩</span></div><div class="pc-body"><div class="pc-name">Non-Slip Silicone Pet Feeding Mat</div><div class="pc-pr"><span class="pc-p">$11.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-hair-remover'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Pet Hair Remover Roller</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-storage-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🐕</span></div><div class="pc-body"><div class="pc-name">Airtight Pet Food Storage Container</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-grooming-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>🪮</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Slicker Pet Grooming Brush</div><div class="pc-pr"><span class="pc-p">$15.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P26(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Non-Slip Silicone Pet Feeding Mat | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🟩</div>
    <div class="pp-thumbs"><div class="pp-th act">🟩</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Pet Home Essentials</div>
    <h1 class="pp-nm">Non-Slip Silicone Pet Feeding Mat</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 1,027 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$11.99</span><span class="pp-op">$19.99</span><span class="pp-sv">40% OFF</span></div>
    <div class="pp-ben">Keeps pet bowls in place and protects floors</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,11.99)">S (30x20cm) — $11.99</button><button class="pp-v" onclick="sv(this,15.99)">L (48x30cm) — $15.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('pet-feeding-mat',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🟩')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-P02</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Non-slip silicone feeding mat keeps pet bowls from sliding. Raised edges contain spills. Food-grade silicone, dishwasher safe.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Non-slip base</li><li>Raised edges</li><li>Food-grade silicone</li><li>Dishwasher safe</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 silicone feeding mat</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Hardwood floors?<s>+</s></button><div class="fq-a">Yes, works on hardwood, tile, and laminate.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/pet-water-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">Portable Pet Water Bottle with Dispenser</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-hair-remover'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Pet Hair Remover Roller</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-storage-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🐕</span></div><div class="pc-body"><div class="pc-name">Airtight Pet Food Storage Container</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-grooming-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>🪮</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Slicker Pet Grooming Brush</div><div class="pc-pr"><span class="pc-p">$15.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P27(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Self-Cleaning Pet Hair Remover Roller | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🐾</div>
    <div class="pp-thumbs"><div class="pp-th act">🐾</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Pet Home Essentials</div>
    <h1 class="pp-nm">Self-Cleaning Pet Hair Remover Roller</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 2,341 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$17.99</span><span class="pp-op">$29.99</span><span class="pp-sv">40% OFF</span></div>
    <div class="pp-ben">Removes pet hair without tape refills — reusable</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,17.99)">Standard – Black — $17.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('pet-hair-remover',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🐾')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-P03</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Reusable pet hair remover roller. Roll across fabric surfaces to collect hair, then self-clean in the base unit. No tape or refills needed.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>No tape needed</li><li>Self-cleaning base</li><li>Works on fabric & upholstery</li><li>Reusable</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 roller</li><li>1 self-cleaning base</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Cleaning the base?<s>+</s></button><div class="fq-a">Open the door and empty hair into a bin.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/pet-water-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">Portable Pet Water Bottle with Dispenser</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-feeding-mat'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🟩</span></div><div class="pc-body"><div class="pc-name">Non-Slip Silicone Pet Feeding Mat</div><div class="pc-pr"><span class="pc-p">$11.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-storage-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🐕</span></div><div class="pc-body"><div class="pc-name">Airtight Pet Food Storage Container</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-grooming-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>🪮</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Slicker Pet Grooming Brush</div><div class="pc-pr"><span class="pc-p">$15.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P28(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Airtight Pet Food Storage Container | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🐕</div>
    <div class="pp-thumbs"><div class="pp-th act">🐕</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Pet Home Essentials</div>
    <h1 class="pp-nm">Airtight Pet Food Storage Container</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 612 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$19.99</span><span class="pp-op">$34.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Keeps dry pet food fresh and away from pests</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,19.99)">5L — $19.99</button><button class="pp-v" onclick="sv(this,27.99)">10L — $27.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('pet-storage-container',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🐕')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-P04</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Airtight container for dry cat or dog food. Flip-top locking lid, BPA-free food-grade plastic. Includes measuring scoop.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Airtight flip-top lid</li><li>BPA-free plastic</li><li>Wheeled base (10L)</li><li>Measuring scoop</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 container with lid</li><li>1 measuring scoop</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">5L capacity?<s>+</s></button><div class="fq-a">Approximately 2–2.5kg of standard dry kibble.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/pet-water-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">Portable Pet Water Bottle with Dispenser</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-feeding-mat'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🟩</span></div><div class="pc-body"><div class="pc-name">Non-Slip Silicone Pet Feeding Mat</div><div class="pc-pr"><span class="pc-p">$11.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-hair-remover'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Pet Hair Remover Roller</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-grooming-brush'"><div class="pc-img" style="background:linear-gradient(135deg,#F3E5F5,#E1BEE7);height:150px;font-size:52px"><span>🪮</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Slicker Pet Grooming Brush</div><div class="pc-pr"><span class="pc-p">$15.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P29(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Self-Cleaning Slicker Pet Grooming Brush | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🪮</div>
    <div class="pp-thumbs"><div class="pp-th act">🪮</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Pet Home Essentials</div>
    <h1 class="pp-nm">Self-Cleaning Slicker Pet Grooming Brush</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.7 · 1,938 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$15.99</span><span class="pp-op">$27.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Removes loose fur with a one-click release</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,15.99)">Small — $15.99</button><button class="pp-v" onclick="sv(this,18.99)">Large — $18.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('pet-grooming-brush',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🪮')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-P05</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Slicker grooming brush with one-click self-cleaning. Stainless steel pins detangle fur. Press to retract pins and drop collected hair into the bin.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>One-click release</li><li>Stainless steel pins</li><li>Ergonomic handle</li><li>All coat types</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>1 self-cleaning brush</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Sensitive pets?<s>+</s></button><div class="fq-a">Use light pressure with sensitive animals.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/pet-water-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">Portable Pet Water Bottle with Dispenser</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-feeding-mat'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🟩</span></div><div class="pc-body"><div class="pc-name">Non-Slip Silicone Pet Feeding Mat</div><div class="pc-pr"><span class="pc-p">$11.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-hair-remover'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Pet Hair Remover Roller</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-storage-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🐕</span></div><div class="pc-body"><div class="pc-name">Airtight Pet Food Storage Container</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function P30(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Collapsible Silicone Pet Travel Bowl Set | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<a class="pp-back" href="/">← Back</a>
<div class="pp-wrap">
  <div class="pp-gal">
    <div class="pp-main">🥣</div>
    <div class="pp-thumbs"><div class="pp-th act">🥣</div><div class="pp-th">📦</div><div class="pp-th">⭐</div></div>
  </div>
  <div>
    <div class="pp-cat">Pet Home Essentials</div>
    <h1 class="pp-nm">Collapsible Silicone Pet Travel Bowl Set</h1>
    <div class="pp-rat"><span class="st2">★★★★★</span> 4.8 · 769 reviews · <span style="color:var(--blue);font-weight:600">In Stock</span></div>
    <div class="pp-pr"><span class="pp-p" id="ppp">$12.99</span><span class="pp-op">$22.99</span><span class="pp-sv">43% OFF</span></div>
    <div class="pp-ben">Folds flat for walks, trips, and outdoor use</div>
    <div class="pp-lbl">Select Option</div>
    <div class="pp-vars"><button class="pp-v act" onclick="sv(this,12.99)">2-Pack (300ml) – Blue — $12.99</button><button class="pp-v" onclick="sv(this,14.99)">2-Pack (500ml) – Green — $14.99</button></div>
    <div class="pp-lbl">Quantity</div>
    <div class="pp-qty"><button onclick="qd(-1)">−</button><span id="qd">1</span><button onclick="qd(1)">+</button></div>
    <div class="pp-btns">
      <button class="btn-ac" onclick="addC('pet-travel-bowl',document.querySelector('.pp-v.act')?.textContent?.split('—')[0]?.trim()||'',parseFloat(document.getElementById('ppp').textContent.replace('$','')),'🥣')">Add to Cart</button>
      <button class="btn-bn">Buy Now</button>
    </div>
    <div class="pp-tr"><span>📦 Tracked · 7–15 business days</span><span>↩️ 30-Day Returns</span><span>🔒 Secure</span><span>✅ SKU: LVUS-P06</span></div>
    <div class="pp-sh">Product Description</div><p class="pp-d">Two collapsible silicone pet bowls that fold to under 2cm. Clip to bag with carabiner. BPA-free, dishwasher safe.</p>
    <div class="pp-sh">Key Features</div><ul class="pp-ul"><li>Folds to 2cm flat</li><li>BPA-free silicone</li><li>Carabiner clip</li><li>Dishwasher safe</li></ul>
    <div class="pp-sh">What's Included</div><ul class="pp-ul pp-il"><li>2 silicone bowls</li><li>1 carabiner clip</li></ul>
    <div class="pp-sh">Shipping & Delivery</div>
    <div class="sg"><div class="sc"><strong>Delivery</strong><span>Tracked · 7–15 business days</span></div><div class="sc"><strong>Free Shipping</strong><span>Orders over $50</span></div><div class="sc"><strong>Tracking</strong><span>Full tracking provided</span></div><div class="sc"><strong>Returns</strong><span>30-day return window</span></div></div>
    <div class="pp-sh">Return & Refund Policy</div><p class="pp-d">We accept returns within 30 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5–7 business days of receiving the returned item.</p>
    <div class="pp-sh">FAQ</div><div class="fq-item"><button class="fq-q" onclick="tfaq(this)">Leak-proof?<s>+</s></button><div class="fq-a">Yes for water use when placed flat.</div></div>
  </div>
</div>
<div class="rel-sec"><div style="max-width:1100px;margin:0 auto"><h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:20px">You May Also Like</h2><div class="rel-grid"><div class="pc" onclick="location='/products/pet-water-bottle'"><div class="pc-img" style="background:linear-gradient(135deg,#E8EAF6,#C5CAE9);height:150px;font-size:52px"><span>💧</span></div><div class="pc-body"><div class="pc-name">Portable Pet Water Bottle with Dispenser</div><div class="pc-pr"><span class="pc-p">$14.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-feeding-mat'"><div class="pc-img" style="background:linear-gradient(135deg,#E8F5E9,#C8E6C9);height:150px;font-size:52px"><span>🟩</span></div><div class="pc-body"><div class="pc-name">Non-Slip Silicone Pet Feeding Mat</div><div class="pc-pr"><span class="pc-p">$11.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-hair-remover'"><div class="pc-img" style="background:linear-gradient(135deg,#EDE7F6,#D1C4E9);height:150px;font-size:52px"><span>🐾</span></div><div class="pc-body"><div class="pc-name">Self-Cleaning Pet Hair Remover Roller</div><div class="pc-pr"><span class="pc-p">$17.99</span></div><button class="pc-btn">View</button></div></div><div class="pc" onclick="location='/products/pet-storage-container'"><div class="pc-img" style="background:linear-gradient(135deg,#FFF3E0,#FFE0B2);height:150px;font-size:52px"><span>🐕</span></div><div class="pc-body"><div class="pc-name">Airtight Pet Food Storage Container</div><div class="pc-pr"><span class="pc-p">$19.99</span></div><button class="pc-btn">View</button></div></div></div></div></div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

const STATIC={
  '/pages/about':S1,
  '/pages/contact':S2,
  '/pages/track':S3,
  '/pages/shipping':S4,
  '/pages/returns':S5,
  '/pages/faq':S6,
  '/pages/privacy':S7,
  '/pages/terms':S8,
};

function S1(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>About Us | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">About Us</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p>LiveaseUS is a curated online store focused on practical, everyday home essentials. We source products designed to make home life simpler — from kitchen tools and home organization to smart home gadgets and pet accessories.</p><p style='margin-top:16px'>All products are carefully selected for quality and everyday usefulness. We ship to all 50 US states with full order tracking.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function S2(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Contact Us | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">Contact Us</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p>Have a question? We're here to help.</p><p style='margin-top:12px'><strong>Email:</strong> support@liveaseUS.com</p><p><strong>Response time:</strong> Within 1–2 business days</p><p style='margin-top:16px'>For order tracking, please visit our <a href='/pages/track' style='color:var(--blue)'>Track Order</a> page.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function S3(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Track Your Order | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">Track Your Order</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p>To track your order, use the tracking number provided in your shipping confirmation email.</p><p style='margin-top:12px'>Orders typically ship within 1–3 business days and arrive within 7–15 business days depending on your location.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function S4(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Shipping Policy | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">Shipping Policy</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p><strong>Free Shipping:</strong> Available on all US orders over $50.</p><p style='margin-top:12px'><strong>Standard Shipping:</strong> $4.99 on orders under $50.</p><p style='margin-top:12px'><strong>Delivery Time:</strong> 7–15 business days with full tracking.</p><p style='margin-top:12px'>All orders include a tracking number sent to your email once shipped.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function S5(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Return & Refund Policy | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">Return & Refund Policy</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p>We accept returns within <strong>30 days</strong> of delivery.</p><p style='margin-top:12px'><strong>Conditions:</strong> Items must be unused, undamaged, and in original packaging.</p><p style='margin-top:12px'><strong>Process:</strong> Email support@liveaseUS.com with your order number. We'll provide a return label within 1–2 business days.</p><p style='margin-top:12px'><strong>Refunds:</strong> Processed within 5–7 business days of receiving the returned item.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function S6(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Frequently Asked Questions | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">Frequently Asked Questions</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p><strong>How long does shipping take?</strong><br>7–15 business days for standard tracked shipping to all US states.</p><p style='margin-top:16px'><strong>Do you offer free shipping?</strong><br>Yes — free on orders over $50.</p><p style='margin-top:16px'><strong>Can I return a product?</strong><br>Yes, within 30 days of delivery in unused condition.</p><p style='margin-top:16px'><strong>How do I track my order?</strong><br>A tracking number is emailed to you once your order ships.</p><p style='margin-top:16px'><strong>Are products safe and tested?</strong><br>All products are sourced from verified suppliers and meet standard safety requirements.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function S7(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Privacy Policy | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">Privacy Policy</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p>LiveaseUS collects only the information necessary to process your order (name, email, shipping address, payment). We do not sell or share your data with third parties except as required to fulfill your order. All payments are processed securely via SSL encryption.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

function S8(){return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Terms of Service | LiveaseUS</title>
<meta name="description" content="Practical home, kitchen, smart home, and pet essentials. Free US shipping on orders $50+."/>
<link rel="stylesheet" href="/styles.css"/>
</head>
<body>
<div class="topbar">Free US Shipping On Orders $50+ <span>|</span> Tracked Delivery <span>|</span> 30-Day Returns</div>
<nav class="mainnav">
  <a href="/" class="logo">LIVEASE<em>US</em></a>
  <ul class="nav-links">
    <li><a href="/#best-sellers">Best Sellers</a></li>
    <li><a href="/#kitchen">Kitchen</a></li>
    <li><a href="/#home-org">Home</a></li>
    <li><a href="/#smart-home">Smart Home</a></li>
    <li><a href="/#pet">Pet</a></li>
  </ul>
  <div class="nav-r">
    <div class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <div class="nav-icon" onclick="oC()">
      <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <div class="cart-badge" id="cb">0</div>
    </div>
  </div>
</nav>
<nav class="catnav"><div class="catnav-inner">
  <a href="#best-sellers" class="active">🔥 Best Sellers</a>
  <a href="#kitchen">🍳 Kitchen Essentials</a>
  <a href="#home-org">🏠 Home Organization</a>
  <a href="#smart-home">💡 Smart Home Finds</a>
  <a href="#pet">🐾 Pet Home Essentials</a>
</div></nav>
<div style="max-width:800px;margin:60px auto;padding:0 40px 80px">
<a href="/" style="color:var(--blue);font-size:13px;font-weight:600">← Back to Home</a>
<h1 style="font-size:28px;font-weight:800;color:var(--navy);margin:24px 0 16px">Terms of Service</h1>
<div style="font-size:15px;color:var(--muted);line-height:1.8"><p>By placing an order with LiveaseUS, you agree to our terms. All orders are subject to product availability. Prices are in USD and subject to change. We reserve the right to cancel orders at our discretion. Returns are subject to our Return Policy.</p></div>
</div>
<div class="cart-ov" id="co" onclick="cC()"></div>
<div class="cart-dr" id="cd">
  <div class="cart-hd"><h3>Your Cart</h3><button class="cart-cl" onclick="cC()">✕</button></div>
  <div class="cart-bd" id="cdb"><div class="ce"><div class="ce-ico">🛍️</div><p>Your cart is empty</p></div></div>
  <div class="cart-ft" id="cdf"></div>
</div>
<button class="st" id="stt" onclick="scrollTo({top:0,behavior:'smooth'})">↑</button>
<script src="/script.js"></script>
</body>
</html>`;}

