const inputDataModa = document.getElementById('input-data-moda')
const btnSaveModa = document.getElementById('btn-moda-save')
const btnCleanModa = document.getElementById('btn-moda-clean')
const btnCalcModa = document.getElementById('btn-moda-calc')
const btnDeleteModa = document.getElementById('btn-moda-delete')
const resultModa = document.getElementById('result-moda')
let listDataModa = []

function calcModa(array) {
    let listOrderModa
    let listRepeModa
    let listModaCount = {}

    if(array.length > 1) {
        //RECORRE LA LISTA Y CREA UN OBJETO CON EL NUMERO DE VECES QUE CADA DATO SE REPITIO.
        listDataModa.map((element) => {
            if(listModaCount[element]){
                listModaCount[element] += 1
            } else {
                listModaCount[element] = 1
            }
        })
        //CONVIERTE EL OBJETO A UN ARRAY, CON MAS ARRAYS DETRO [[DATO , nVECES], ...]
        //TAMBIEN LOS ORDENA DE MENOR A MAYOR DE MANERA QUE EL DATO QUE HAYA TENIDO MAS REPETICIONES
        //QUEDA DE ULTIMO
        listOrderModa = Object.entries(listModaCount).sort((a, b) => a[1] - b[1])
        listRepeModa = listOrderModa[listOrderModa.length - 1]
        resultModa.innerHTML = `La moda de tus datos es: ${parseInt(listRepeModa[0])}`
        listDataModa = []
        inputData.setAttribute("placeholder", "")
    } else if(array.length == 1) {
        inputDataModa.setAttribute("placeholder","Ingresa más datos.")
    } else{
        inputDataModa.setAttribute("placeholder","No has ingresado datos.")
    }
}

inputDataModa.addEventListener('keypress', (event) => {
    if(event.code === 'Enter' && inputDataModa.value != "") {
        saveData(inputDataModa, listDataModa)
    }
})

btnSaveModa.addEventListener('click', () => {
    if(inputDataModa.value != ""){
        saveData(inputDataModa, listDataModa)
    }
})

btnCleanModa.addEventListener("click", () => {
    listDataModa = []
    inputDataModa.setAttribute("placeholder",`Memoria limpia`)
})

btnCalcModa.addEventListener('click', () => calcModa(listDataModa))

btnDeleteModa.addEventListener('click', (event) => showHideDelete(event.srcElement.id))

