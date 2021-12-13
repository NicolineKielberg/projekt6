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
