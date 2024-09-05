// Temprature conversion program

const tempval = document.getElementById("tempval");
const ftoc = document.getElementById("ftoc");
const ctof = document.getElementById("ctof");
const ans = document.getElementById("result");

let temp;

function convert(){
    temp = Number(tempval.value);

    if(ftoc.checked){
      temp = (temp-32)*(5/9);
      ans.textContent = temp.toFixed(1) + "°C";
    }
    else if(ctof.checked){
      temp = temp * 9 / 5 + 32;
      ans.textContent = temp.toFixed(1) + "°F";
    }
    else{
      ans.textContent = "select a unit";
    }


}