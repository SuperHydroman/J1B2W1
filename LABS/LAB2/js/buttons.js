var amount = {button1:0, button2:0, button3:0};
var container = document.getElementById("container");
var numberedContainer = document.getElementById("picturedNumbers");

document.getElementById("button1").innerHTML = amount["button1"];
document.getElementById("button2").innerHTML = amount["button2"];
document.getElementById("button3").innerHTML = amount["button3"];


function countUp1() {
	amount["button1"]++;
	document.getElementById("button1").innerHTML = amount["button1"];
	container.style.background = "url(../img/bg1.jpg)";
	numberedContainer.style.background = "url(../img/1.jpg)";
	container.style.backgroundSize = "cover";
	numberedContainer.style.backgroundSize = "cover"; 
}
function countUp2() {
	amount["button2"]++;
	document.getElementById("button2").innerHTML = amount["button2"];
	container.style.background = "url(../img/bg2.jpg)";
	numberedContainer.style.background = "url(../img/2.jpg)";
	container.style.backgroundSize = "cover";
	numberedContainer.style.backgroundSize = "cover"; 
}
function countUp3() {
	amount["button3"]++;
	document.getElementById("button3").innerHTML = amount["button3"];
	container.style.background = "url(../img/bg3.jpg)";
	numberedContainer.style.background = "url(../img/3.jpg)";
	container.style.backgroundSize = "cover";
	numberedContainer.style.backgroundSize = "cover"; 
}