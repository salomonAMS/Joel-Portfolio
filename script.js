// ── CURSOR ──
const cursor=document.getElementById("cursor"),ring=document.getElementById("cursorRing");
let mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
(function anim(){cursor.style.left=mx+"px";cursor.style.top=my+"px";rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(anim)})();
document.querySelectorAll("a,button,.proj-card,.service-card,.tool-row").forEach(el=>{
  el.addEventListener("mouseenter",()=>ring.classList.add("hover"));
  el.addEventListener("mouseleave",()=>ring.classList.remove("hover"));
});

// ══════════════════════════════════════════════
// SHUTTER VIDEO — Cinematic background mode
// Video fades in behind hero text
// ══════════════════════════════════════════════
const shutterOverlay = document.getElementById("shutterOverlay");
const shutterVideo   = document.getElementById("shutterVideo");
const heroRight      = document.getElementById("heroRight");

window.addEventListener("load", ()=>{
  setTimeout(()=>{
    // --- Dismiss loader ---
    const loader = document.getElementById("loader");
    loader.classList.add("done");
    setTimeout(()=>{ loader.style.display="none"; }, 700);

    // --- Fade in video ---
    shutterVideo.play().catch(()=>{});
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{ 
        shutterOverlay.classList.add("phase-a"); 
      });
    });

    // --- Phase C: hide video when hero scrolls out ---
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > window.innerHeight * 0.90){
        Object.assign(shutterOverlay.style, {
          opacity:"0", transition:"opacity 0.7s ease", pointerEvents:"none"
        });
      } else {
        Object.assign(shutterOverlay.style, {
          opacity:"", transition:"opacity 0.7s ease" // restores CSS class opacity
        });
      }
    }, {passive:true});

  }, 2000);
});

// ── NAV ──
window.addEventListener("scroll",()=>{
  document.getElementById("mainNav").classList.toggle("scrolled",window.scrollY>60);
},{passive:true});

// ── MOBILE MENU ──
let menuOpen=false;
function toggleMobile(){
  menuOpen=!menuOpen;
  document.getElementById("mobileMenu").classList.toggle("open",menuOpen);
  const spans=document.getElementById("hamburger").querySelectorAll("span");
  if(menuOpen){spans[0].style.transform="rotate(45deg) translate(4px,4px)";spans[1].style.opacity="0";spans[2].style.transform="rotate(-45deg) translate(4px,-4px)"}
  else spans.forEach(s=>{s.style.transform="";s.style.opacity=""});
}
function closeMobile(){if(menuOpen)toggleMobile()}

// ── SCROLL REVEAL ──
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in-view")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revObs.observe(el));

// ── TOOL BARS ──
const toolObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){const b=e.target.querySelector(".tool-bar");if(b)b.style.width=b.dataset.width+"%"}});
},{threshold:.3});
document.querySelectorAll(".tool-row").forEach(r=>toolObs.observe(r));

// ═══════════════════════════════════════════════════════════
// iPHONE 13 MINI — Cinematic scroll animation
//
// SCROLL MAP (progress 0→1 over 700vh):
//   P0  0.00→0.13  Back cameras fill screen (extreme zoom in)
//   P1  0.13→0.30  Dezoom to see full phone (back visible)
//   P2  0.30→0.48  Phone rotates to show front (back→front)
//   P3  0.48→0.55  Screen appears, phone stabilises vertical
//   P4  0.55→0.70  Phone tilts landscape + zooms — screen fills view
//                   landscapeInner scrolls to reveal monteur block
//   P5  0.70→0.84  Dezoom + return to vertical
//   P6  0.84→1.00  Phone at normal size, slowly spinning (360 role)
// ═══════════════════════════════════════════════════════════
const iphSec    = document.getElementById("iphone-section");
const iphWrap   = document.getElementById("iphoneWrap");
const iphBack   = document.getElementById("iphoneBack");
const iphFront  = document.getElementById("iphoneFront");
const screenOv  = document.getElementById("screenOverlay");
const scrPortrait  = document.getElementById("scrPortrait");
const scrLandscape = document.getElementById("scrLandscape");
const scrLandInner = document.getElementById("scrLandInner");
const iphAmb    = document.getElementById("iphoneAmbient");
const ipLabel   = document.getElementById("ipLabel");
const ipLeft    = document.getElementById("ipLeft");
const ipRight   = document.getElementById("ipRight");
const ipDots    = [0,1,2,3,4].map(i=>document.getElementById("ipd"+i));

const eOut  = t=>1-Math.pow(1-t,3);
const eIO   = t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const cl    = (v,a,b)=>Math.max(a,Math.min(b,v));
const rm    = (v,a,b)=>cl((v-a)/(b-a),0,1);

