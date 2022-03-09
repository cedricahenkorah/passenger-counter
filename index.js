let countEL = document.getElementById("count-el");
let count = 0;

let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEL.textContent = count;
}

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countEL.textContent = 0;
  count = 0;
}
