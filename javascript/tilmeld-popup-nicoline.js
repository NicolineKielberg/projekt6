
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

var a = 20;
var b = 20;

if (a < b) {
  console.log('jeg får de gaver jeg ønsker mig');
}
else if (a > b) {
  console.log('Jeg får ikke de gaver jeg øsnker mig');
}
else {
  console.log('jeg får i det mindste en eller anden julegave');
}
