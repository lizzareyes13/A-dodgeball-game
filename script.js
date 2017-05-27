// var girlObj = document.getElementById('girl').style;
// var xGirl = 0;
//
// document.onkeydown = KeyDownMoveIt;
//
// function KeyDownMoveIt(e){
//   if (e.keyCode == 39)
//   xGirl = xGirl + 10;
//
//   girlObj.left = xGirl;
// }


var girl = document.getElementById('girl');
var board = document.getElementById('board');

var charLeft = 0;
var charUp = 0;

function charMovement(e){
  // alert(e.keyCode);
// -------------------
  // LEFT ARROW >>>
  if(e.keyCode == 39){
    charLeft+=2;
    girl.style.left = charLeft + 'px';
    if(charLeft >=600){
      charLeft-=2;
    }
  }
  // RIGHT ARROW <<<
  if(e.keyCode == 37){
    charLeft-=2;
    girl.style.left = charLeft + 'px';
    if(charLeft <=0){
      charLeft +=2;
    }
  }
  // TOP ARROW ^^^
  if(e.keyCode == 38){
    charUp-=2;
    girl.style.top = charUp + 'px';
    if(charUp >= 600){
      charUp+=2;
    }
  }
  // BOTTOM ARROW vvv
  if(e.keyCode == 40){
    charUp+=2;
    girl.style.top = charUp +'px';
    if(charUp >= 600);
      charUp+=2;
  }
}

document.onkeydown = charMovement;
