function tulostus()
{
  var x = parseInt(document.getElementById('numerosi').value);
  var z = "<p>";
  for(var i = 2; i <= x; i= i+2)
  {
    z+=i;
    z+=" ";
  }
  z+="</p>";
    document.getElementById('pari').innerHTML = z;
}

function salasanaksi()
{
  var a = document.getElementById('sanasi').value;
  var salainen = "<p>";
  for(var j = 0; j < a.length; j++)
  {
    salainen += a[j] + 'Ö';
  }
  salainen += "</p>";
  document.getElementById('salasana').innerHTML = salainen;
}

function tarkistus()
{
  var annettuSana = document.getElementById('onko').value;
  var vastaus = 'ei ole';
  for(var k = 0; k < annettuSana.length; k++)
  {
    if(annettuSana[k] == 'Ö' || annettuSana[k] == 'ö')
    {
      vastaus = 'on';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}


function laske()
{
  var kerLuku = document.getElementById('kertoma').value;
  var laskettu = 1;
  for(var z = 1; z <= kerLuku; z++)
  {
    laskettu*=z;
  }
  document.getElementById('vastaus').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}
function hipHeijaa()
{
  var print = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      print+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      print+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      print+='Hip ';
    }
    else {
      print+=y+' ';
    }
    document.getElementById('tulostaNe').innerHTML = print;
  }
}
function kymppi()
{
  var kym = '<p>';
  for(var e = 1; e <=10; e++)
  {
    kym += e + ' ';
  }
  kym += '</p>';
  document.getElementById('lukujenTulostus').innerHTML = kym;
}
function plus()
{
  yht = 0;
  for(var y = 1; y <=10; y++)
  {
    yht += y;
  }
  document.getElementById('luvut').innerHTML = '<p>'+ yht + '</p>';
}
function potenssi()
{
  var korotettava = document.getElementById('iso').value;
  var potenssi = document.getElementById('pieni').value;
  yht = korotettava;
  for(var p = 1; p < potenssi; p++)
  {
    yht *= korotettava;
  }
  document.getElementById('potenssiin').innerHTML = '<p>' + yht + '</p>';
}
function etsiSuurinPienin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
    //alert(taulu);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('lukujenTulostusT').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}

// Kopioin muutaman tehtävän sinulta kokonaan opettaja
//sillä en osannut tehdä. Yritin samalla sisäistää asioita.

function muokkaaSalasana()
{
  var pw = '';
  var eka, toka;
  pw = document.getElementById('salis').value;
  alert(pw);
  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'Ã¥', 'Ã¤', 'Ã¶', 'w'];
  var temp = [];
  var lop='';
  for(var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    //alert[pw];
    //alert[eka];
    temp.push(eka);
    //alert(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
    //alert(toka);
  }
  lop = temp.join('');
  document.getElementById('lukujenTulostusS').innerHTML = lop;
}
function llisettomat()
{
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById('pnro').value);
  nro2 = document.getElementById('inro').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
    //alert(pluvut + ' ' + psumma);
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('lukujenTulostusPari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
