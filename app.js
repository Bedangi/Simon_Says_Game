let gameseq=[];
let userseq=[];

let btns=["red","yellow","blue","green"];

let started= false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }  
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },150);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },150);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let  userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}