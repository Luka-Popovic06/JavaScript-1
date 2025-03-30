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
let caunt = 0;
function calculate(numberOne) {
  if (numberOne === btnOne) {
    number.textContent = caunt -= 1;
  } else {
    number.textContent = caunt += 1;
  }
}
function color() {
  if (caunt < 0) {
    number.style.color = "red";
  } else if (caunt > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
}
function reset() {
  caunt = 0;
  number.textContent = caunt;
  number.style.color = "black";
}
btnOne.addEventListener("click", function () {
  calculate(btnOne);
  color();
});
btnTwo.addEventListener("click", reset);
btnThree.addEventListener("click", function () {
  //caunt = caunt + 1;
  //number.textContent = caunt;
  calculate(btnThree);
  color();
});
