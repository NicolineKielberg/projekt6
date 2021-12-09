//Xenia//
document.getElementById("knap").addEventListener("click", function(){
    document.querySelector(".container10").style.display="flex";
  })

  //kommentar - manglende pensum//
  //jeg har lavet en variabel og givet den en værdi som er et arrey. Arrey er objekter. Firkantet er et objekt//

  let juleønsker = ["mikroovn","apple watch","tinderbox","føntørrer","harman kardon højtaler"];

  for (var i = 0; i < juleønsker.length; i++) {
  console.log(juleønsker[i]);
  }

//Jeg har lavet en variabel og jeg har givet den en værdi som er en number. num (tal) er xenia//
  let a = 5;
  let b = 10;

  if (a > b) {
  console.log('xenia så dejlig');
    }else if (a < b) {
  console.log('xenia er ekstrem dejlig');
  }
   else {
  console.log('xenia er rigtig dejlig');
  }
