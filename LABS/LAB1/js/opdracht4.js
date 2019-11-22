var tafels = [2, 4, 6, 8];

for (var i = 0; i < tafels.length; i++) {
	document.write("<h3>Tafel van " + tafels[i] + ":<br></h3>");
	for (var e = 1; e <= 10; e++) {
		document.write(e + " x " + tafels[i] + " = " + (tafels[i] * e) + "<br>");
	}
	document.write("<br><br>");
}