function countDown(startingNumber) {
  let currentNumber = startingNumber;

  while (currentNumber >= 0) {
    console.log(currentNumber);
    currentNumber--;
  }
}


function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return thankYouMessages;
  }
  
