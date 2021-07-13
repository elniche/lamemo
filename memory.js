
////para el tiempo
function LaHora() {
    var time = new Date();
    document.getElementById("tiempo").innerHTML = time.toLocaleTimeString();
    
}

setInterval(LaHora, 1000);



//card options
const Array = [

{
  name: 'uno',
  img:'images/uno.jpg'
},
{
name: 'dos',
img:'images/dos.jpg'
},
{
  name: 'tres',
  img: 'images/tres.jpg'
},
{
  name: 'cuatro',
  img: 'images/cuatro.jpg'
},
{
  name: 'cinco',
  img: 'images/cinco.jpg'
},
{
  name: 'seis',
  img: 'images/seis.jpg'
},
{
  name: 'uno',
  img:'images/uno.jpg'
},
{
name: 'dos',
img:'images/dos.jpg'
},
{
  name: 'tres',
  img: 'images/tres.jpg'
},
{
  name: 'cuatro',
  img: 'images/cuatro.jpg'
},
{
  name: 'cinco',
  img: 'images/cinco.jpg'
},
{
  name: 'seis',
  img: 'images/seis.jpg'
}


]

Array.sort(() => 0.5 - Math.random());////DEJASTE AQUI

const gray = document.querySelector('.grid');
const theResults = document.querySelector('#result');
let theChosen = [];
let cardSSN = [];
let Winner = [];

// create the board
function createBoard() {
  for(let i =0; i < Array.length;i++) {
    const cartas = document.createElement('img');
    cartas.setAttribute('src','images/blackpic.jpg');
    cartas.setAttribute('data-id', i);
    cartas.addEventListener('click', flipCard);
    gray.appendChild(cartas);
  }
}

//check for matches
function checkForMatch() {
  const letra = document.querySelectorAll('img');
  const theFirst = cardSSN[0];
  const theSecond = cardSSN[1];


if(theFirst == theSecond) {
letra[theFirst].setAttribute('src', 'images/blackpic.jpg');
letra[theSecond].setAttribute('src', 'images/blackpic.jpg');
alert('You Selected The Same Pic!!');
}
  else if(theChosen[0]===theChosen[1]) {
alert("Wow, You Got A Match..!!!");
letra[theFirst].setAttribute('src', 'images/graypic.jpg');
letra[theSecond].setAttribute('src', 'images/graypic.jpg');
letra[theFirst].removeEventListener('click', flipCard);///regresa despues Y ESTUDIA LA FUNCTION ==== flipCard()
letra[theSecond].removeEventListener('click', flipCard);
Winner.push(theChosen);//// estas aqui
  }
    else {
letra[theFirst].setAttribute('src', 'images/blackpic.jpg');
letra[theSecond].setAttribute('src', 'images/blackpic.jpg');
alert('WRONG....TRY HARDER')
    }

    theChosen = [];
    cardSSN = [];
    theResults.textContent = Winner.length;
    if (Winner.length === Array.length/2) {
       theResults.textContent = "Congrats!! YOU have a GREAT MEMORY!!!!";
      
    }
}





//flip the cards

function flipCard() {
  let cardId = this.getAttribute('data-id');
  theChosen.push(Array[cardId].name);
  cardSSN.push(cardId);
  this.setAttribute('src', Array[cardId].img);
  if(theChosen.length ===2) {
    setTimeout(checkForMatch, 500);
  }
}

















createBoard();




