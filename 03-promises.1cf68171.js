function e(e,t){return new Promise(((o,n)=>{const s=Math.random()>.3;setTimeout((()=>{s?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}const t=document.querySelector(".form");t.addEventListener("submit",(function(o){o.preventDefault();const n=Number(t.elements.delay.value),s=Number(t.elements.step.value),l=Number(t.elements.amount.value);for(let t=0;t<l;t++){e(t+1,n+t*s).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}t.reset()}));
//# sourceMappingURL=03-promises.1cf68171.js.map