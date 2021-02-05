// function verdeelInGroep(datum) {
//     var groep = datum % 10;


//     console.log(groep)
// }

// verdeelInGroep(prompt("Geef uw geboorte datum. JJJJMMDD: "));


// function geboorteDatum(datum) {
//     return datum;
// }

function indeling(datum) {
    var groep = datum%7+1;
    console.log("Je zit in groep "+groep);
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Wat is je geboortedatum JJJJMMDD? ', geboorteDatum => {
    indeling(geboorteDatum);
    readline.close();
  });
