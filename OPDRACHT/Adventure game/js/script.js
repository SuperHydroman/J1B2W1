var bgChanger = document.getElementById("container");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var invItem = document.getElementById("item");
var title = document.getElementById("title");
var desc = document.getElementById("description");
var progressbar = document.getElementById("myProgress");
var loadingScreenBar = document.getElementById("loadingScreenProgress");
var audio = document.getElementById("my_audio");

var items = {key:false, sledgehammer:false, saw:false, gun:false, ammo:false};
var hordeKilled = false;

invItem.style.visibility = "hidden";
progressbar.style.visibility = "hidden";
loadingScreenBar.style.visibility = "hidden";
invItem.onclick = onItemPickUp;

button2.onclick = startGame;
button2.style.position = "absolute";
button2.style.top = "40px";
button2.style.left = "40px";

function startGame() {
    playAudio();
    setTimeout(function() {
        bgChanger.style.background = "none";
        bgChanger.style.backgroundColor = "white";
        bgChanger.style.backgroundSize = "cover";

        title.innerHTML = "LOADING..."

        desc.style.visibility = "hidden";

        loadingScreenBar.style.visibility = "visible";
        loadingScreenBar.style.position = "absolute";
        loadingScreenBar.style.top = "39%";
        loadingScreenBar.style.left = "50%";
        loadingScreenBar.style.transform = "translate(-50%, -50%)";
        
        move2();

        button2.style.visibility = "hidden";
    }, 800);
    setTimeout(function() {
        desc.style.fontSize = "90%";
        loadingScreenBar.style.visibility = "hidden";
        loadLevel1();
    }, 9000);
}

function loadLevel1() {
    bgChanger.style.background = "url(../img/Zombie_chase.jpg) grey fixed";
    bgChanger.style.backgroundSize = "cover";

    invItem.style.visibility = "hidden";

    title.style.visibility = "hidden";

    desc.style.visibility = "hidden";

    button1.style.visibility = "visible";
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

    if (hordeKilled == false) {
        button1.innerHTML = "Attack the horde!";
    }
    else { 
        button1.innerHTML = "Search for more loot?";
    }

    if (items["sledgehammer"] && items["saw"] == true) {
        button1.onclick = preLoadLevel6;
    }
    else {
        button1.onclick = youDied;
    }

    button3.onclick = loadLevel2;
}

function loadLevel2() {
    bgChanger.style.background = "url(../img/Abandoned_Subway.jpg) grey fixed";
    bgChanger.style.backgroundSize = "cover";

    invItem.style.visibility = "hidden";

    button1.style.position = "absolute";
    button1.style.top = "831px";
    button1.style.left = "154px";
    button1.style.visibility = "visible";

    button2.style.visibility = "visible";

    button3.style.visibility = "visible";

    button1.innerHTML = "Explore Train";
    button2.innerHTML =  "<i class=\"fas fa-arrow-left\"></i>" + " Leave subway station";
    button3.innerHTML = "Get to the streets " + "<i class=\"fas fa-arrow-right\"></i>";

    button1.onclick = loadLevel4;
    button2.onclick = loadLevel1;
    button3.onclick = loadLevel3;
}
    
function loadLevel3() {
    bgChanger.style.background = "url(../img/zombie-street.jpg) grey fixed";
    bgChanger.style.backgroundSize = "cover";

    desc.style.visibility = "hidden";

    if (items["saw"] == false) {
        invItem.style.visibility = "visible";
        invItem.src = "../items/saw.png";
        invItem.style.position = "absolute";
        invItem.style.width = "80px";
        invItem.style.filter = "grayscale(0) blur(9px)";
        invItem.style.bottom = "190px";
        invItem.style.left = "19px";
        invItem.id = "saw";
    }


    button1.style.top = "776px";
    button1.style.left = "746px";
    button1.style.visibility = "visible";

    button2.style.visibility = "visible";

    button3.style.visibility = "visible";
    button3.style.cursor = "pointer";
    button3.style.color = "black";
    button3.style.position = "absolute";
    button3.style.bottom = "20px";
    button3.style.right = "20px";
    button3.style.top = "inherit";

    button1.innerHTML = "Take highway to desert<br>" + "<i class=\"fas fa-arrow-down\"></i>";
    button2.innerHTML = "<i class=\"fas fa-arrow-left\"></i>" + " Go back to subway station";
    button3.innerHTML = "Look for a hospital";

    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;

    button1.onclick = loadLevel8;
    button2.onclick = loadLevel2;
    button3.onclick = loadLevel5;
}

