//Tehtävä 1 järjestä numerot
function jarjesta()
{
var x, y, z;
x = parseInt(document.getElementById("eka").value);
y = parseInt(document.getElementById("toka").value);
z = parseInt(document.getElementById("kolmas").value);

if ((x<y)&&(x<z))
    {
         if (y<z)
                {
            document.write("Järjestys on: " + x + " " + y + " " + z);
          }
        else {
            document.write("Järjestys on: " + x + " " + z + " " + y);
                }
    }

else if ((y<z)&&(y<x))
    {

        if (z<x)
                {
            document.write("Järjestys on: " + y + " " + x + " " + z);
                  }
        else {
            document.write("Järjestys on: " + y + " " + z + " " + x);
                }
    }

else if ((z<x)&&(z<y))
    {

        if (x<y)
                {
            document.write("Järjestys on: " + z + " " + x + " " + y);
                  }
        else {
            document.write("Järjestys on: " + z + " " + y + " " + x);
                }
    }
}

//tehtävä kaksi suurin luku

function suurin()
{
  var a, b, c, d, e
    a = parseInt(document.getElementById("ma").value);
    b = parseInt(document.getElementById("ti").value);
    c = parseInt(document.getElementById("ke").value);
    d = parseInt(document.getElementById("to").value);
    e = parseInt(document.getElementById("pe").value);

  if((a>b)&&(a>c)&&(a>d)&&(a>e)) {
        document.write("Suurin luku on: " + a);
      }
          else if ((b>a)&&(b>c)&&(b>d)&&(b>e)) {
          document.write("Suurin luku on: " + b);
        }
          else if ((c>a)&&(c>b)&&(c>d)&&(c>e)) {
        document.write("Suurin luku on: " + c);
        }
        else if ((d>a)&&(d>b)&&(d>c)&&(d>e)) {
          document.write("Suurin luku on: " + d);
        }
        else if ((e>a)&&(e>b)&&(e>c)&&(e>d)) {
          document.write("Suurin luku on: " + e);
        }
}

// tehtävä kolme onko luku parillinen vai ei


function parillinenko() {

    var luku1 = parseInt(document.getElementById("pari").value);

    if(luku1 % 2 === 0) {
      document.write("Parillinen");
  }
    else {
      document.write("Pariton");
}
}

// Tehtävä 4 ikäkysymys

function ikakysymys() {

    var ikasi = parseInt(document.getElementById("ika").value);

    if(ikasi < 15) {
      document.write("Polkupyörällä");
    }
    else if(ikasi < 18) {
      document.write("Mopolla");
    }
    else {
      document.write("Autolla");
    }
}

// Tehtävä 5 Kielen kääntö

function kaanna()
  {
    var language = document.getElementById("kieli").value;
    if(language == "ger")
    {
      document.write("Ich liebe dich");
    }
    else if(language == "eng")
    {
      document.write("I love you");
    }
    else {
      document.write("Anh yêu em");
    }
  }
