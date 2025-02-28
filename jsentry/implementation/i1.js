//variable decrearation and assigning of the variablble to the visible part of the website or components of the website
//
let userScore=0;
let compScore=0;
//we use document.queryselector as primitve , we can also do the same job using document.getElementbyId or getElementbyClass but since .queryselector can get access to anything by the name they are assigned to or just the name of the saman , we use document .queryselector
 
 let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const genCompChoice = ()=>
{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const  drawGame = ()=>{
    console.log("game was draw");
    msg.innerText="that was a draw";
    msg.style.backgroundColor="yellow";
  };

const showWinner= (userWin) =>{
    if(userWin){
        console.log("you win!!");
        msg.innerText="you win"; 
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText= userScore;
    }

    else{
        console.log("you lose!!");
        msg.innerText="you lose";
        msg.style.backgroundColor = "black";
        compScore++;
        compScorePara.innerText=compScore;
    }
};


 const playGame = (userChoice) => {
     console.log("user choice=  ", userChoice);
     //function is create like usually using an arrow function which is in the case of shraddha mam which means that it is the thing that i will be using the most too because she is a proper industry pofessional who has actually worked at a good company

     const compChoice= genCompChoice();
     console.log("computer choice=",compChoice);

     if(userChoice === compChoice)
     {
      drawGame();
     }
     else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice ==="paper" ?false :true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice ==="scissors"?false:true;
        }
        else
        {
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin);
     } 
     };


 
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        
        const userChoice =choice.getAttribute("id");
        
        playGame(userChoice);
    });
});