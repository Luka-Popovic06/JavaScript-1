console.log(`Moj prvi projekat.`);
const ime = "Lazar";
let prezime = "Vuckovic";
prezime = "Petrovic";
console.log(`Moje ime je ${ime} al prezime ${prezime}.`);
let godine = 20;
if (godine < 20) {
  console.log(`Godine su manje od 20`);
} else {
  console.log(`Godine su vece od 20`);
}

//Counter

const btnOne = document.querySelector("#btn-1");
const btnTwo = document.querySelector("#btn-2");
const btnThree = document.querySelector("#btn-3");
const number = document.querySelector("p");

function calculate(numberOne) {
  if (numberOne === btnOne) {
    number.textContent = Number(number.textContent) - 1;
  } else {
    number.textContent = Number(number.textContent) + 1;
  }
}
function color() {
  if (number.textContent < 0) {
    number.style.color = "red";
  } else if (number.textContent > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
}
function reset() {
  number.textContent = 0;
  number.style.color = "black";
}
btnOne.addEventListener("click", function () {
  calculate(btnOne);
  color();
});
btnTwo.addEventListener("click", reset);
btnThree.addEventListener("click", function () {
  calculate(btnThree);
  color();
});
