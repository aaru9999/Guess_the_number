
let guessValue=document.querySelector("#guessValue");
let prevGuess=document.querySelector("#prevGuess");
let container=document.querySelector(".main-section");
let gameResult=document.querySelector("#gameResult");
let randomNum;
let counter=0;

function randomNumGenerator(){
    return Math.floor(Math.random()*100)+1;
}

//removing () this after fun gameStat and gameResatr as by removing () you are allowing fun to run only after button is clicked
document.addEventListener("DOMContentLoaded",function(){
    randomNum=randomNumGenerator();
    console.log(randomNum)
    document.querySelector("#submitButton").addEventListener("click", gameStart
    )
    document.querySelector("#restartGame").addEventListener("click", gameRestart
    )
})


const gameStart=()=>{
        document.querySelector(".hidden").style.display="block";
        prevGuess.innerHTML+=guessValue.value + " "
        container.style.height="350px"
        const guessInput=parseInt(guessValue.value,10);
        if(randomNum==guessInput){
            gameResult.innerHTML="You guessed it right!!"
            gameResult.style.color="green"
        }
        else if(randomNum>guessInput){
            gameResult.innerHTML="Your guess is too low!"
            gameResult.style.color="orange"
        }
        else if(randomNum<guessInput){
            gameResult.innerHTML="Your guess is too high!"
            gameResult.style.color="purple"
        }
        guessValue.value="";
        counter+=1;
        if(counter===10){
            gameResult.innerHTML="Game Over!!"
            gameResult.style.color="red"
            guessValue.disabled=true;
        }
}

const gameRestart=()=>{
        randomNum=randomNumGenerator();
        console.log(randomNum)
        gameResult.innerHTML=""
        document.querySelector(".hidden").style.
        display="none";
        prevGuess.innerHTML=""
        container.style.height="13rem";
        guessValue.disabled=false;
        counter=0;
}

