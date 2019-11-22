var dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

var container = document.getElementById("container");
var test = document.createElement("H2");
test.innerHTML = "Alle dagen van de week zijn: ";
container.appendChild(test);


var test = document.createElement("UL");
test.id = "list1";
container.appendChild(test);

for (var i = 0; i < dagen.length; i++) {
  var container = document.getElementById("list1");
  var test = document.createElement("LI");
  test.innerHTML = dagen[i];
  container.appendChild(test);
}

var container = document.getElementById("container");
var test = document.createElement("H2");
test.innerHTML = "De werkdagen zijn: ";
container.appendChild(test);

var test = document.createElement("UL");
test.id = "list2";
container.appendChild(test);

for (var i = 0; i < dagen.length-2; i++) {
  	var container = document.getElementById("list2");
	var li_2 = document.createElement("LI");
	li_2.innerHTML = dagen[i];
	container.appendChild(li_2);
}

var container = document.getElementById("container");
var test = document.createElement("H2");
test.innerHTML = "De weekenddagen zijn: ";
container.appendChild(test);

var test = document.createElement("UL");
test.id = "list3";
container.appendChild(test);

var container = document.getElementById("list3");
var li_3 = document.createElement("LI");
li_3.innerHTML = dagen.splice(5, 7);
container.appendChild(li_3);

dagen.push("zaterdag", "zondag");

var container = document.getElementById("container");
var test = document.createElement("H2");
test.innerHTML = "Alle dagen van de week in omgekeerde volgerde zijn: ";
container.appendChild(test);

var test = document.createElement("UL");
test.id = "list4";
container.appendChild(test);
dagen.reverse();

for (var e = 0; e < dagen.length; e++) {
  	var container = document.getElementById("list4");
	var li_4 = document.createElement("LI");
	li_4.innerHTML = dagen[e];
	container.appendChild(li_4);
}

var container = document.getElementById("container");
var test = document.createElement("H2");
test.innerHTML = "De werkdagen in omgekeerde volgerde zijn: ";
container.appendChild(test);

var test = document.createElement("UL");
test.id = "list5";
container.appendChild(test);

for (var i = 2; i < dagen.length; i++) {
  	var container = document.getElementById("list5");
	var li_5 = document.createElement("LI");
	li_5.innerHTML = dagen[i];
	container.appendChild(li_5);
}

var container = document.getElementById("container");
var test = document.createElement("H2");
test.innerHTML = "De weekenddagen in omgekeerde volgerde zijn: ";
container.appendChild(test);

var test = document.createElement("UL");
test.id = "list6";
container.appendChild(test);

for (var i = 0; i < dagen.length-5; i++) {
  	var container = document.getElementById("list6");
	var li_6 = document.createElement("LI");
	li_6.innerHTML = dagen[i];
	container.appendChild(li_6);
}