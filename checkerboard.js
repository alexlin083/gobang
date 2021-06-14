function checkerboard() {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  //劃格線 15*15 每格50
  for (let i = 0; i < 15; i++) {
    let interval = i * 50;

    //水平線
    context.moveTo(0, interval);
    context.lineTo(canvas.width, interval);
    context.fillText(interval, 0, interval);

    //垂直線
    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.width);
    context.fillText(interval, interval, 10);
  }
  context.strokeStyle = "rgba(0,0,0,0.3)";
  context.stroke();
}
window.addEventListener("load", checkerboard);

//true代表白棋下的子，false是黑子
let flag = true;
