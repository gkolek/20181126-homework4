
var clicks = 0;
function substractClick() {
    clicks -= 1;
    document.getElementById("clickCounter1").innerHTML = clicks;
};
function addClick() {
    clicks += 1;
    document.getElementById("clickCounter1").innerHTML = clicks;
};

var clicks1 = 0;
function minusClick() {
    clicks1 -= 1;
    document.getElementById("clickCounter").innerHTML = clicks1;
};
function plusClick() {
    clicks1 += 1;
    document.getElementById("clickCounter").innerHTML = clicks1;
};

