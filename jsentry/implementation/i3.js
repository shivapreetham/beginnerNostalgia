let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector(".msg");

let turnO=true;//playerX and playerO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame=()=>
{
    turnO=true;
    
    msgcontainer.classList.add("hide");
    for(let box of boxes)
    {
        box.disabed=false;
        box.innerText="";
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const showWinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

checkWinner=()=>
{
    for(let pattern of winPatterns){
          let p1=  boxes[pattern[0]].innerText;
          let p2=  boxes[pattern[1]].innerText;  
          let p3=  boxes[pattern[2]].innerText;

          if(p1!=""&&p2!=""&&p3!="") {
            if(p1==p2&&p1==p3)
            {console.log("winner!!",p1);
            
            showWinner(p1);
          }
          }
    }
}

reset.addEventListener("click", resetGame);