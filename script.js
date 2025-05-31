function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#"; //hex color value
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; //gets one of the 16 characters(0-15), 6 times.
  }
  return color;
}

// Initial start time.
var start = new Date().getTime();

//Set random values to left, top and both width & height in one.
function move() {
  var left;
  var top;
  var wh;
  left = Math.random() * 300;
  top = Math.random() * 300;
  wh = Math.random() * 400 + 100; //set min at 100.
  document.getElementById("shape").style.left = left + "px"; //Needs unit.
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.width = wh + "px";
  document.getElementById("shape").style.height = wh + "px";
  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
}

// move();
document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  alert(timeTaken);
  move();
};
