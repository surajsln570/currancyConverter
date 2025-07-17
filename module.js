export let currName = document.querySelectorAll(".select-container select")
export let countryFlag = document.querySelector(".select-container img")

const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")


export const dropDown = (select) => {
    for (let select of currName) {

        for (let key in countryList) {

            let addOption = document.createElement("option")
            addOption.innerText = key;
            if (select.name === "from" && key == "USD") {
                addOption.selected = "selected"
            }
            else if (select.name === "to" && key === "INR") {
                addOption.selected = "selected"
            }
            select.appendChild(addOption)


        }
        select.addEventListener("change", (evt) => {

        updateFlag(evt.target)
    })
    }
    

}


export const updateFlag = (element) => {

    let currCode = element.value
    let countryCode = countryList[currCode]
    let src = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = src

}


// export const getExchage = ()=>{
//     btn.addEventListener("click", (evt) => {
//     evt.preventDefault()
//     let amount = document.querySelector(".amount input")
// let amtval = amount.value
// if (amtval === "" || amtval < 1){
//     amtval = 1
//     amount.value = "1"
// }

// const URL = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${fromCurr}_${toCurr}.json`
// })
// }
