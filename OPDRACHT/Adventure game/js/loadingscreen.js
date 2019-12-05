var i = 0;
function move2() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadingScreenProgressBar");
    var width = 1;
    var id = setInterval(frame2, 1000);
    var id = setInterval(frame2, 500);
    var id = setInterval(frame2, 750);
    var id = setInterval(frame2, 120);
    var id = setInterval(frame2, 1200);

    function frame2() {
      if (width >= 100) {
        elem.innerHTML = "LOADED!";
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