const cards = document.querySelectorAll(".card");

//declaring global variables
let isCardFlipped = false;
let cardOne, cardTwo;

//defining flipCard function
function flipCard (){
 this.classList.add('is-flipped');

 if (!isCardFlipped)
 //first click
 {isCardFlipped = true;
 cardOne = this;
 } else {
     isCardFlipped =false;
     cardTwo = this;
     console.log ({cardOne,cardTwo})
 }
}

//looping through all the cards
cards.forEach (card => card.addEventListener('click',flipCard));

