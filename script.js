const bill = document.querySelector(".bill-price");
const buttons = document.querySelectorAll(".tip-btn");
const tipCustom = document.querySelector(".tip-custom");
const people = document.querySelector(".number-of-people");
const results = document.querySelectorAll(".value");
const resetBtn = document.querySelector(".reset-btn");

let billValue = 0.0;
let tipValue = 0.0;
let peopleValue = 1;
resetBtn.addEventListener("click", reset);
bill.addEventListener("input", setBillValue);
tipCustom.addEventListener("input", setCustomTip);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (e.target.innerHTML == btn.innerHTML) {
      btn.classList.add("active");
      tipValue = parseFloat(btn.innerHTML) / 100;

      tipCustom.value = "";
    }
  });
});
people.addEventListener("input", setPeople);

function validateFloat(s) {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}

function validateInt(s) {
  var rgx = /^[0-9]*$/;
  return s.match(rgx);
}

function setBillValue() {
  if (bill.value.includes(",")) {
    bill.value = bill.value.replace(",", ".");
  }
  if (!validateFloat(bill.value)) {
    bill.value = bill.value.substring(0, bill.value.length - 1);
  }
  billValue = parseFloat(bill.value);
  if (tipCustom.value !== "") {
    calculateTip();
  }
}

function setCustomTip() {
  if (!validateInt(tipCustom.value)) {
    tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1);
  }

  tipValue = parseFloat(tipCustom.value / 100);
}

function setPeople() {
  if (!validateInt(people.value)) {
    people.value = people.value.substring(0, people.value.length - 1);
  }

  peopleValue = parseFloat(people.value);
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * (tipValue + 1)) / peopleValue;
    results[0].innerHTML = "$" + tipAmount.toFixed(2);
    results[1].innerHTML = "$" + total.toFixed(2);
  }
}

function reset() {
  bill.value = "0.0";
  setBillValue();

  people.value = "1";
  setPeopleValue();
}
