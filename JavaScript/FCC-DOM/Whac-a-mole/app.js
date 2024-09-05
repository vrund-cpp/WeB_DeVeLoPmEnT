const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const resultDisp = document.querySelector('#result')
const timeLeftDisp = document.querySelector('#time-left');

let hitposition;
let timerId = null;
let currenttime = 30;
let result = 0;


    function randomSquare(){
        squares.forEach(square => {
            square.classList.remove('mole');
        })
        
        let randomSquare = squares[Math.floor(Math.random() * 9)];
        randomSquare.classList.add('mole');
        hitposition = randomSquare.id;    
    }

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            if(square.id == hitposition){
                result++;
                resultDisp.textContent = result;
                hitposition = null;
            }
        })
    })

    function moveMole(){
        timerId = setInterval(randomSquare,1000);
    }

    moveMole();

    function countDown(){
        currenttime--;
        timeLeftDisp.textContent = currenttime;
        
        if(currenttime == 0){
            clearInterval(countDownTimerid);
            clearInterval(timerId);
            alert('GAME OVER! Your final score is ' + result);
        }
    }
    
   let countDownTimerid = setInterval(countDown,1000);
    





