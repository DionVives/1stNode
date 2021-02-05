function geboorteNaarGroep(datum) {
  var groep = datum%7+1;

  switch (groep) {
    case 1:
      eenTeskt = "Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen.";
      break;
    case 2:
      eenTeskt = "Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.";
      break;
    case 3:
      eenTeskt = "Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting.";
      break;
    case 4:
      eenTeskt = "ThuHet is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.rsday";
      break;
    case 5:
      eenTeskt = "Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud.";
      break;
    case 6:
      eenTeskt = "Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot wat het tot min of meer leesbaar nederlands maakt.";
      break;
    case 7:
      eenTeskt = "Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst";
      break;
  }

    console.log('Je groep is : '+groep+' '+eenTeskt);
    return groep;
}

// function getGroep() {
//   return geboorteNaarGroep();
// }

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Wat is je geboortedatum JJJJMMDD? ', geboorteDatum => {
    geboorteNaarGroep(geboorteDatum);
    readline.close();
  });


