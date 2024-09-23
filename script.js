let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

playerScore.innerText = localStorage.getItem('playerScore') || 0;
computerScore.innerText = localStorage.getItem('computerScore') || 0;

let playerChoice = '';

let iconsContainer = document.getElementsByClassName('icons-container')[0];
let rulesContainer = document.getElementsByClassName('rules-container')[0];

let resultContainer = document.getElementsByClassName('result-parent')[0];


let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


let playerWinner = document.querySelector("#player-chose")
let computerWinner = document.querySelector("#comp-chose")

let nextBtn = document.getElementById('next')


document.getElementById('rules').addEventListener('click', function() {
    rulesContainer.style.opacity = 1;
    rulesContainer.style.pointerEvents = 'all';
    rulesContainer.style.display = 'block';
})
document.getElementById('close').addEventListener('click', function() {
    console.log(rulesContainer)
    rulesContainer.style.display = 'none';

})

/********* GAME START **************/
rock.addEventListener('click', function() {
    playerChoice = 'rock';
    resultContainer.classList.remove('hide');
    iconsContainer.classList.add('hide');
    const compChoice = computerChoice();
    playGame(compChoice);
});
paper.addEventListener('click', function() {
    playerChoice = 'paper';
    resultContainer.classList.remove('hide');
    iconsContainer.classList.add('hide');
    const compChoice = computerChoice();
    playGame(compChoice);
});
scissors.addEventListener('click', function() {
    playerChoice = 'scissors';
    iconsContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    const compChoice = computerChoice(); 
    playGame(compChoice);
});

const playGame = (compChoice) => {
    let player = playerChoice;
    let computer = compChoice;
    playerWinner.classList.remove(`${player}`)
    computerWinner.classList.remove(`${computer}`)

    if(player==computer){
        tie(player,computer);
    }
    else if((player=='rock'&&computer=='scissors')||(player=='paper'&&computer=='rock')||(player=='scissors'&&computer=='paper'))
    {
        win(player,computer);
    }
    else if((player=='rock'&&computer=='paper')||(player=='paper'&&computer=='scissors')||(player=='scissors'&&computer=='rock'))
        {
            lose(player,computer);
        }

}

const computerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
const win = (playerChoice,compChoice) =>{
    let playerSelectedImg = document.getElementById('player-selected-img')
    let pcSelectedImg = document.getElementById('pc-selected-img')

    const status = document.querySelector('.game-status h2')
    status.textContent = "YOU WIN"
    playerSelectedImg.src = `/icons/images/${playerChoice}.png`
    pcSelectedImg.src = `/icons/images/${compChoice}.png`
    
    localStorage.setItem('playerScore', parseInt(playerScore.innerText) + 1)
    playerScore.innerText =  parseInt(playerScore.innerText) + 1
    playerWinner.classList.add(`${playerChoice}`)
    playerWinner.classList.add('pulse')
    computerWinner.classList.add(`${compChoice}`)

    console.log(playerScore, computerScore)
    nextBtn.classList.remove('hide')
}


const lose = (playerChoice,compChoice) =>{
    let playerSelectedImg = document.getElementById('player-selected-img')
    let pcSelectedImg = document.getElementById('pc-selected-img')

    const status =  document.querySelector('.game-status h2')
    status.textContent = "YOU LOST"

    playerSelectedImg.src = `/icons/images/${playerChoice}.png`
    pcSelectedImg.src = `/icons/images/${compChoice}.png`

    
    localStorage.setItem('computerScore', parseInt(computerScore.innerText) + 1)
    computerScore.innerText =  parseInt(computerScore.innerText) + 1
    playerWinner.classList.add(`${playerChoice}`)
    computerWinner.classList.add(`${compChoice}`)
    
    computerWinner.classList.add('pulse')

    
}
const tie = (playerChoice,compChoice) =>{
    let playerSelectedImg = document.getElementById('player-selected-img')
    let pcSelectedImg = document.getElementById('pc-selected-img')
    const status = document.querySelector('.game-status h2')
    status.textContent = "Tie up"


    playerSelectedImg.src = `/icons/images/${playerChoice}.png`
    pcSelectedImg.src = `/icons/images/${compChoice}.png`
    
    playerWinner.classList.add(`${playerChoice}`)
    computerWinner.classList.add(`${compChoice}`)

}
document.getElementById('play-again').addEventListener('click', function() {
    iconsContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    document.getElementsByClassName('final-container')[0].style.display = 'none'
    
    playerWinner.className = ""
    computerWinner.className = ""

    playerWinner.classList.add('icon')
    computerWinner.classList.add('icon')
    nextBtn.classList.add('hide')
    playerChoice = '';
    playerWinner.classList.remove('pulse')
})


nextBtn.addEventListener('click', function(){
    document.getElementsByClassName('score-display')[0].classList.add('hide')
    document.getElementsByClassName('result-parent')[0].classList.add('hide')
    document.getElementsByClassName('final-container')[0].style.display = 'block'
    
    nextBtn.classList.add('hide')
    rulesContainer.classList.add('hide')
    iconsContainer.classList.add('hide')
    console.log('next')
})


document.getElementById('again').addEventListener('click', function() {
    iconsContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    playerChoice = '';
    playerWinner.classList.remove('pulse')
    computerWinner.classList.remove('pulse')
    document.getElementsByClassName('score-display')[0].classList.remove('hide')
    document.getElementsByClassName('result-parent')[0].classList.add('hide')
    document.getElementsByClassName('final-container')[0].style.display = 'none'

    playerScore.innerText = localStorage.getItem('playerScore') || 0;
    computerScore.innerText = localStorage.getItem('computerScore') || 0;
    console.log('play again')
})