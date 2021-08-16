const averageContainer = document.getElementById('container-average')
const btnAverage = document.getElementById('btn-average')
let countAverage = 0
const medianaContainer = document.getElementById('container-mediana')
const btnMediana = document.getElementById('btn-mediana')
let countMediana = 0
const modaContainer = document.getElementById('container-moda')
const btnModa = document.getElementById('btn-moda')
let countModa = 0
const deleteContainer = document.getElementById('container-delete-data')
const inputDeleteData = document.getElementById("input-delete")
const btnDeleteData = document.getElementById('btn-delete')
let countDelete = 0

//FUNCION PARA GUARDAR CADA DATO INSERTADO EN LOS INPUTS
const saveData = (input, list) => {
    list.push(parseInt(input.value))
    input.value = ""
    input.setAttribute("placeholder",`Último dato guardado (${list[list.length - 1]})`)
}

//FUNCION PARA ELIMINAR UN SOLO DATO EN LAS LISTAS DE CADA SECCION
function deleteData(input, list){
    let valueToDelete = 0
    valueToDelete = parseInt(inputDeleteData.value)
    if(list.length > 0) {
        if(list.find(element => element == valueToDelete)) {
            list.splice(list.findIndex(element => element == valueToDelete), 1)
            inputDeleteData.setAttribute("placeholder",`Dato eliminado (${inputDeleteData.value}).`)
            inputDeleteData.value = ""
        } else{
            inputDeleteData.value = ""
            inputDeleteData.setAttribute("placeholder","No se encontro el dato.")
        }
    } else{
        input.setAttribute("placeholder","Ingresa datos.")
    }
    input.value = ""
}

//FUNCION QUE DETECTA SI EL USUARIO HA ESCRITO UN DATO,
//EN EL MOMENTO DE DAR CLICK EN EL BOTON O PRESIONAR ENTER
function selectDeleteData(inputData, listData){
    inputDeleteData.addEventListener("keypress", (event) => {
        if(event.keyCode === 13 && inputDeleteData.value != "") {
            deleteData(inputData, listData)
        } else if (inputDeleteData.value === "") {
            inputDeleteData.setAttribute("placeholder", "Ingresa un dato")
        }
    })
    btnDeleteData.addEventListener("click", ( ) => {
        if(inputDeleteData.value != "") {
            deleteData(inputData, listData)
        } else inputDeleteData.setAttribute("placeholder", "Ingresa un dato")
    })
}

//FUNCION QUE OCULTA LAS DEMAS SECCIONES CUANDO SE QUIERE ELEGIR OTRA
function hideOtherContainer(container) {
    if(container === medianaContainer) {
        hideAverageContainer()
        hideModaContainer()
        hideDeleteContainer()
    } else if(container == averageContainer) {
        hideMedianaContainer()
        hideModaContainer()
        hideDeleteContainer()
    } else if(container == modaContainer){
        hideMedianaContainer()
        hideAverageContainer()
        hideDeleteContainer()
    }
}

//FUNCIONES QUE OCULTAN Y MUESTRAN UNA SECCION,
//TAMBIEN BORRAN DATOS Y ELIMINAR EL PLACEHOLDER DEL INPUT
const showAverageContainer = () => {
    averageContainer.style.display = "block"
}
const hideAverageContainer = () => {
    averageContainer.style.display = "none"
    inputDataAverage.setAttribute("placeholder", "")
    countAverage = 0
    listDataAverage = []
}
const showMedianaContainer = () => {
    medianaContainer.style.display = "block"
}
const hideMedianaContainer = () => {
    medianaContainer.style.display = "none"
    inputDataMediana.setAttribute("placeholder", "")
    countMediana = 0
    listDataMediana = []
}
const showModaContainer = () => {
    modaContainer.style.display = "block"
}
const hideModaContainer = () => {
    modaContainer.style.display = "none"
    inputDataModa.setAttribute("placeholder","")
    countModa = 0
    listDataModa = []
}
const showDeleteContainer = () => {
    deleteContainer.style.display = "block"
}
const hideDeleteContainer = () => {
    deleteContainer.style.display = "none"
    inputDeleteData.setAttribute("placeholder", "")
    countDelete = 0
    deleteContainer.value = ""
}

//FUNCION QUE DEFINE OCULTA O MUESTRA LA SECCION DE ELIMAR DATOS,
//TAMBIEN SE ENCARGA DE EVALUAR DE QUE SECCION SE DEBEN ELIMINAR LOS DATOS.
function showHideDelete(id) {
    countDelete++
    if(countDelete == 1) showDeleteContainer()
    else if(countDelete == 2) {
        hideDeleteContainer()
    }

    if(id === 'btn-average-delete') {
        selectDeleteData(inputDataAverage, listDataAverage)
    } else if(id === 'btn-mediana-delete') {
        selectDeleteData(inputDataMediana, listDataMediana)
    } else if(id === 'btn-moda-delete') {
        selectDeleteData(inputDataModa, listDataModa)
    }
}

//EN ESTA SECCION SE DEFINEN LOS EVENTOS CLICK EN LOS BOTONES DE CADA SECCIÓN
// QUE SE ECARGA DE MOSTRAR U OCULAR LA SECCIÓN, POR DEFECTO ESTAN TODAS OCULTAS
btnAverage.addEventListener("click", () => {
    hideOtherContainer(averageContainer)
    countAverage++
    if(countAverage == 1) showAverageContainer()
    else if(countAverage == 2) {
        hideAverageContainer()
    }
})
btnMediana.addEventListener("click", () => {
    hideOtherContainer(medianaContainer)
    countMediana++
    if(countMediana == 1) showMedianaContainer()
    else if(countMediana == 2) {
        hideMedianaContainer()
    }
})

btnModa.addEventListener("click",() =>{
    hideOtherContainer(modaContainer)
    countModa++
    if(countModa == 1) showModaContainer()
    else if (countModa == 2) {
        hideModaContainer()
    }
})

