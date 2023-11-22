let randomNumber = Math.floor(Math.random()*100+1)
const guessField = document.querySelector('#guessfield')
const submit = document.querySelector('#submit')
const guessesSlot = document.querySelector('#guesses')
const remaining = document.querySelector('#lastResult')
const lowOrHigh = document.querySelector('#lowOrHigh')
const startOver = document.querySelector('#resultParams')
console.log(randomNumber);

const p = document.createElement('p')

let prevguesses = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
       e.preventDefault();
      const guess =  parseInt(guessField.value);
      validateGuess(guess)
    })
}

function validateGuess(guess) {
   if(isNaN(guess)){
    return alert("Not a valid number")
   } else if(guess < 0){
      alert("The number should not be less than 1 ")
   } else if(guess > 100){
       alert("The number should not be more than 100 ")
     } else{
      prevguesses.push(guess);
      if(numGuess===11){
         displayGuess(guess)
         displayMessage(`Game Over : Random Number was ${randomNumber}`)
         endGame()
      }else{
         displayGuess(guess)
      }
     }
   checkGuess(guess)
}

function checkGuess(guess) {
  if(guess===randomNumber){
   endGame()
     displayMessage(`You Guessed it right `)
    
  } else if(guess<randomNumber){
   displayMessage(`The number is too low`)
  }else if(guess>randomNumber){
   displayMessage(`The number is too high`)
  }
}

function displayGuess(guess) {
   guessField.value = ""
   guessesSlot.innerHTML += `${guess}    `
   numGuess++;
   remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
   lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
   guessField.value = ''
   guessField.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
   startOver.appendChild(p)
   playGame = false
   prevguesses = []
   numGuess = 1
   newGame()
}

function newGame(){
  const newGameBtn =  document.querySelector('#newGame');
  newGameBtn.addEventListener('click',(e)=>{
 randomNumber = Math.floor(Math.random()*100+1)
 prevguesses = []
 numGuess = 1
 guessesSlot.innerHTML = ``;
 remaining.innerHTML = `${11-numGuess}`
 guessField.removeAttribute('disabled')
 startOver.removeChild(p)
 playGame= true
  })

}