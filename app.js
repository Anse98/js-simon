

//////////////////////////////// FUNZIONI //////////////////////////////////////

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


/////////////////////////// FINE  FUNZIONI /////////////////////////////////////

// Visualizzare in pagina 5 numeri casuali


// Mi creo un array dove andrò a pushare i 5 numeri casuali
const randomNums = [];

while (randomNums.length < 5) {

  // Mi salvo in una variabile un numero random da 1 a 100
  const randomNum = getRandomInt(1, 100);

  //SE non è già nell'array, vado a pushare il numero
  if (randomNums.includes(randomNum) === false) {

    //Pusho nell'array i numeri generati
    randomNums.push(randomNum)
  }
}

console.log(randomNums)



