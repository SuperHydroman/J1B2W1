var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

for (var i = 0; i < arrayEen.length; i++) {
	document.writeln(arrayEen[i] + " + " + arrayTwee[i] + " = " + (arrayEen[i] + arrayTwee[i]) + "<br>");
}
document.write("<br>");
for (var i = 0; i < arrayEen.length; i++) {
	document.writeln(arrayTwee[i] + " - " + arrayEen[i] + " = " + (arrayTwee[i] - arrayEen[i]) + "<br>");
}
document.write("<br>");
for (var i = 0; i < arrayEen.length; i++) {
	document.writeln(arrayEen[i] + " * " + arrayTwee[i] + " = " + (arrayEen[i] * arrayTwee[i]) + "<br>");
}
document.write("<br>");
for (var i = 0; i < arrayEen.length; i++) {
	document.writeln(arrayTwee[i] + " / " + arrayEen[i] + " = " + (arrayTwee[i] / arrayEen[i]) + "<br>");
}