function loadLevel4() {
    bgChanger.style.background = "url(../img/trian-inside.jpg) grey fixed";

    if (items["sledgehammer"] == false) {
        invItem.style.filter = "none";
        invItem.id = "sledgehammer";
        invItem.src = "../items/sledgehammer.png";
        invItem.style.visibility = "visible";
        invItem.style.width = "100px";
        invItem.style.position = "absolute";
        invItem.style.top = "72%";
        invItem.style.left = "47%";
        invItem.style.height = "36px";
    }
    else{}
    
    button1.style.visibility = "hidden";
    
    button3.style.visibility = "hidden";

    button2.innerHTML = "<i class=\"fas fa-arrow-left\"></i>" + " Go back!";

    button2.onclick = loadLevel2;
}

function loadLevel5() {
        bgChanger.style.background = "url(../img/hospital2.jpg)";
        bgChanger.style.backgroundSize = "cover";
        
        desc.style.color = "#8A0303";
        invItem.style.visibility = "hidden";

        button1.style.visibility = "hidden";

        button2.innerHTML = "<i class=\"fas fa-arrow-left\"></i>" + " Go back!";
        button3.innerHTML = "Get inside";

        button2.onclick = loadLevel3;

    if (items["key"] == false) {
        button3.disabled = true;
        button3.style.color = "grey";
        button3.style.cursor = "not-allowed";
        desc.style.fontSize = "90%";
        desc.style.visibility = "visible";
        desc.innerHTML = "You need a key to enter the hospital";
        desc.style.top = "8%";

    }
    else {
        button3.disabled = false;
        button3.style.color = "black";
        button3.style.cursor = "pointer";
        desc.style.fontSize = "90%";
        desc.style.visibility = "visible";
        desc.innerHTML = "You need a key to enter the hospital";
        desc.style.top = "8%";
        button3.onclick = loadLevel7;
    }
}

function preLoadLevel6() {
    if (hordeKilled == false) {
        setTimeout(function() {
            pauseAudio();
            audio.src = "../audio/craftingSoundEffect.mp3";
            audio.load();
            audio.removeAttribute("loop");
            playAudio();
            bgChanger.style.background = "url(../img/sledgesaw.png)";
            bgChanger.style.backgroundSize = "cover";

            desc.style.fontSize = "90%";
            desc.style.visibility = "visible";
            desc.innerHTML = "You are crafting a Sledge Saw!";

            progressbar.style.visibility = "visible";
            progressbar.style.position = "absolute";
            progressbar.style.top = "39%";
            progressbar.style.left = "50%";
            progressbar.style.transform = "translate(-50%, -50%)";

            move();

            button1.style.visibility = "hidden";

            button3.style.visibility = "hidden";
        }, 800);
        setTimeout(function() {
            progressbar.style.visibility = "hidden";
            hordeKilled = true;
            loadLevel6();
            pauseAudio();
            audio.src = "../audio/The-Walking-Dead-Full-Theme-Song.mp3";
            audio.load();
            playAudio();
        }, 6000);
        setTimeout(function() {
            desc.style.fontSize = "90%";
            desc.innerHTML = "The weapon was super strong and you killed all the zombies with it!";
            // setInterval(function() {
            //     desc.style.fontSize = "90%";
            //     desc.style.color = "white";
            // }, 500);
            // setInterval(function() {
            //     desc.style.fontSize = "90%";
            //     desc.style.color = "#8A0303";
            // }, 1000);
            progressbar.style.visibility = "hidden";
        }, 6600);
    }
    else {
        loadLevel6();
    }
}

