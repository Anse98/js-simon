

//////////////////////////////// FUNZIONI //////////////////////////////////////

//FUNZIONE CHE MI GENERA UN NUMERO CASUALE NEL RANGE SCELTO
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// FUNZIONE CHE MI FA IL CONTO ALLA ROVESCIA 
function doCountdown() {

  count--;

  // Vado a stampare nell'html il countdown
  timerDOMElement.innerHTML = count;

  //Quando arriva a 0 si ferma
  if (count === 0) {

    clearInterval(timer);

    // Chiedo all'utente 5 volte il numero da inserire e pusho nell'array i numeri inseriti
    for (let i = 0; i < randomNums.length; i++) {
      userNum = parseInt(prompt("Inserisci i numeri che ti ricordi"));
      userNums.push(userNum);
    }


    randomNumDOMElement.innerHTML = `${randomNums} `;

    userNumDOMElement.innerHTML = `${userNums}`;

    for (let i = 0; i < userNums.length; i++) {

      if (userNums.includes(randomNums[i])) {

        equalNums.push(randomNums[i]);

      }
    }

    if (equalNums.length !== 0) {

      outputDOMElement.innerHTML =`I numeri azzeccati sono ${equalNums.length} e sono ${equalNums}`;

    } else {

      outputDOMElement.innerHTML = `Non hai azzeccato nessun numero!`;

    }
  }
}

/////////////////////////// FINE  FUNZIONI /////////////////////////////////////


// Mi creo un array dove andrò a pushare i 5 numeri casuali
const randomNums = [];

// Mi creo un array che avrà i numeri inseriti dall'utente
const userNums = [];

// Array che si riempe solo di numeri uguali
const equalNums = [];

// Numero che inserirà l'utente
let userNum;

// Vado a prendermi dal DOM l'elemento dove stampare il countdown
const timerDOMElement = document.getElementById("countdown");

// Vado a prendermi dal DOM l'elemento dove stampare i numeri random
const randomNumDOMElement = document.getElementById("random-numbers");

// Vado a prendermi dal DOM l'elemento dove stampare il countdown
const userNumDOMElement = document.getElementById("user-numbers");

// Vado a prendermi dal DOM l'elemento dove stampare il countdown
const outputDOMElement = document.getElementById("output");



// Fisso una variabile count che parte da 30
let count = 30;

// Il contenuto di p nel DOM parte da 30
timerDOMElement.innerHTML = count;


while (randomNums.length < 5) {

  // Mi salvo in una variabile un numero random da 1 a 100
  const randomNum = getRandomInt(1, 100);

  //SE non è già nell'array, vado a pushare il numero
  if (randomNums.includes(randomNum) === false) {

    //Pusho nell'array i numeri generati
    randomNums.push(randomNum)
  }
}


// Mostro all'utente i 5 numeri  
alert(`Memorizza questi numeri : ${randomNums} `);


const timer = setInterval(doCountdown, 1000);













