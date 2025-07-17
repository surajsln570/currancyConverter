import {dropDown,currName,} from './module.js';
const currencyApi = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/USD_INR.json`
let btn = document.querySelector("form button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
let msg = document.querySelector(".msg")

dropDown()

btn.addEventListener("click", async (evt) => {
    evt.preventDefault()
    let amount = document.querySelector(".amount input")
let amtval = amount.value
if (amtval === "" || amtval < 1){
    amtval = 1
    amount.value = "1"
}
// console.log("fromCurr:", fromCurr.value, "toCurr", toCurr.value)
const URL = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${fromCurr.value}_${toCurr.value}.json`
// console.log(URL)
let response = await fetch(URL);
let data = await response.json();
let rate = data.rate
console.log(fromCurr.value, toCurr.value)
let finalAmount = rate*amtval;
msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`

})