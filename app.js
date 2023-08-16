let timer = 60;
let score = 0;
let hitrn = 0;


function makeBubble() {
    let clutter = "";
    for (let i = 0; i < 168; i++) {
        let rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
    console.log(clutter)
}

function runTimer(){
        let timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer
        }
        else{
            clearInterval(timer)
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER! </h1> <h1>Your Total Score is ${score}</h1>`;
        }
    },1000)
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn
}

function increaseScore(){
    score+=10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",
function (dets){
    let clickedNum=Number((dets.target.textContent))
    if(clickedNum === hitrn){
        makeBubble()
        increaseScore()
        getNewHit()
    }
})

makeBubble()
runTimer()
getNewHit()


function newBubble() {
    let gameno=""
    for (let i = 0; i < 168; i++) {
        let rn = Math.floor(Math.random() * 10)
        gameno += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = gameno;
}


const startAgain=() =>{
    timer = 60;
    score = 0;
    hitrn = 0;
           
    newBubble()
    document.querySelector("#timervalue").textContent = timer
    document.querySelector("#hitvalue").textContent = hitrn
    document.querySelector("#scorevalue").textContent = score;
}





