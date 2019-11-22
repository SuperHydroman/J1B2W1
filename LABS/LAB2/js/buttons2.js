var amount = {button1:0, button2:0, button3:0};
var container = document.getElementById("container");
var numberedContainer = document.getElementById("picturedNumbers");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");

btn1.innerHTML = amount["button1"];
btn2.innerHTML = amount["button2"];
btn3.innerHTML = amount["button3"];


function countUp1() {
	amount["button1"]++;
	btn1.innerHTML = amount["button1"];
	btn1.disabled = true;
	btn2.disabled = false;
	btn3.disabled = false;
	btn1.style.backgroundColor = "red";
	btn2.style.backgroundColor = "#82cc82";
	btn3.style.backgroundColor = "#82cc82";
	container.style.background = "url(../img/bg1.jpg)";
	numberedContainer.style.background = "url(../img/1.jpg)";
	container.style.backgroundSize = "cover";
	numberedContainer.style.backgroundSize = "cover"; 
}
function countUp2() {
	amount["button2"]++;
	btn2.innerHTML = amount["button2"];
	btn1.disabled = false;
	btn2.disabled = true;
	btn3.disabled = false;
	btn1.style.backgroundColor = "#82cc82";
	btn2.style.backgroundColor = "red";
	btn3.style.backgroundColor = "#82cc82";
	container.style.background = "url(../img/bg2.jpg)";
	numberedContainer.style.background = "url(../img/2.jpg)";
	container.style.backgroundSize = "cover";
	numberedContainer.style.backgroundSize = "cover"; 
}
function countUp3() {
	amount["button3"]++;
	btn3.innerHTML = amount["button3"];
	btn1.disabled = false;
	btn2.disabled = false;
	btn3.disabled = true;
	btn1.style.backgroundColor = "#82cc82";
	btn2.style.backgroundColor = "#82cc82";
	btn3.style.backgroundColor = "red";
	container.style.background = "url(../img/bg3.jpg)";
	numberedContainer.style.background = "url(../img/3.jpg)";
	container.style.backgroundSize = "cover";
	numberedContainer.style.backgroundSize = "cover"; 
}