let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice")
 let winner=document.querySelector("#winner");
 let myScore=document.querySelector("#My-point");
 let hisScore=document.querySelector("#comp-point");



const genCompGame=()=>{
    const options=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];   
}
const drawGame=()=>{
    console.log("Game is Draw");
    winner.innerText="oops! Game was Draw";
    winner.style.backgroundColor="blue";
    
}
 
 
 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        myScore.innerText=userScore;
        winner.innerText=`Your ${userChoice} beats ${compChoice} !`;
        winner.style.backgroundColor="green";

    }else
    {compScore++;
        hisScore.innerText=compScore;
        winner.innerText=`His ${compChoice} beats your ${userChoice} !`;
        winner.style.backgroundColor="red";


    }}

const playGame=(userChoice)=>{
    console.log("Your choice is", userChoice);
    const compChoice=genCompGame();
    console.log("Computer choice is", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{let userWin=true;
        if(userChoice==="stone"){
            userWin=compChoice==="paper" ?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false :true; 
        }
        else{userWin=compChoice==="stone"?false:true;}
        showWinner(userWin,userChoice,compChoice);
        
    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})