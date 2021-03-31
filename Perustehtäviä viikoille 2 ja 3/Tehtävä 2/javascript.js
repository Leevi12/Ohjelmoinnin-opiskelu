//ensimmäinen

function positiv()
{

var x = parseInt(document.getElementById("numerosi").value);

if (x >= 0)
{
  document.write("Numerosi on positiivinen");
}
else {
  document.write("Numerosi on negatiivinen");
}
}

// toinen

function paiva() {

  var a = parseInt(document.getElementById("vkonum").value);

  if (a === 1) {
    document.write("Maanantai");
  }
  else if (a === 2) {
    document.write("Tiistai");
  }
  else if (a === 3) {
    document.write("Keskiviikko");
  }
  else if (a === 4) {
    document.write("Torstai");
  }
  else if (a === 5) {
    document.write("Perjantai");
  }
  else if (a === 6) {
    document.write("Lauantai");
  }
  else if (a === 7) {
    document.write("Sunnuntai");
  }
  else {
    document.write("Anna numerosi väliltä 1-7");
    }
}

//kolmas

function karkaus() {

  var b = parseInt(document.getElementById("syntyma").value);

  if (b % 4 === 0 && b %100 > 0)
  {
    document.write("Syntymävuotesi on karkausvuosi");
  }
  else if (b % 400 === 0) {
    document.write("Syntymävuotesi on karkausvuosi");
  }
  else {
    document.write("Syntymävuotesi ei ole karkausvuosi");
  }
}

//neljäs

function laskut() {

  var a, b, c, d, e
    a = parseInt(document.getElementById("eka").value);
    b = parseInt(document.getElementById("toka").value);
    c = parseInt(document.getElementById("kolmas").value);
    d = parseInt(document.getElementById("neljas").value);
    e = parseInt(document.getElementById("viides").value);

    document.write(a + b + c + d + e + " On näiden lukujen summa" + "<br>");
    document.write((a + b + c + d + e) / 5 + " On näiden lukujen keskiarvo");
}

//viides

function luku () {
  var p = parseInt(document.getElementById("luku1").value);

  document.write("Lukusi on: " + p * 1 + "<br>");
  document.write("Tuplattuna lukusi on: " + p * 2 + "<br>");
  document.write("Kymmenkertaistettuna lukusi on: " + p * 10);
}
