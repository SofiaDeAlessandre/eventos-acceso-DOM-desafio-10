import "./style.css";

let btn1 = document.getElementById("add-1");
let btn2 = document.getElementById("add-2");
let btn3 = document.getElementById("add-3");
let cont = document.getElementById("cont");
let cont2 = document.getElementById("cont-2");
let emoji1 = [];
let emoji2 = [];
let emoji3 = [];

btn1.addEventListener("click", (e) => {
  emoji1.push("😺");
  emoji2 = [];
  emoji3 = [];
  if (emoji1.length === 5) {
    cont2.textContent += "⬛";
    cont.textContent = "";
    emoji1 = [];
  } else {
    cont.textContent += "😺";
  }
});

btn2.addEventListener("click", () => {
  emoji2.push("😸");
  emoji1 = [];
  emoji3 = [];
  if (emoji2.length === 5) {
    cont2.textContent += "⬛";
    cont.textContent = "";
    emoji2 = [];
  } else {
    cont.textContent += "😸";
  }
});

btn3.addEventListener("click", () => {
  emoji3.push("😹");
  emoji2 = [];
  emoji1 = [];
  if (emoji3.length === 5) {
    cont2.textContent += "⬛";
    cont.textContent = "";
    emoji3 = [];
  } else {
    cont.textContent += "😹";
  }
});
