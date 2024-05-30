user_score=0
comp_score=0
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let user = document.querySelector("#us");
let computer = document.querySelector("#cs");

const genCompChoice=()=>
{
    const options=["rock","paper","scissor"];
    let c=Math.floor(Math.random()*3);
    return options[c];
};

const drawGame=()=>
{
    msg.innerText="It's draw";
    msg.style.backgroundColor="black";
};

const showWinner=(userWin,userChoice,compChoice)=>
{
    console.log(userWin);
    if(userWin)
    {
        user_score++;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        user.innerText=user_score;
    }
    else{
        comp_score++;
        msg.innerText=`You lost.  ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";
        computer.innerText=comp_score;
    }
};

const gamePlay=(userChoice)=>
{
    const compChoice=genCompChoice();
    let win=true;
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        if(userChoice==="rock")
        {
            win=(compChoice==="paper")?false:true;
            console.log(win);
        }
        else if(userChoice==="paper")
        {
            win=(compChoice==="scissor")?false:true;
        }
        else{
            win=(compChoice==="rock")?false:true;
        }
        showWinner(win,userChoice,compChoice);
    }
};

choices.forEach((userCho)=>{
    userCho.addEventListener("click",()=>{
        const userChoice=userCho.getAttribute("id");
        gamePlay(userChoice);
    });
});