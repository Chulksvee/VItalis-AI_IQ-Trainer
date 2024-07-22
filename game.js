// Geting the dom using ids 
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('resultMessage');
const restartButton = document.getElementById('restartButton');
const guessNameInput = document.getElementById('guessName');
const contact = document.getElementById('contact');

// checking the number times a client clicks
    let secrectNumbers; 
    let userAttempt;
    let userName;

// generate a number between 1 to 50! by implementing the function
function startGame() {
    secrectNumbers = Math.floor(Math.random()* 15) + 1;
    userAttempt = 0;

    //to clear the result and input on the dom
    resultMessage.textContent = '';
    guessInput.value = '';

    // for the Name
    guessNameInput.value = '';
    guessNameInput.disabled = false;

    // to allow the button to display
    guessButton.disabled = false;
    restartButton.style.display = 'none';
    contact.style.display = 'block';

}startGame()

// Applying EventListener (anything can go in the function)

guessButton.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);
    console.log('you  have', userAttempt++);

    // For the Name
    userName = guessNameInput.value;

  // Ensure the user's name is provided
  if (!userName) {
    resultMessage.textContent = 'Please enter your Name';
    return;
    }

// Disable the name input field after the first guess
guessNameInput.disabled = true;


        //Check what the user is entering is a number or not
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 15) {
            resultMessage.textContent = (`Sorry ${userName}, (please enter a valid number between 1 and 20)`);
            contact.style.display = 'none';
            
        } else if (userGuess < secrectNumbers) {
            resultMessage.textContent = (`Sorry ${userName}, your guess is Low; Please try a Higher Number!, you are almost there!`)
            contact.style.display = 'none';

        } else if (userGuess > secrectNumbers ) {
            resultMessage.textContent = (`Sorry ${userName}, your guess is High; Please try a Lower Number!, you are almost there!`)
            contact.style.display = 'none';

        } else if (userAttempt >= 3) {
            resultMessage.textContent = (`Sorry ${userName},  you have reached the Maximum number of attempts. Please click on Restart Button to begin another attempt`);
            //to disable the button
            contact.style.display = 'none';
                guessButton.disabled = true;
                restartButton.style.display = 'block';
                return;
      

        } else {
            resultMessage.textContent = (`Congratulation!!! ${userName   +userGuess} is a perfect Match!. Your IQ level now is 282% beating YoungHoon Kim from South Korea with the total of 6%. KEEP IT UP ${userName}; (Pls restart and support the Developer by clicking on the Button below!)`);
            guessButton.disabled = true;
            restartButton.style.display = 'block';
            contact.style.display = 'none';
        }{
            
        }{
            
        }{
            
        }
    
})

// To activate the restartButton, we apply an EventListener to the Button
restartButton.addEventListener('click', function() {
    startGame();
})

    



