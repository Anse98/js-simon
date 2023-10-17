

//////////////////////////////// FUNZIONI //////////////////////////////////////

//FUNZIONE CHE MI GENERA UN NUMERO CASUALE NEL RANGE SCELTO
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//FUNZIONE CHE CHIEDE ALL'UTENTE DI INSERIRE UN NUMERO TOT VOLTE
function askForNumbers(num) {
  for (let i = 0; i < num; i++) {
    userNum = parseInt(prompt("Inserisci i numeri che ti ricordi"));
    userNums.push(userNum);
  }
}

// FUNZIONE CHE MI STAMPA IN OUTPUT NELL'HTML I NUMERI RANDOM,I NUMERI INSERITI DALL'UTENTE E IL PUNTEGGIO
function showTheComparison() {
  for (let i = 0; i < userNums.length; i++) {

    if (userNums.includes(randomNums[i])) {

      equalNums.push(randomNums[i]);

    }
  }

  if (equalNums.length !== 0) {

    outputDOMElement.innerHTML = `I numeri azzeccati sono ${equalNums.length} e sono ${equalNums}`;

  } else {

    outputDOMElement.innerHTML = `Non hai azzeccato nessun numero!`;

  }
}

// FUNZIONE CHE MI CREA UN ARRAY DI NUMERI CASUALI
function createArrayOfRandomNums(array, num) {
  
  // FINCHE la lunghezza dell'array è minore del numero esegui il codice
  while (array.length < num) {

    // Mi salvo in una variabile un numero random da 1 a 100
    const randomNum = getRandomInt(1, 100);

    //SE non è già nell'array, vado a pushare il numero
    if (array.includes(randomNum) === false) {

      //Pusho nell'array i numeri generati
      array.push(randomNum);
    }
  }
}

// FUNZIONE CHE MI FA IL CONTO ALLA ROVESCIA 
function startGame() {

  count--;

  // Il contenuto dell'elemento del DOM con la classe countdown parte da count(30)
  timerDOMElement.innerHTML = count;

  // I numeri nel timer diventano rossi dal 10 in giu 
  if(count <= 10) {
    timerDOMElement.classList.add("clr-red");
  }

  //Quando arriva a 0 si ferma
  if (count === 0) {

    clearInterval(timer);

    // Chiedo all'utente 5 volte il numero da inserire e pusho nell'array i numeri inseriti
    askForNumbers(5);

    //Stampo in html quali erano i numeri random
    randomNumDOMElement.innerHTML = `${randomNums}`;

    //Stampo in html quali erano i numeri inseriti dall'utente
    userNumDOMElement.innerHTML = `${userNums}`;

    //Confronto i risultati e stampo l'output nell'html
    showTheComparison();

  }
}

/////////////////////////// FINE  FUNZIONI /////////////////////////////////////

// Vado a prendermi dal DOM l'elemento dove stampare il countdown
const timerDOMElement = document.getElementById("countdown");

// Vado a prendermi dal DOM l'elemento dove stampare i numeri random
const randomNumDOMElement = document.getElementById("random-numbers");

// Vado a prendermi dal DOM l'elemento dove stampare il countdown
const userNumDOMElement = document.getElementById("user-numbers");

// Vado a prendermi dal DOM l'elemento dove stampare il countdown
const outputDOMElement = document.getElementById("output");

// Mi creo un array dove andrò a pushare i 5 numeri casuali
const randomNums = [];

// Mi creo un array che avrà i numeri inseriti dall'utente
const userNums = [];

// Array che si riempe solo di numeri uguali
const equalNums = [];

// Numero che inserirà l'utente
let userNum;

// Fisso una variabile count che parte da 30
let count = 30;

// Faccio partire il timer dal 30
timerDOMElement.innerHTML = count;


//Creo i 5 numeri random dentro un array
createArrayOfRandomNums(randomNums, 5);

// Mostro all'utente l'array con i 5 numeri generati in precedenza 
alert(`Memorizza questi numeri : ${randomNums} `);


// Avvia il timer, genera i numeri, mostrali all'utente, avvia il timer e chiedi all'utente di ricordarli per poi stampare il punteggio
const timer = setInterval(startGame, 1000);