// Determine the phone display size relative to viewport
function phoneH(){ return Math.min(window.innerHeight*0.72, 520); }
function phoneW(){ return phoneH()*0.465; } // iPhone 13 mini aspect ~0.465

function setDot(i){
  ipDots.forEach((d,j)=>d.classList.toggle("active",j===i));
}

const LABELS=["Système caméra","Téléphone complet","Rotation…","Écran activé","Mode paysage — Monteur","Retour vertical","Studio mobile"];
const PHASE_TEXTS = [
  // P0 - 0 (no text)
  { lEye:"", lTitle:"", lText:"", rEye:"", rTitle:"", rText:"" },
  // P1 - 1
  { lEye:"Post-production", lTitle:"Précision<br>au pixel.", lText:"Chaque coupe est pensée pour servir le récit. La technique au service de l'émotion.", rEye:"Studio mobile", rTitle:"Livraison<br>mondiale.", rText:"Un workflow optimisé qui permet de livrer des résultats professionnels partout." },
  // P2 - 2
  { lEye:"Technologie", lTitle:"L'Outil<br>Parfait.", lText:"Découvrez l'envers du décor. Un design minimaliste pour une performance maximale.", rEye:"Design", rTitle:"Lignes<br>Épurées.", rText:"Une prise en main pensée pour la création sans limite." },
  // P3 - 3
  { lEye:"Action", lTitle:"Moteur.<br>Ça tourne.", lText:"Des couleurs éclatantes et une fluidité hors norme au bout de vos doigts.", rEye:"Interface", rTitle:"Focus<br>Absolu.", rText:"Plus rien entre vous et votre création." },
  // P4 - 4 (wow effect horizontal)
  { lEye:"EXPÉRIENCE", lTitle:"<span style='color:var(--red);font-style:italic;'>W</span>O<span style='color:var(--red);font-style:italic;'>W</span>", lText:"Passez à la dimension supérieure. L'immersion totale commence ici.", rEye:"CINÉMA", rTitle:"Vision<br>Panoramique.", rText:"Élargissez vos horizons créatifs d'un simple geste." },
  // P5 - 5
  { lEye:"Transition", lTitle:"Retour à<br>l'essentiel.", lText:"Une fluidité de mouvement qui accompagne chaque étape.", rEye:"Contrôle", rTitle:"Maîtrise<br>Totale.", rText:"Ajustez, cadrez, sublimez en un clin d'œil." },
  // P6 - 6
  { lEye:"360°", lTitle:"Vision<br>Globale.", lText:"Le summum de la créativité, sous tous les angles.", rEye:"Finalisation", rTitle:"Prêt pour<br>le monde.", rText:"Votre vision, prête à être partagée avec éclat." }
];

let lastPhase=-1;
function setPhase(ph){
  if(ph===lastPhase)return; lastPhase=ph;
  ipLabel.textContent=LABELS[ph]||"";
  setDot(Math.min(ph,4));
  
  const ctx = PHASE_TEXTS[ph];
  if (ctx) {
    ipLeft.innerHTML = ctx.lTitle ? `<div class="ip-eyebrow">${ctx.lEye}</div><div class="ip-title">${ctx.lTitle}</div><p class="ip-body">${ctx.lText}</p>` : "";
    ipRight.innerHTML = ctx.rTitle ? `<div class="ip-eyebrow">${ctx.rEye}</div><div class="ip-title">${ctx.rTitle}</div><p class="ip-body">${ctx.rText}</p>` : "";
  }
}

