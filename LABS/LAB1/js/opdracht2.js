var namen = [];

function howMany(amount) {
	if (amount < 3) {
		alert("U dient minimaal 3 namen toe te voegen.");
		howMany(parseInt(prompt("Hoeveel namen wilt u toevoegen? (Minimaal 3)")));
	}
	else {
		document.write("<h2>De ingevoerde namen in de array zijn: </h2>");
		for (var i = 0; i < amount; i++) {
			namen.push(prompt("Welke naam wilt u toevoegen?").toLowerCase());
			console.log(namen);
		}
		document.writeln(namen.join("<br>"));
		namen.reverse();
		document.write("<br><br>");
		document.write("<h2>De ingevoerde namen in de array in omgekeerde volgorde zijn: </h2>");
		document.writeln(namen.join("<br>"));
	}
}



howMany(parseInt(prompt("Hoeveel namen wilt u toevoegen? (Minimaal 3)")));