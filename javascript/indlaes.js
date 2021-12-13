//Xenia//
//dom - jeg kalder et dom objekt som gør at vi kan tilgå elementer på html siden.
//derefter kalder jeg på eventlistener, og det gør at vi kan attach specifikke elementer på siden. Dette tilgår en klikfunktion.
//I funktionen udløses diven der indeholder content der bliver vist, når funktionen bliver klikket.
//query selector = det gør at man kan returnere elementer der matcher et specifikt element (class container10)
//getElementById = kalder specifikt kun på id.
//style.display er flex, da jeg gerne vil have at indholdet bliver vist fra container diven 10.

document.getElementById("knap").addEventListener("click", function(){
    document.querySelector(".container10").style.display="flex";
  })

//i css er der blevet sat en style.dispoly property til at være none, så når siden loader på browseren
// bliver content fra (div container10) ikke vist, før click functionen bliver triggert.

//kommentar - manglende pensum//
//jeg har lavet en variabel og givet den en værdi som er et arrey objek Firkantet er et objekt//
// har jeg indsat 5 elemnter som er i datatypen string.


 //pensum
  let juleønsker = ["mikroovn","apple watch","tinderbox","føntørrer","harman kardon højtaler"];

//loop jeg igennem din liste.
// jeg laver en variabel som jeg giver værdien 0, da jeg gerne ville have at listen starter looped på place 0 i arraylisten
// looper igennem mit arrays længe, fra pladsen 0.
// hver gang den looper printer den elemnter fra din liste ud i consolen.
//i repræsenterer alle elementerne i mit arrey

  for (var i = 0; i < juleønsker.length; i++) {
  console.log(juleønsker[i]);
  }

//Jeg har lavet en variabel og jeg har givet den en værdi som er en number. num (tal) er xenia//
  let a = 5;
  let b = 10;

  if (a > b) {
  console.log('xenia er sjov'); //printer datatypen string ud som er 'xenia så dejlig'

    }else if (a < b) {
  console.log('xenia er ekstrem sjov');
  }
   else { //hvis andet så skal den printe ......
  console.log('xenia er ikke sjov');
  }
