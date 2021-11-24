const square= $('.square');
const mole= $('.mole');
const timeleft= $('#time-left');

let score= $('#score');

let result=0;
let currentTime= timeleft.textContent

function randomSquare(){
  square.forEach(className => {className.classList.remove('mole');
  });
  let randomPosition= square[Math.floor(Math.random()*9)]
  randomPosition.classList.add('mole');
  //assign id to random position to hit position
  hitPosition= randomPosition.id
}

square.forEach(block =>{block.addEventlistener('mouseup',()=>
  {if (block.id===hitPosition){
    result= result +1 
    score.textContent= result
  }}
  )}
  )

  function moveMole(){
    let timerID=null;
    timerID=setInterval(randomSquare,1000)
  }
moveMole();

  //Countdown timer
  // function countDown(){
  //   currentTime--
  //   timeleft.textcontent= currentTime
    
  //   if(currentTime===0){
  //     clearInterval(timerID);
  //     alert('Game Over! Your final score is'+ result)
  //   }
  // }

  // let timerID= setInterval(countDown,1000)