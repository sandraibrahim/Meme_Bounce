
//context.width = window.innerWidth*(.75);
//context.height = window.innerHeight*(.85);
var canvas = document.createElement("CANVAS");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(20, 20, 150, 100);
document.body.appendChild(canvas);
