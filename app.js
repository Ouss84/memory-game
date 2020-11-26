const cards = document.querySelectorAll(".card");

//declaring global variables
let isCardFlipped = false;
let cardOne, cardTwo;
let disableUnflippedCards =false;

//defining flipCard function
shuffleDeck();
function flipCard (){
   
  if (disableUnflippedCards)  return;
  if (this === cardOne) return ;
 this.classList.add('is-flipped');

 if (!isCardFlipped)
 //first flipped card
 {isCardFlipped = true;
 cardOne = this;
 } else {
     //second flipped card
     isCardFlipped =false;
     cardTwo = this;

     cardsMatch();
     
 }
}


//defining cardsMatching function
function cardsMatch () {

//checking if the front-faces matches
if (cardOne.dataset.image === cardTwo.dataset.image){
    //if they match
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);
    resetGuess();
} else {
    //if they don't match
    disableUnflippedCards = true;
    setTimeout(()=>{
        cardOne.classList.remove('is-flipped');
        cardTwo.classList.remove('is-flipped');
       resetGuess();
    }, 1000);
}
}

//defining the resetGuess function
function resetGuess () {
    isCardFlipped = false;
    disableUnflippedCards =false;
    cardOne = null;
    cardTwo = null;
}

//defining shuffleDeck function
function shuffleDeck (){
    cards.forEach(card => {
        let randomOr = Math.floor(Math.random()*6)
        card.style.order = randomOr;
    })
}

//looping through all the cards
cards.forEach (card => card.addEventListener('click',flipCard));

