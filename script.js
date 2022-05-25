const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const result = document.querySelector(".result")
const buttons = document.querySelectorAll("button")
const win = document.querySelector(".win")
const lose = document.querySelector(".lose")
const btnContainer = document.querySelector(".btn-container")
const resultSection = document.querySelector(".result-section")
const body = document.querySelector("body")


let wins = 0
let loses = 0

buttons.forEach(button => {
    button.addEventListener("transitionend", function(){
        button.classList.remove("active")
    })
})

rock.addEventListener("click", function(){
    rock.classList.add("active")
    const input= "Rock"
    playGame(input)
})

paper.addEventListener("click", function(){
    paper.classList.add("active")
    const input= "Paper"
    playGame(input)
})

scissors.addEventListener("click", function(){
    scissors.classList.add("active")
    const input= "Scissors"
    playGame(input)
})


function computerPlay() {
    const randInt = Math.floor(Math.random() * 3) + 1
    
    if (randInt === 1) {
        return "Rock"
    } else if (randInt === 2){
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playGame(input) {
    let userChoice = input
    let compChoice = computerPlay()

    if (userChoice === compChoice){
        result.textContent = "It's a draw!!!"
    } else if (userChoice === "Rock" && compChoice === "Scissors") {
        result.textContent = `${userChoice} beats ${compChoice}!`
        incrementWins()
        updateWins()
        checkScore(wins,loses)
    } else if (userChoice === "Rock" && compChoice === "Paper") {
        result.textContent =`${compChoice} beats ${userChoice}!`
        incrementLoses()
        updateLoses()
        checkScore(wins,loses)
    } else if (userChoice === "Paper" && compChoice === "Scissors") {
        result.textContent =`${compChoice} beats ${userChoice}!`
        incrementLoses()
        updateLoses()
        checkScore(wins,loses)
    } else if (userChoice === "Paper" && compChoice === "Rock") {
        result.textContent = `${userChoice} beats ${compChoice}!`
        incrementWins()
        updateWins()
        checkScore(wins,loses)
    } else if (userChoice === "Scissors" && compChoice === "Paper") {
        result.textContent = `${userChoice} beats ${compChoice}!`
        incrementWins()
        updateWins()
        checkScore(wins,loses)
    } else if (userChoice === "Scissors" && compChoice === "Rock") {
        result.textContent = `${compChoice} beats ${userChoice}!`
        incrementLoses()
        updateLoses()
        checkScore(wins,loses)
    }
}


function checkScore(score1, score2){
    if (score1 === 5 && score2 === 5){
        console.log("It's a draw!")
        gameOver(1)
    }
    if (score1 === 5){
        console.log("You win!")
        gameOver(2)
    }
    if (score2 === 5){
        console.log("You lose!")
        gameOver(3)
    }
}

function incrementWins(){
    wins++
}

function incrementLoses(){
    loses++
}

function updateWins(){
    win.textContent = `Win: ${wins}`
}

function updateLoses(){
    lose.textContent = `Lose: ${loses}`
}


function gameOver(option) {
    resultSection.style.display = "none"
    btnContainer.style.display = "none"
    const para = document.createElement("p")
    const tryAgainBtn = document.createElement("button")

    if (option === 1){
        para.style.cssText = "color: yellow; font-size: 6rem; font-weight: bold;"
        para.textContent = "It's a draw!"
    }
    if (option === 2){
        para.style.cssText = "color: green; font-size: 6rem; font-weight: bold"
        para.textContent = "You win!"
    }
    if (option === 3){
        para.style.cssText = "color: red; font-size: 6rem; font-weight: bold"
        para.textContent = "You lose!"
    }

    tryAgainBtn.textContent = "Try again"
    body.appendChild(para)
    body.appendChild(tryAgainBtn)

    tryAgainBtn.addEventListener("click", function(){
        tryAgainBtn.classList.add("active")
        reset()
    })

    function reset() {
        wins = 0
        loses = 0
    
        body.removeChild(para)
        body.removeChild(tryAgainBtn)
    
        resultSection.style.display = "flex"
        btnContainer.style.display = "block"
        result.textContent = ""
        updateLoses()
        updateWins()
        buttons.forEach(btn => {
            btn.classList.remove("active")
        })
    }
}
