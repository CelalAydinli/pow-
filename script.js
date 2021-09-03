// let i = 0;
// let interval = setInterval(Start, 1000);
// function Start() {

//     let take = document.getElementsByTagName("body")[0];
//     let color = ["black", "blue", "brown", "green", "yellow", "orange"];
//     take.style.backgroundColor = color[i];
//     i = (i + 1) % color.length;
// }
// function Stop() {
//     clearInterval(interval);
// }

let take = document.getElementById("show");
let cvb;
let i;

function QuvvetiHesabla() {
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    cvb = PowerOfNumber(x, y);
    take.innerHTML = "pow(" + x + ";" + y + ")=" + cvb;

}
function PowerOfNumber(x, y) {
    let quvvet = 1;
    for (i = 0; i < y; i++) {
        quvvet *= x;
    }
    return quvvet;
}
