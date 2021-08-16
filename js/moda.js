const inputDataModa = document.getElementById('input-data-moda')
const btnSaveModa = document.getElementById('btn-moda-save')
const btnCleanModa = document.getElementById('btn-moda-clean')
const btnCalcModa = document.getElementById('btn-moda-calc')
const btnDeleteModa = document.getElementById('btn-moda-delete')
const resultModa = document.getElementById('result-moda')
let listDataModa = []
let listModaCount = {}

function calcModa() {
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
    let listOrderModa = Object.entries(listModaCount).sort((a, b) => a[1] - b[1])
    let listRepeModa = listOrderModa[listOrderModa.length - 1]
    let moda = parseInt(listRepeModa[0])
}

