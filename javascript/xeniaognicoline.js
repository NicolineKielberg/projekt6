//xenia 
document.getElementById("knap").addEventListener("click", function () {
  document.querySelector(".container10").style.display = "flex";
})

//pensum
let juleønsker = ["mikroovn", "apple watch", "tinderbox", "føntørrer", "harman kardon højtaler"];


for (var i = 0; i < juleønsker.length; i++) {
  console.log(juleønsker[i]);
}

let a = 5;
let b = 10;

if (a > b) {
  console.log('xenia er sjov');

} else if (a < b) {
  console.log('xenia er ekstremt sjov');
}
else {
  console.log('xenia er ikke sjov');
}




// Nicoline
document.getElementById("grid__btn2").addEventListener("click", function () {
  document.querySelector(".tilmeldpopup").style.display = "flex";
})

document.getElementById("tilmeldpopup-kryds").addEventListener("click", function () {
  document.querySelector(".tilmeldpopup").style.display = "none";
})


var juleliste = ['Ganni hue', 'New balance sko', 'Ganni hoodie', 'Kay Bojesen'];


for (var i = 0; i < juleliste.length; i++) {
  console.log(juleliste[i]);
}

var c = 20;
var d = 20;

if (c < d) {
  console.log('jeg får de gaver jeg ønsker mig');
}
else if (c > d) {
  console.log('Jeg får ikke de gaver jeg øsnker mig');
}
else {
  console.log('jeg får i det mindste en eller anden julegave');
}
