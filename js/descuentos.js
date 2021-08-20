let precioConDescuento = (precio, descuento) => precio * ((100 - descuento) / 100)
let result = document.getElementById("result")
let btn = document.getElementById("btn")

function calcDiscount() {
    let inputPrice = document.getElementById("inputPrice")
    let valuePrice = inputPrice.value
    let inputDiscount = document.getElementById("inputDiscount")
    let valueDiscount = inputDiscount.value

    if(valuePrice != "" && valueDiscount != "") {
        let descuento = precioConDescuento(valuePrice, valueDiscount).toFixed(2)
        result.innerHTML = `El precio total es ${descuento}`
        inputPrice.value = ""
        inputDiscount.value = ""
        inputPrice.setAttribute("placeholder", "")
        inputDiscount.setAttribute("placeholder", "")
    } else {
        if (valuePrice == "" && valueDiscount == "") {
            inputPrice.setAttribute("placeholder", "Agrega el precio")
            inputDiscount.setAttribute("placeholder", "Agrega el descuento")
        } else if(valuePrice == "") {
            inputPrice.setAttribute("placeholder", "Agrega el precio")
        } else {
            inputDiscount.setAttribute("placeholder", "Agrega el descuento")
        }
    }
}

document.addEventListener("keypress", (event) => {
    if (event.code == 'Enter') {
        calcDiscount()
    }
})

btn.addEventListener("click", () =>  calcDiscount())
