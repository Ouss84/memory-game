const cards = document.querySelectorAll(".card");

//declaring global variables
let isCardFlipped = false;
let cardOne, cardTwo;

//defining flipCard function
function flipCard (){
 this.classList.add('is-flipped');

 if (!isCardFlipped)
 //first flipped card
 {isCardFlipped = true;
 cardOne = this;
 } else {
     //second flipped card
     isCardFlipped =false;
     cardTwo = this;

     //checking if the front-faces matches
     if (cardOne.dataset.image === cardTwo.dataset.image){
         //if they match
         cardOne.removeEventListener('click', flipCard);
         cardTwo.removeEventListener('click', flipCard);
         console.log(cardOne);
     } else {
         //if they don't match
         setTimeout(()=>{
             cardOne.classList.remove('is-flipped');
             cardTwo.classList.remove('is-flipped');
         }, 1000);
     }
 }
}

//looping through all the cards
cards.forEach (card => card.addEventListener('click',flipCard));

