(function () {
  var clicks = 0;
  function substractClick() {
    clicks -= 1;
    document.getElementById("clickCounter1").innerHTML = clicks;
    console.log(clicks);
  }
  function addClick() {
    clicks += 1;
    document.getElementById("clickCounter1").innerHTML = clicks;
    console.log(clicks);
  }
  window.substractClick = substractClick;
  window.addClick = addClick;
})();



var clicks1 = 0;
function minusClick() {
  clicks1 -= 1;
  document.getElementById("clickCounter").innerHTML = clicks1;
};
function plusClick() {
  clicks1 += 1;
  document.getElementById("clickCounter").innerHTML = clicks1;
};

