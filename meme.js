
var x = document.createElement("CANVAS");
var ctx = x.getContext("2d");
x.width = window.innerWidth;
x.height = window.innerHeight;
function draw() {
  ctx.beginPath();
  ctx.arc(50, 50, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);
