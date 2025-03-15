//휠움직임
$(function(){

  //works menu1
  $(".menu1 li a").css({ textDecoration: "none", color: "black", fontWeight: "normal" });
  $(".menu1 li:eq(0) a").css({ fontWeight: "bold", color: "#9b5408" });
  
  $(".menu1 li:eq(0) a").click(function(e) {
      e.preventDefault();
      frameNum = 0;
      ani();
      bar.css({ transition: "0.7s", background: "rgba(255,165,0,1)" });
      bar.text("Design");
  
      $(".menu1 li a").css({ textDecoration: "none", color: "black", fontWeight: "normal" });
      $(".menu1 li:eq(0) a").css({ fontWeight: "bold", color: "#9b5408"});
  });
  
  $(".menu1 li:eq(1) a").click(function(e) {
      e.preventDefault();
      frameNum = 1;
      ani();
      bar.css({ transition: "0.7s", background: "rgba(137,207,240,1)" });
      bar.text("Publishing");
  
      $(".menu1 li a").css({ textDecoration: "none", color: "black", fontWeight: "normal" });
      $(".menu1 li:eq(1) a").css({ fontWeight: "bold", color: "#08659b" });
  });
  
  $(".menu1 li:eq(2) a").click(function(e) {
      e.preventDefault();
      frameNum = 2;
      ani();
      bar.css({ transition: "0.7s", background: "rgba(255,192,203,1)" });
      bar.text("etc");
  
      $(".menu1 li a").css({ textDecoration: "none", color: "black", fontWeight: "normal" });
      $(".menu1 li:eq(2) a").css({ fontWeight: "bold", color: "#e55398" });
  });
  
  // bar motion
  $(".gall ul").css({ transition: "0.4s" });
  
  const g = "#sw_gallery";
  
  $(g + " .gall ul:first").css({ opacity: 1 });
  
  let bar = $(g + " .bar");
  let bar_bg = $(g + " .bar_bg");
  let frame = $(g + " .gall>ul");
  
  frame.css({ opacity: 0, zIndex: "1" });
  frame.eq(0).css({ opacity: 1, zIndex: "10" });
  
  let a; // 보여질 이미지 순번에 대입될 변수
  let b; // bar의 left값
  let c = frame.length - 1; // 전체ul개수-1
  let d = parseInt(bar_bg.css("width"));
  let e = 0;
  let f = parseInt(bar.css("width"));
  
    bar.draggable({ axis: "x", containment: "parent" });
    bar.bind("drag", function() {
     bar.css({ transition: "0.4s" });
  
      b = parseInt(bar.css("left"));
      a = (c - e) * (b / (d - f));
      let roundedA = Math.round(a); // Math.round(a)를 미리 계산하여 중복 제거
  
      frame.css({ opacity: 0, zIndex: "1" });
      frame.eq(roundedA).css({ opacity: 1, zIndex: "10" });
  
      // bar의 색상 및 텍스트 업데이트
      if (roundedA >= 0 && roundedA < 1) {
          bar.css({ background: "rgba(255,165,0,1)" });
          bar.text("Design");
      } else if (roundedA >= 1 && roundedA < 2) {
          bar.css({ background: "rgba(137,207,240,1)" });
          bar.text("Publishing");
      } else {
          bar.css({ background: "rgba(255,192,203,1)" });
          bar.text("etc");
      }
  });
  
  
  //포폴 이미지 3개 묶음 애니메이션 시키기
  let frameNum = 0;
  
  function ani() {
      $(g+" .gall ul").css({ opacity: 0, zIndex: "1" });
      $(g+" .gall ul:eq("+frameNum+")").css({ opacity: 1, zIndex: "10" });
  
      let a = frameNum;
      let b = (a / (c - e)) * (d - f);
      bar.css({ left: b });
  }
  
  function aniNext() {
      frameNum = (frameNum + 1) % $(g+" .gall ul").length; // 순방향 처리
  
      $(g+" .gall ul").css({ opacity: 0, zIndex: "1" });
      $(g+" .gall ul:eq("+frameNum+")").css({ opacity: 1, zIndex: "10" });
  
      let a = frameNum;
      let b = (a / (c - e)) * (d - f);
      bar.css({ left: b });
  }
  
  function aniPrev() {
      frameNum = (frameNum - 1 + $(g+" .gall ul").length) % $(g+" .gall ul").length; // 역방향 처리
  
      $(g+" .gall ul").css({ opacity: 0, zIndex: "1" });
      $(g+" .gall ul:eq("+frameNum+")").css({ opacity: 1, zIndex: "10" });
  
      let a = frameNum;
      let b = (a / (c - e)) * (d - f);
      bar.css({ left: b });
  }
  
  // wheel 이벤트 처리 (휠)
  $(g+" .gall").on("wheel", function(e) {
      e.preventDefault(); // 기본 스크롤 방지
  
      bar.css({ transition: "0.3s" });
  
      // 휠을 아래로 돌렸을 때
      if (e.originalEvent.deltaY > 0) {
          aniNext();
      } else { // 휠을 위로 돌렸을 때
          aniPrev();
      }
  
      // frameNum에 따른 스타일 설정
      if (frameNum >= 0 && frameNum < 1) {
          bar.css({ background: "rgba(255,165,0,1)" });
          bar.text("Design");
      } else if (frameNum >= 1 && frameNum < 2) {
          bar.css({ background: "rgba(137,207,240,1)" });
          bar.text("Publishing");
      } else {
          bar.css({ background: "rgba(255,192,203,1)" });
          bar.text("etc");
      }
  });
  
  // images mouse events
  const gall = document.querySelector(g+" .gall");
  
  gall.addEventListener("mouseenter", function(e) {
      document.querySelector("body").style.overflowY = "hidden";
      document.querySelector("body").style.paddingRight = "17px";
    });
  
  gall.addEventListener("mouseleave", function(e) {
      document.querySelector("body").style.overflowY = "auto";
      document.querySelector("body").style.paddingRight = "0px";
    });
  });
  
  // ---------------------
  
  // pspGall 개선
  function pspGall(g, w, p) {
      const wrap = document.querySelector(g);
      const ball = document.querySelectorAll(g+" .ball");
      const next = document.querySelector(g+" .next");
      const prev = document.querySelector(g+" .prev");
  
      let d = 0;
      let targetD = 0;
  
      const wide = w;
      const ps = p;
  
      const ball_top = wrap.offsetHeight / 2 - ball[0].offsetHeight / 2;
      const num = ball.length;
      const centerX = wrap.offsetWidth / 2 - ball[0].offsetWidth / 2;
  
      let x = [];
      let psp = [];
  
      function pspRolling() {
        d = d + 0.1 * (targetD - d);
  
      for (let i = 0; i < num; i++) {
        x[i] = Math.cos(Math.PI / 180 * (d + 360 / num * i)) * wide + centerX;
        psp[i] = 1 - Math.sin(Math.PI / 180 * (d + 360 / num * i)) / ps;
  
        ball[i].style.left = x[i] + "px";
        ball[i].style.transform = "scale(" + psp[i] + ")";
        ball[i].style.opacity = psp[i];
        ball[i].style.zIndex = Math.floor(psp[i] * 100);
        ball[i].style.top = ball_top + "px";
        }
      }
  
      setInterval(pspRolling, 10); //pspRolling함수를 0.01초마다 실행
  
      next.addEventListener("click", function(e) {
          e.preventDefault();
          targetD += 360 / num;
      });
  
      prev.addEventListener("click", function(e) {
          e.preventDefault();
          targetD -= 360 / num;
      });
  
      wrap.addEventListener("wheel", function(e) {
          if (e.deltaY < 0) { // 위로 휠
              targetD -= 360 / num;
          } else { // 아래로 휠
              targetD += 360 / num;
          }
      });
      wrap.addEventListener("mouseenter",function(e){
        document.querySelector("body").style.overflow="hidden";
        document.querySelector("body").style.paddingRight="17px";
      });
      wrap.addEventListener("mouseleave",function(e){
        document.querySelector("body").style.overflow="auto";
        document.querySelector("body").style.paddingRight="0px";
      });
    }
  
  