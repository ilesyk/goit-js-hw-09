!function(){function e(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}var n=document.querySelector(".form");n.addEventListener("submit",(function(o){o.preventDefault();for(var t=Number(n.elements.delay.value),i=Number(n.elements.step.value),a=Number(n.elements.amount.value),c=0;c<a;c++){e(c+1,t+c*i).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}n.reset()}))}();
//# sourceMappingURL=03-promises.021fc4cf.js.map
