(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),m=document.getElementById("timer-seconds"),r=e=>e<=9?"0"+e:e,s=setInterval((()=>{(()=>{let e=(()=>{let e=new Date("20 january 2022").getTime(),t=(new Date).getTime(),n=Math.floor((e-t)/1e3);return{timeRemaining:n,days:Math.floor(n/60/60/24),hours:Math.floor(n/60/60%24),minutes:Math.floor(n/60%60),seconds:Math.floor(n%60)}})();e.timeRemaining>=0?(t.textContent=r(e.days),n.textContent=r(e.hours),o.textContent=r(e.minutes),m.textContent=r(e.seconds)):clearInterval(s)})()}),1e3)})()})();