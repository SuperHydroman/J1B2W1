var bgChanger = document.getElementById("container");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button2.onclick = loadLevel1;
button2.style.position = "absolute";
button2.style.top = "40px";
button2.style.left = "40px";

function loadLevel1() {
    bgChanger.style.background = "url(../img/Zombie_chase.jpg) grey fixed";
    bgChanger.style.backgroundSize = "cover";
    button1.style.visibility = "visible";
    button1.innerHTML = "Attack the horde!";
    button1.style.position = "absolute";
    button1.style.top = "500px";
    button1.style.left = "800px";

    button2.style.visibility = "hidden";

    button3.style.visibility = "inline";
    button3.innerHTML = "Run for your life " + "<i class=\"fas fa-arrow-right\"></i>";
    button3.style.position = "absolute";
    button3.style.visibility = "visible";
    button3.style.bottom = "20px";
    button3.style.right = "20px";

    button1.onclick = youDied;
    button3.onclick = loadLevel2;
}

function loadLevel2() {
    bgChanger.style.background = "url(../img/Abandoned_Subway.jpg) grey fixed";
    bgChanger.style.backgroundSize = "cover";
    button1.innerHTML = "Explore Train";
    button1.style.position = "absolute";
    button1.style.top = "831px";
    button1.style.left = "154px";

    button2.style.visibility = "visible";
    button2.innerHTML =  "<i class=\"fas fa-arrow-left\"></i>" + " Go back";

    button3.innerHTML = "Go back to the streets " + "<i class=\"fas fa-arrow-right\"></i>";

    button1.onclick = loadLevel4;
    button3.onclick = loadLevel3;
}

function loadLevel3() {
    bgChanger.style.background = "url(../img/zombie-street.jpg) grey fixed";
    bgChanger.style.backgroundSize = "cover";
}

function loadLevel4() {
    bgChanger.style.background = "url(../img/trian-inside.jpg) grey fixed";
}

function reloadPage() {
    window.location.reload();
}

function youDied() {
    bgChanger.style.background = "url(../img/You_Died.jpg) black fixed";
    bgChanger.style.backgroundSize = "cover";
    button1.style.top = "initial";
    button1.style.left = "initial";
    button1.innerHTML = "Play again?";
    button1.classList.add("deadButtonPosition");
    button2.style.visibility = "hidden";
    button3.style.visibility = "hidden";

    button1.onclick = reloadPage;
}