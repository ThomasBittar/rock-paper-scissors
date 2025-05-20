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

//Human choice


function getHumanChoice(){
    let check=0;
    let c=window.prompt("Type your choice : ROCK, PAPER, SCISSORS");
    c=c.toUpperCase();
    if(c=="ROCK"||c=="PAPER"||c=="SCISSORS"){
        check=1;
    }   //Check if the user gave a correct input
    while(check==0){
        c=window.prompt("Invalid input, please choose a word from the following list : ROCK, PAPER, SCISSORS");
        c=c.toUpperCase();
        if(c=="ROCK"||c=="PAPER"||c=="SCISSORS"){
            check=1;
        }   //Check if the user gave a correct input
    }
    return c;
}


//Comparing both choices


function playRound(humanChoice,computerChoice){
    let result=0;
    console.log("You played "+humanChoice+" while computer played "+computerChoice);
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
    else{
        console.log("You made a weird choice, the computer is confused now.");
    }
    return result;
}


//Main


function main(){
    let humanScore=0;
    let computerScore=0;
    let cC=0;
    let hC=0;
    let max=3;
    let result=4;
    while (humanScore<max && computerScore<max){
        cC=getComputerChoice();
        hC=getHumanChoice();
        result=playRound(hC,cC);
        switch (result){
            case 0:
                console.log("You play "+hC+" while the computer plays "+cC+". None of you wins.");
                console.log("Your current score is "+humanScore+" while the computer's is "+computerScore+".");
                break;
            case 1:
                console.log("You play "+hC+" while the computer plays "+cC+". You lose :(");
                computerScore++;
                console.log("Your current score is "+humanScore+" while the computer's is "+computerScore+".");
                break;
            case 2:
                console.log("You play "+hC+" while the computer plays "+cC+". You win! :D");
                humanScore++;
                console.log("Your current score is "+humanScore+" while the computer's is "+computerScore+".");
                break;
        }
    }
    if(humanScore==3){
        console.log("YOU WIN!!!! HOORAY!!");
    }
    else if(computerScore==3){
        console.log("YOU LOST!!!! HOW SAD!!");
    }
}


main();