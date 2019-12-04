var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 50);
        console.log(width + "% crafting progress");
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      }
      else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        console.log(width + "% crafting progress");
        elem.style.textAlign = "center";
      }
    }
  }
}