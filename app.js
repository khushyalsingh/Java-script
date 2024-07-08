let userScore=0
let compScore=0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorepara=document.querySelector("#user-score")
const compScorepara=document.querySelector("#comp-score")

const genCompChoice = ()=>{
    const options =["rock","paper","scissor"]
   const randIdx= Math.floor(Math.random()*3)
   return options[randIdx];
}

const drawGame = ()=>{
msg.innerText = "game was draw"
msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin,Userchoice,comchoice)=>{
if(userWin){
   userScore++;
   userScorepara.innerText = userScore;
  
    msg.innerText = `you win ! your ${Userchoice} beats ${comchoice}`;
    msg.style.backgroundColor ="green"
}else{
    compScore++;
    compScorepara.innerText = compScore;

    msg.innerText = `you lose your ${Userchoice} beats ${comchoice}`;
    msg.style.backgroundColor ="red"
}
}

const playGame=(Userchoice)=>{
 console.log("user choice =",Userchoice);
 const comchoice = genCompChoice();
 console.log("comp choice =",comchoice);
 if(Userchoice === comchoice){
    drawGame();
 }else{
    let userWin = true;
    if(Userchoice ==="rock"){
        userWin=comchoice ==="paper" ?false:true; 
    }else if(Userchoice ==="paper"){
        userWin= comchoice ==="scissors"? false:true;
    }else{
        userWin = comchoice ==="rock"? false:true;
    }
    showWinner(userWin,Userchoice,comchoice);
 }
};

choices.forEach((choice) =>{
choice.addEventListener("click",()=>{
const Userchoice=choice.getAttribute("id")
playGame(Userchoice);
});
});