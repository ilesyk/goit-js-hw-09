!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var o,e={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};e.start.addEventListener("click",(function(a){e.body.style.backgroundColor=t(),o=setInterval((function(){e.body.style.backgroundColor=t()}),1e3),e.start.disabled=!0,e.stop.disabled=!1})),e.stop.addEventListener("click",(function(t){clearInterval(o),e.stop.disabled=!0,e.start.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.ed7ff932.js.map