function onIPhoneScroll(){
  const rect=iphSec.getBoundingClientRect();
  const sH=iphSec.offsetHeight-window.innerHeight;
  if(sH<=0)return;
  const prog=cl(-rect.top/sH,0,1);

  const pH=phoneH(), pW=phoneW();

  // Sub-progress per phase
  const p0=eOut(rm(prog,0,0.13));
  const p1=eIO(rm(prog,0.13,0.30));
  const p2=eIO(rm(prog,0.30,0.48));
  const p3=eOut(rm(prog,0.48,0.55));
  const p4=eIO(rm(prog,0.55,0.70));
  const p5=eIO(rm(prog,0.70,0.84));
  const p6=rm(prog,0.84,1.00); let scale=1, rotY=0, rotZ=0, rotX=0, ty=0;
  let showBack=false, showScreen=false, showPortrait=false, showLandscape=false;
  let landScrollX=0;

  if(prog<0.13){
    // P0: cameras extreme close-up (back, huge scale)
    scale=7-p0*5.5;   // 7→1.5
    rotY=180;          // showing back
    rotX=-5;
    showBack=true;
    setPhase(0);
    // ipLeft/ipRight visibility managed globally now based on phase
    iphAmb.style.background="radial-gradient(ellipse at 50% 50%,rgba(180,150,100,.07) 0%,transparent 70%)";

  }else if(prog<0.30){
    // P1: dezoom to full phone, back still visible
    scale=1.5-p1*0.5;  // 1.5→1.0
    rotY=180;
    rotX=-5+p1*5;
    showBack=true;
    setPhase(1);
    iphAmb.style.background="radial-gradient(ellipse at 50% 50%,rgba(201,168,76,.05) 0%,transparent 70%)";

  }else if(prog<0.48){
    // P2: phone rotates back→front (rotateY 180→0)
    scale=1.0;
    rotY=180-p2*180;   // 180→0
    rotX=0;
    // show back until halfway through rotation
    showBack=rotY>90;
    showScreen=rotY<20; // screen fades in near the end
    setPhase(2);
    iphAmb.style.background="radial-gradient(ellipse at 50% 50%,rgba(201,168,76,.06) 0%,transparent 70%)";

  }else if(prog<0.55){
    // P3: phone vertical front-facing, screen portrait visible
    scale=1.0; rotY=0; rotX=0; rotZ=0;
    showBack=false; showScreen=true; showPortrait=true;
    setPhase(3);
    iphAmb.style.background="radial-gradient(ellipse at 50% 50%,rgba(201,168,76,.08) 0%,transparent 70%)";

  }else if(prog<0.70){
    // P4: tilt landscape + zoom + screen reveals monteur
    scale=1.0+p4*1.0;         // 1→2 (fills view)
    rotZ=-p4*90;               // portrait→landscape
    rotY=-p4*8;
    rotX=p4*4;
    showBack=false; showScreen=true; showLandscape=true;
    // Drive landscape inner scroll to reveal monteur block
    landScrollX=-p4*60;
    setPhase(4);
    iphAmb.style.background="radial-gradient(ellipse at 50% 50%,rgba(100,50,201,.05) 0%,transparent 70%)";

  }else if(prog<0.84){
    // P5: dezoom + return to vertical
    scale=2.0-p5*1.0;          // 2→1
    rotZ=-90+p5*90;             // landscape→portrait
    rotY=-8+p5*8;
    rotX=4-p5*4;
    showBack=false; showScreen=true; showLandscape=p5<0.5; showPortrait=p5>0.5;
    landScrollX=-60;
    setPhase(5);
    iphAmb.style.background="radial-gradient(ellipse at 50% 50%,rgba(201,168,76,.07) 0%,transparent 70%)";

  }else{
    // P6: phone normal size, slow spin, descends slowly to wrap up
    scale=1.0;
    rotY=p6*720;               // continuous slow spin
    rotZ=0; rotX=0;
    ty = p6 * (window.innerHeight * 0.7); // descends towards bottom
    showBack=rotY%360>90&&rotY%360<270;
    showScreen=!(rotY%360>90&&rotY%360<270);
    showPortrait=showScreen;
    setPhase(6);
    iphAmb.style.background="radial-gradient(ellipse at 50% 50%,rgba(201,168,76,.06) 0%,transparent 70%)";
  }

  // Manage visibility of texts globally based on phase
  const isPhaseWithText = lastPhase > 0;
  ipLeft.classList.toggle("vis", isPhaseWithText);
  ipRight.classList.toggle("vis", isPhaseWithText);

  // Apply phone size
  iphWrap.style.width  = pW+"px";
  iphWrap.style.height = pH+"px";

  // Apply transform (fade in from 0)
  const fadeIn=eOut(rm(prog,0,0.05));
  iphWrap.style.opacity=fadeIn;
  iphWrap.style.transform=`perspective(1400px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) rotateX(${rotX}deg) scale(${scale}) translateY(${ty}px)`;

  // Back / front visibility
  iphBack.style.opacity  = showBack ? "1" : "0";
  iphBack.style.zIndex   = showBack ? "3" : "0";
  iphFront.style.opacity = showBack ? "0" : "1";

  // Screen overlay
  if(screenOv) screenOv.classList.toggle("vis", showScreen);
  if(scrPortrait) scrPortrait.classList.toggle("vis", showPortrait && !showLandscape);
  if(scrLandscape) scrLandscape.classList.toggle("vis", showLandscape);

  // Landscape inner scroll
  if(showLandscape && scrLandInner){
    scrLandInner.style.transform=`translateX(${landScrollX}%)`;
  }
}

window.addEventListener("scroll",onIPhoneScroll,{passive:true});
onIPhoneScroll();

// ── FORM ──
function handleSubmit(e){
  e.preventDefault();
  const btn=e.target.querySelector(".btn-submit"),orig=btn.textContent;
  btn.textContent="Message envoyé ✓";btn.style.background="#2ecc71";
  setTimeout(()=>{btn.textContent=orig;btn.style.background="";e.target.reset()},3000);
}