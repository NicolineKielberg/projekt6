//jonna
document.getElementById("cta1").addEventListener("click", function() {
  document.querySelector(".nyhedspopup").style.display = "flex";
})

document.getElementById("nyhedspopup-kryds").addEventListener("click", function() {
  document.querySelector(".nyhedspopup").style.display = "none";
})

//Pensum
var minGruppe=['Xenia', 'Nadin', 'Nicoline', 'Jonna'];

  if (minGruppe.length = 4) {
    console.log("Gruppen består af " + minGruppe.length + " medlemmer");

  } else {
    console.log("For få medlemmer, skaf en ekstra!");
}

for (var i = 0; i < minGruppe.length; i++) {
  console.log("medlemmerne er:");
  console.log(minGruppe[i]);
}
