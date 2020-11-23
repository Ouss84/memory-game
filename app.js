const cards = document.querySelectorAll(".card");

//defining flipCard function
function flipCard (){
 this.classList.toggle('is-flipped');
}

//looping through all the cards
cards.forEach (card => card.addEventListener('click',flipCard));

