var billPrice = document.querySelector(".bill-price");
var peopleAmount = document.querySelector(".number-of-people");
const totalPrice = document.querySelector(".total-price-value");

function tipHandler() {
  console.log(billPrice.value);
  totalPrice.innerText = `$ ${billPrice.value / peopleAmount.value}`;
}
