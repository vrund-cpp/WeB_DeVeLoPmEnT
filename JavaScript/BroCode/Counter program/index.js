// counter program

const incbtn = document.getElementById('incbtn');
const decbtn = document.getElementById('decbtn');
const rstbtn = document.getElementById('rstbtn');
const counterbtn = document.getElementById('mylbl');

let cnt = 0;

incbtn.onclick = function(){
    cnt++;
    counterbtn.textContent = cnt;
} 

decbtn.onclick = function(){
    cnt--;
    counterbtn.textContent = cnt;
}

rstbtn.onclick = function(){
    cnt = 0;
    counterbtn.textContent = cnt;
}