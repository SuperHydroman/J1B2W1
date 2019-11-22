var getallen = [];

var test = parseInt(prompt("Vul een getal in"));

for (var i = 0; i <= test; i++) {
	getallen.push(i);
	document.write(getallen.join("") + "<br>")
}