const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const result = document.querySelector(".result")
const buttons = document.querySelectorAll("button")

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
    } else if (userChoice === "Rock" && compChoice === "Paper") {
        result.textContent =`${compChoice} beats ${userChoice}!`
    } else if (userChoice === "Paper" && compChoice === "Scissors") {
        result.textContent =`${compChoice} beats ${userChoice}!`
    } else if (userChoice === "Paper" && compChoice === "Rock") {
        result.textContent = `${userChoice} beats ${compChoice}!`
    } else if (userChoice === "Scissors" && compChoice === "Paper") {
        result.textContent = `${userChoice} beats ${compChoice}!`
    } else if (userChoice === "Scissors" && compChoice === "Rock") {
        result.textContent = `${compChoice} beats ${userChoice}!`
    }
}


function checkScore(score1, score2){
    if (score1 === 5 && score2 === 5){
        console.log("It's a draw!")
    }
    if (score1 === 5){
        console.log("You win!")
    }
    if (score2 === 5){
        console.log("You lose!")
    }
}
