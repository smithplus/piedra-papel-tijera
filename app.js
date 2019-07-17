let UserScore = 0;
let ComputerScore = 0;
const UserScore_span = document.getElementById("user-score");
const ComputerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {

    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(letter) {
    if (letter === "r") return "Piedra";
    if (letter === "p") return "Papel";
    if (letter === "s") return "Tijera";
}


function win(UserChoice, ComputerChoice){
    const UserChoice_div = document.getElementById(UserChoice);
    UserScore++;
    UserScore_span.innerHTML= UserScore;
    ComputerScore_span.innerHTML = ComputerScore;
    result_p.innerHTML = `${convertToWord(UserChoice)} gana ante ${convertToWord(ComputerChoice)}. Tu ganas!`;
    
    UserChoice_div.classList.add('green-glow');
    
    setTimeout(() => UserChoice_div.classList.remove('green-glow'), 300);

}

function lose(UserChoice, ComputerChoice){
    const UserChoice_div = document.getElementById(UserChoice);
    ComputerScore++;
    UserScore_span.innerHTML= UserScore;
    ComputerScore_span.innerHTML = ComputerScore;
    result_p.innerHTML = `${convertToWord(UserChoice)} pierde ante ${convertToWord(ComputerChoice)}. Tu pierdes!`;
    
    UserChoice_div.classList.add('red-glow');
    
    setTimeout(() => UserChoice_div.classList.remove('red-glow'), 300);
    
}

function draw(UserChoice, ComputerChoice){
    const UserChoice_div = document.getElementById(UserChoice);
    UserScore_span.innerHTML= UserScore;
    ComputerScore_span.innerHTML = ComputerScore;
    result_p.innerHTML = `${convertToWord(UserChoice)} es igual ${convertToWord(ComputerChoice)}. Es un empate!`;
    UserChoice_div.classList.add('gray-glow');
    
    setTimeout(() => UserChoice_div.classList.remove('gray-glow'), 300);
    
}

function game(UserChoice) {
    const ComputerChoice = getComputerChoice();
    switch (UserChoice + ComputerChoice){
        case "rs":
        case "pr":
        case "sp": 
            win(UserChoice, ComputerChoice);
            break;
        case "sp":
        case "ps":
        case "sr":
            lose(UserChoice, ComputerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(UserChoice, ComputerChoice);
            break
    }

}


function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}


main();
