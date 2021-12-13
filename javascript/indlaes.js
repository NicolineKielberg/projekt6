document.getElementById("knap").addEventListener("click", function () {
  document.querySelector(".container10").style.display = "flex";
})

//pensum
let juleønsker = ["mikroovn", "apple watch", "tinderbox", "føntørrer", "harman kardon højtaler"];

for (var i = 0; i < juleønsker.length; i++) {
  console.log(juleønsker[i]);
}

//Jeg har lavet en variabel og jeg har givet den en værdi som er en number. num (tal) er xenia//
let a = 5;
let b = 10;

if (a > b) {
  console.log('xenia er sjov'); //printer datatypen string ud som er 'xenia så dejlig'

} else if (a < b) {
  console.log('xenia er ekstrem sjov');
}
else { //hvis andet så skal den printe ......
  console.log('xenia er ikke sjov');
}
