const btnSaveAverage = document.getElementById("btn-average-save")
const btnCleanAverage = document.getElementById("btn-average-clean")
const btnDeleteAverage = document.getElementById("btn-average-delete")
const btnCalcAverage = document.getElementById("btn-average-calc")
const inputDataAverage = document.getElementById("input-data-media")
const resultAverage = document.getElementById("result-average")
let listDataAverage = []

function calcAverage(array){
    if(array.length > 1) {
        const plus = array.reduce(
            (value = 0, newElement) => {
                return value + newElement
            }
        )
        resultAverage.innerHTML = `La media de tus datos es: ${(plus / array.length).toFixed(2)}`
        listDataAverage = []
        inputDataAverage.setAttribute("placeholder","")
    } else if(array.length == 1) {
        inputDataAverage.setAttribute("placeholder","Ingresa más datos.")
    } else{
        inputDataAverage.setAttribute("placeholder","No has ingresado datos.")
    }
}

btnSaveAverage.addEventListener("click", () => {
    if(inputDataAverage.value != "") {
        saveData(inputDataAverage, listDataAverage)
    }
})

inputDataAverage.addEventListener("keypress", (event) => {
    if(event.code === 'Enter' && inputDataAverage.value != "") {
        saveData(inputDataAverage, listDataAverage)
    }
})

btnCleanAverage.addEventListener("click", () => {
    listDataAverage = []
    inputDataAverage.setAttribute("placeholder",`Memoria limpia`)
})

btnCalcAverage.addEventListener("click", () => calcAverage(listDataAverage))

btnDeleteAverage.addEventListener("click", (event) => showHideDelete(event.srcElement.id))


