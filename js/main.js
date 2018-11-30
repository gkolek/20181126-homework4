// (function () {
//   var clicks1 = 0;
//   function substractClick() {
//     clicks1 -= 1;
//     document.getElementById("clickCounter1").innerHTML = clicks1;
//     // console.log(clicks1);
//   }
//   function addClick() {
//     clicks1 += 1;
//     document.getElementById("clickCounter1").innerHTML = clicks1;
//     // console.log(clicks1);
//   }
//   window.substractClick = substractClick;
//   window.addClick = addClick;
// })();



// var clicks = 0;
// function minusClick() {
//   clicks -= 1;
//   document.getElementById("clickCounter").innerHTML = clicks;
//   // console.log(clicks);
// };
// function plusClick() {
//   clicks += 1;
//   document.getElementById("clickCounter").innerHTML = clicks;
//   // console.log(clicks);
// };

(function (){
var add = document.querySelector('.add')
var sub = document.querySelector('.substract')
add.addEventListener('click', plusClick)
sub.addEventListener('click', minusClick)

var clicks1 = 0;
function minusClick() {
  clicks1 -= 1;
  document.getElementById("clickCounter1").innerHTML = clicks1;
};
function plusClick() {
  clicks1 += 1;
  document.getElementById("clickCounter1").innerHTML = clicks1;
};

})();


