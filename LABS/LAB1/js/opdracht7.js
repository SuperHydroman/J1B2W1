var amounts = {frisAmount:0, bierAmount:0, wijnAmount:0, achtBitterBallenAmount:0, zestienBitterBallenAmount:0};

var frisTotal = 0;
var frisPrijs = 2.37;

var bierTotal = 0;
var bierPrijs = 4.12;

var wijnTotal = 0;
var wijnPrijs = 8.23;

var achtBitterBallenTotal = 0;
var achtBitterBallenPrijs = 3.20;

var zestienBitterBallenTotal = 0;
var zestienBitterBallenPrijs = 5.40;

var totalPrice = 0;

// Deze functie neemt je bestelling van de drankjes op.
function startofOrder(keuze) {
    if (keuze === "fris") {
        amounts["frisAmount"] = parseInt(prompt("Hoeveel " + keuze + " wilt u bestellen?"));
        console.log(keuze + " x " + amounts["frisAmount"]);
        frisTotal = frisTotal + amounts["frisAmount"];
        // frisTotal += amounts["frisAmount"];
        startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks | Snacks. Als u niks meer wil bestellen, dan typet u: \"stop\" ").toLowerCase());
    }
    else if (keuze === "bier") {
        amounts["bierAmount"] = parseInt(prompt("Hoeveel " + keuze + " wilt u bestellen?"));
        console.log(keuze + " x " + amounts["bierAmount"]);
        bierTotal = bierTotal + amounts["bierAmount"];
        // bierTotal += amounts["bierAmount"];
        startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ").toLowerCase());
    }
    else if (keuze === "wijn") {
        amounts["wijnAmount"] = parseInt(prompt("Hoeveel " + keuze + " wilt u bestellen?"));
        console.log(keuze + " x " + amounts["wijnAmount"]);
        wijnTotal = wijnTotal + amounts["wijnAmount"];
        // wijnTotal += amounts["wijnAmount"];
        startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ").toLowerCase());
    }
    else if (keuze === "snacks") {
      snacksOrder(parseInt(prompt("Hoeveel bitterballen wilt u toevoegen? 8 bitterballen | 16 bitterballen")));
    }
    else if (keuze === "stop") {
      alert("De rekening word uitgeprint!");
      checkout();
    }
    else if (keuze === "") {
      alert("U dient een keuze te maken uit 1 van de volgende dranken: Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ");
      startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ").toLowerCase());
    }
    else {
      alert("Dit is geen geldige invoer, probeer wat anders. Kies een drankje uit de lijst");
      startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ").toLowerCase());
    }
}

// Deze functie neemt je bestelling van de snacks op.
function snacksOrder(snack) {
  if (snack === 8) {
    amounts["achtBitterballenAmount"] = parseInt(prompt("Hoeveel bitterbalschalen van " + snack + " stuks wilt u bestellen?"));
    console.log("U heeft " + amounts["achtBitterballenAmount"] + " schalen van " + snack + " bitterballen besteld, en zijn toegevoegd aan de bestelling");
    achtBitterBallenTotal = achtBitterBallenTotal + amounts["achtBitterballenAmount"];
    startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ").toLowerCase());
  }
  else if (snack === 16) {
    amounts["zestienBitterBallenAmount"] = parseInt(prompt("Hoeveel bitterbalschalen van " + snack + " stuks wilt u bestellen?"));
    console.log("U heeft " + amounts["zestienBitterBallenAmount"] + " schalen van " + snack + " bitterballen besteld, en zijn toegevoegd aan de bestelling");
    zestienBitterBallenTotal = zestienBitterBallenTotal + amounts["zestienBitterBallenAmount"];
    startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ").toLowerCase());
  }
  else if (snack != 8 || snack != 16) {
    alert("U kunt alleen kiezen tussen schalen van 8 of 16 bitterballen");
    snacksOrder(parseInt(prompt("Hoeveel bitterballen wilt u toevoegen? 8 bitterballen | 16 bitterballen")));
  }
}

// Deze functie berekent alle prijzen en het totaal bedrag.
function checkout() {
  // Prijzen van de drankjes worden hier berekent.
  frisPrijs = frisPrijs * frisTotal;
  bierPrijs = bierPrijs * bierTotal;
  wijnPrijs = wijnPrijs * wijnTotal;

  // Prijzen van de bitterbal schalen worden hier berekent
  achtBitterBallenPrijs = achtBitterBallenPrijs * achtBitterBallenTotal;
  zestienBitterBallenPrijs = zestienBitterBallenPrijs * zestienBitterBallenTotal;

  document.write("<h1>Uw bestelling: </h1>")

  // Drinken gedeelte in de checkout functie
  if (frisTotal > 0 || bierTotal > 0 || wijnTotal > 0) {
    document.write("<h3>Drinken: </h3>");
  }
  else {}
  if (frisTotal > 0) {
    document.write(frisTotal + " x " + " fris &nbsp;&nbsp;............................................. &euro; " + frisPrijs.toFixed(2) + "<br>");
  }
  else {}
  if (bierTotal > 0) {
    document.write(bierTotal + " x " + " bier &nbsp;............................................. &euro; " + bierPrijs.toFixed(2) + "<br>");
  }
  else {}
  if (wijnTotal > 0) {
    document.write(wijnTotal + " x " + " wijn ............................................. &euro; " + wijnPrijs.toFixed(2) + "<br>");
  }
  else {}

  // Snacks gedeelte van de checkout functie
  if (achtBitterBallenTotal > 0 || zestienBitterBallenTotal > 0) {
    document.write("<h3>Eten: </h3>");
  }
  else {}
  if (achtBitterBallenTotal > 0) {
    document.write(achtBitterBallenTotal + " x " + " bitterbalschaal van 8 stuks &nbsp;......... &euro; " + achtBitterBallenPrijs.toFixed(2) + "<br>");
  }
  else {}
  if (zestienBitterBallenTotal > 0) {
    document.write(zestienBitterBallenTotal + " x " + " bitterbalschaal van 16 &nbsp;&nbsp;&nbsp;.............. &euro; " + zestienBitterBallenPrijs.toFixed(2) + "<br>");
  }
  else{}

  // Totaal prijs berekenen in de checkout functie
  totalPrice = totalPrice + frisPrijs + bierPrijs + wijnPrijs + achtBitterBallenPrijs + zestienBitterBallenPrijs;

  if (totalPrice === 0) {
    document.write("U heeft niks op uw bestelling staan.");
  }
  else {
    document.write("-------------------------------------------------------- <br>")
    document.write("Totaal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro; " + totalPrice.toFixed(2));
  }
}

// startOfOrder(prompt("Wat wilt u bestellen? Drinken | Snacks").toLowerCase());

startofOrder(prompt("Wat wilt u bestellen? Fris | Bier | Wijn | Snacks. Als u niks meer wil bestellen, type dan: \"stop\" ").toLowerCase());