function loadLevel6() {
    bgChanger.style.background = "url(../img/zombie-horde-killed.jpg)";
    bgChanger.style.backgroundSize = "cover";
    if (items["gun"]) {
        invItem.src = "../items/ammo.png";
        invItem.id = "ammo";
        invItem.style.visibility = "visible";
        invItem.style.position = "absolute";
        invItem.style.top = "28%";
        invItem.style.left= "757px";
        invItem.style.width = "51px";
        invItem.style.height = "35px";
        invItem.style.filter = "none";
    }
    else {
        invItem.src = "../items/key.png";
        invItem.id = "key";
        invItem.style.visibility = "visible";
        invItem.style.position = "absolute";
        invItem.style.top = "93%";
        invItem.style.left= "600px";
        invItem.style.width = "100px";
        invItem.style.height = "36px";
        invItem.style.filter = "none";

        desc.style.fontSize = "90%";
    }

    button2.innerHTML = "<i class=\"fas fa-arrow-left\"></i>" + " Go back!";

    button1.style.visibility = "hidden";
    button2.style.visibility = "visible";
    button3.style.visibility = "hidden";

    button2.onclick = loadLevel1;
}

function loadLevel7() {
    bgChanger.style.background = "url(../img/hospital.jpg)";
    bgChanger.style.backgroundSize = "cover";

    invItem.id = "gun";
    invItem.style.filter = "none";
    invItem.src = "../items/m4.png";
    invItem.style.position = "absolute";
    invItem.style.width = "193px";
    invItem.style.height = "80px";
    invItem.style.left = "884px";
    invItem.style.bottom = "232px";
    invItem.style.top = "inherit";
    invItem.style.transform = "rotate(-10deg)";
    invItem.style.visibility = "visible";
    invItem.style.position = "absolute";
}

function loadLevel8() {
    bgChanger.style.background = "url(../img/desert_highway.jpg)";
    bgChanger.style.backgroundSize = "cover";

    invItem.style.visibility = "hidden";

    button1.style.left = "824px";

    button2.style.visibility = "hidden";

    button3.style.right = "852px";
    button3.style.top = "15px";
    button3.style.bottom = "inherit";

    button1.innerHTML = "Return to the city!<br>" + "<i class=\"fas fa-arrow-down\"></i>";
    button3.innerHTML = "<i class=\"fas fa-arrow-up\"></i><br>" + "Drive further!";

    button1.onclick = loadLevel3;
    button3.onclick = pauseAudio && loadLevel9;
}

function loadLevel9() {
    bgChanger.style.background = "url(../img/area51.jpg)";
    bgChanger.style.backgroundSize = "cover";
    if (items["gun"] && items["ammo"]) {
        button1.style.visibility = "visible";
        button1.style.opacity = "0";
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
        youWon();
    }
    else {
        title.style.visibility = "visible";
        title.innerHTML = "You got shot by the US Army";
        youDied();
    }
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

function youWon() {
    title.style.position = "absolute";
    title.style.top = "40%";
    title.style.left = "50%";
    title.style.visibility = "visible";
    title.innerHTML = "You won!! You destroyed the secret lab, AREA 51. That was making a zombie VIRUS!! " + "<i id=\"biohazardLogo\" class=\"fas fa-biohazard\"></i>";
    document.getElementById("biohazardLogo").style.color = "#8A0303";
    audio.src = "../audio/Victory.mp3";
    audio.load();
    playAudio();
    audio.removeAttribute("loop");


}

// Controlling the audio
function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

// Checks the if the item is picked up or not.
function onItemPickUp() {
    invItem.style.visibility = "hidden";
    items[this.id] = true;
    console.log("I picked up the " + this.id);
}