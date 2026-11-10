(function(){var b=document.getElementById("consent");try{if(!localStorage.getItem("gp_consent"))b.classList.add("show")}catch(e){b.classList.add("show")}
document.getElementById("ok").onclick=function(){try{localStorage.setItem("gp_consent","1")}catch(e){}b.classList.remove("show")}})();
