function show_hide_sections(){$(".hidde_sec").hide(),$(".active_sec").show(),$('.list_navigator li a[href^="#"]').on("click",function(e){$(".hidde_sec").hide();var t=$(this).attr("href");$(".hidde_sec"+t).show(),console.log(t)})}!function(){var e=$(window).width();$(window).scroll(function(){var e=$(window).scrollTop();e>50?$("header").addClass("opacity_header"):$("header").removeClass("opacity_header"),console.log(e)}),console.log(e),$(".btn-nav").click(function(){$(this).toggleClass("btn-act"),$(".navigation").toggleClass("view_nav")}),$(".list_navigator li a").click(function(){$(".btn-nav").removeClass("btn-act"),$(".navigation").removeClass("view_nav")})}(),show_hide_sections(),document.onkeydown=function(e){e=e||window.event,27==e.keyCode&&$(".navigation").removeClass("view_nav")},particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});var count_particles,stats,update;stats=new Stats,stats.setMode(0),stats.domElement.style.position="absolute",stats.domElement.style.left="0px",stats.domElement.style.top="0px",document.body.appendChild(stats.domElement),count_particles=document.querySelector(".js-count-particles"),update=function(){stats.begin(),stats.end(),window.pJSDom[0].pJS.particles&&window.pJSDom[0].pJS.particles.array&&(count_particles.innerText=window.pJSDom[0].pJS.particles.array.length),requestAnimationFrame(update)},requestAnimationFrame(update);