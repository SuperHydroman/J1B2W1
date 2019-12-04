var i = 0;
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadingScreenProgressBar");
    var width = 1;
    var id = setInterval(frame2, 100);
    var id = setInterval(frame2, 200);
    var id = setInterval(frame2, 300);
    var id = setInterval(frame2, 400);
    var id = setInterval(frame2, 500);
    var id = setInterval(frame2, 600);
    var id = setInterval(frame2, 700);
    var id = setInterval(frame2, 800);
    function frame2() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      }
      else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        elem.style.textAlign = "center";
      }
    }
  }
}