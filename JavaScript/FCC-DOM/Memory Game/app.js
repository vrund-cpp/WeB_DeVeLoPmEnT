// Special Mension: kubowania

const cardArray = [{
    name: 'pizza', img: '/images/pizza.png'
},{
    name: 'milkshake', img: '/images/milkshake.png'
},{
    name: 'ice-cream', img: '/images/ice-cream.png'
},{
    name: 'hotdog', img: '/images/hotdog.png'
},{
    name: 'fries', img: '/images/fries.png'
},{
    name: 'cheeseburger', img: '/images/cheeseburger.png'
},{
    name: 'pizza', img: '/images/pizza.png'
},{
    name: 'milkshake', img: '/images/milkshake.png'
},{
    name: 'ice-cream', img: '/images/ice-cream.png'
},{
    name: 'hotdog', img: '/images/hotdog.png'
},{
    name: 'fries', img: '/images/fries.png'
},{
    name: 'cheeseburger', img: '/images/cheeseburger.png'
}];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');
let result = document.querySelector('#result');
let totalTurnsDisp = document.querySelector('#total-turns');

let chosenCards = [];
let chosenCardsIds = [];
let cardWons = [];
let totalTurnscnt = 0;

function createBoard(){
    for(let i=0;i<12;i++){
        const node = document.createElement('img');
        node.setAttribute('src', '/images/blank.png');
        node.setAttribute('data-id', i);
        node.addEventListener('click',flipCard);
        grid.append(node); 
    }
    totalTurnscnt = 0;
}

function checkMatch(){
    const cards = document.querySelectorAll('img');
    let optionOneId = chosenCardsIds[0];
    let optionTwoId = chosenCardsIds[1];

    if(optionOneId === optionTwoId){
        cards[optionOneId].setAttribute('src','/images/blank.png');
        cards[optionTwoId].setAttribute('src','/images/blank.png');
        alert('You clicked on same image');
    }
    else if(chosenCards[0] == chosenCards[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src','/images/white.png');
        cards[optionTwoId].setAttribute('src','/images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardWons.push(chosenCards);        
    }
    else{
        cards[optionOneId].setAttribute('src','/images/blank.png');
        cards[optionTwoId].setAttribute('src','/images/blank.png');
        alert('Sorry, Try Again');
    }

    result.textContent = cardWons.length;
    totalTurnsDisp.textContent = totalTurnscnt/2;

    if(cardWons.length === cardArray.length/2){
        result.textContent = 'Congratulations! You found them all!';
    }
    chosenCards = [];
    chosenCardsIds = [];
}


function flipCard(){
    totalTurnscnt++;
    let filpCardId = this.getAttribute('data-id');
    chosenCards.push(cardArray[filpCardId].name);
    chosenCardsIds.push(filpCardId);
    this.setAttribute('src',cardArray[filpCardId].img)

    if(chosenCards.length === 2){
        setTimeout(checkMatch,500);
    }
}

createBoard();



