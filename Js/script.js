// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

// Main game function
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerHTML = `
        <p>You chose: <strong>${userChoice}</strong></p>
        <p>Computer chose: <strong>${computerChoice}</strong></p>
        <p>${resultMessage}</p>
    `;
}

// Event listeners for buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));