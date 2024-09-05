// Random number generator

let min = 1 
let max = 5

const btn = document.getElementById("mybtn");
const lbl1 = document.getElementById("mylbl1");
const lbl2 = document.getElementById("mylbl2");
const lbl3 = document.getElementById("mylbl3");

let cnt1 = 0,cnt2 = 0,cnt3 = 0;

btn.onclick = function(){
    cnt1 = Math.floor(Math.random() * max) + min;
    cnt2 = Math.floor(Math.random() * max) + min;
    cnt3 = Math.floor(Math.random() * max) + min;
    lbl1.textContent = cnt1;
    lbl2.textContent = cnt2;
    lbl3.textContent = cnt3;

}


