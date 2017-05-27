var girlObj = document.getElementById('girl').style;
var xGirl = 0;

document.onkeydown = KeyDownMoveIt;

function KeyDownMoveIt(e){
  if (e.keyCode == 39)
  xGirl = xGirl + 10;

  girlObj.left = xGirl;
}


// var girl = document.getElementById('girl');
// var board = document.getElementById('board');
//
// function anim(e){
//   alert(e.keyCode);
// }
//
// document.onkeydown = anim;
