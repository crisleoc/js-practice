const inputDataMediana = document.getElementById('input-data-mediana')
const btnSaveMediana = document.getElementById('btn-mediana-save')
const btnCleanMediana = document.getElementById('btn-mediana-clean')
const btnCalcMediana = document.getElementById('btn-mediana-calc')
const btnDeleteMediana = document.getElementById('btn-mediana-delete')
const resultMediana = document.getElementById('result-mediana')
let listDataMediana = []

let pairOrOdd = (data) => data.sort((a, b) => a-b)

function calcMediana(array) {
    let mediana
    let position
    if(array.length > 1) {
        pairOrOdd(array)
        if (array.length % 2 === 0) {
            position = (array.length / 2) - 1
            mediana = (array[position] + array[position + 1]) / 2
            resultMediana.innerHTML = `La mediana es: ${mediana}`
            listDataMediana = []
            inputDataMediana.setAttribute("placeholder","")
        } else {
            position = (Math.ceil(array.length / 2)) - 1
            mediana = array[position]
            resultMediana.innerHTML = `La mediana es: ${mediana}`
            listDataMediana = []
            inputDataMediana.setAttribute("placeholder","")
        }
    } else if(array.length == 1) {
        inputDataMediana.setAttribute("placeholder","Ingresa más datos.")
    } else{
        inputDataMediana.setAttribute("placeholder","No has ingresado datos.")
    }
}

inputDataMediana.addEventListener('keypress', (event) => {
    if(event.keyCode === 13 && inputDataMediana.value != "") {
        saveData(inputDataMediana, listDataMediana)
    }
})

btnSaveMediana.addEventListener('click', () => {
    if(inputDataMediana.value != ""){
        saveData(inputDataMediana, listDataMediana)
    }
})

btnCleanMediana.addEventListener("click", () => {
    listDataMediana = []
    inputDataMediana.setAttribute("placeholder",`Memoria limpia`)
})

btnCalcMediana.addEventListener('click', () => calcMediana(listDataMediana))

btnDeleteMediana.addEventListener('click', (event) => showHideDelete(event.srcElement.id))

//EVENTO PARA DETECTAR CTRL + ENTER

// document.addEventListener("", (event) => console.log(event))

// let keyLoggerCalc = {
//     ShiftLeftUp: false,
//     EnterUp: false,
// }

// onkeyup = onkeydown = function(e){
//     e = e || event; // to deal with IE
//     console.log(e)
//     map[e.keyCode] = e.type == 'keydown';
//     /* insert conditional here */
//     console.log(map)
// }

// onkeyup = (e) => {
//     e = e || event
//     console.log(e)
// }

// inputDataMediana.addEventListener ('keypress', function(e){
//     if (e.keyCode == 13  && inputDataMediana.value != "") alert ('Has pulsado enter safa');
// })