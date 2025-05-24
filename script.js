const rck=document.querySelector(".rock");
const ppr=document.querySelector(".paper");
const ssr=document.querySelector(".scissors");
const results=document.querySelector(".results");
let humanScore=0;
let computerScore=0;

console.log("Hey! Welcome to a new Rock-Paper-Scissors game!"); //Greeting the player

//Random computer choice


function getComputerChoice(){
    let c=Math.random();
    c=c*3;  //c becomes a random number greater or equal to 0 and smaller than 3.
    c=Math.floor(c);    //c becomes equal to 0, 1 or 2
    switch(c){
        case 0:
            return "ROCK";
            break;
        case 1: 
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}


//Comparing both choices


function playRound(humanChoice){
    let result=0;
    let computerChoice=getComputerChoice();
    if(humanChoice=="ROCK"){
        switch(computerChoice){
            case "ROCK":
                result=0;
                break;
            case "PAPER":
                result=1;
                break;
            case "SCISSORS":
                result=2;
                break;
        }

    }
    else if(humanChoice=="PAPER"){
        switch(computerChoice){
            case "ROCK":
                result=2;
                break;
            case "PAPER":
                result=0;
                break;
            case "SCISSORS":
                result=1;
                break;
        }

    }
    else if(humanChoice=="SCISSORS"){
        switch(computerChoice){
            case "ROCK":
                result=1;
                break;
            case "PAPER":
                result=2;
                break;
            case "SCISSORS":
                result=0;
                break;
        }

    }
    switch(result){
        case 0:
            results.textContent="You played "+humanChoice+" while computer played "+computerChoice;
            results.innerHTML+="<br>Nobody wins.<br>The current score is :<br>You : "+humanScore+"<br>Computer : "+computerScore;
            break;
        case 1:
            computerScore++;
            results.textContent="You played "+humanChoice+" while computer played "+computerChoice;
            results.innerHTML+="<br>Computer wins.<br>The current score is :<br>You : "+humanScore+"<br>Computer : "+computerScore;
            break;
        case 2:
            humanScore++;
            results.textContent="You played "+humanChoice+" while computer played "+computerChoice;
            results.innerHTML+="<br>Human wins.<br>The current score is :<br>You : "+humanScore+"<br>Computer : "+computerScore;
            break;
    }
    if (humanScore>=5){
            results.innerHTML+=" YOU WIN !!!!!";
            rck.setAttribute("style","display: none;");
            ppr.setAttribute("style","display: none;");
            ssr.setAttribute("style","display: none;");
    }
    else if(computerScore>=5){
            results.innerHTML+=" YOU LOST !!!!!";
            rck.setAttribute("style","display: none;");
            ppr.setAttribute("style","display: none;");
            ssr.setAttribute("style","display: none;");
    }
}


//Event listeners


rck.addEventListener("click",() => playRound("ROCK"));
ppr.addEventListener("click",() => playRound("PAPER"));
ssr.addEventListener("click",() => playRound("SCISSORS"));
