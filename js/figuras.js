//Cuadrado
perimetroCuadrado = lado => lado * 4
areaCuadrado = lado => lado * lado

function calcularPerimetro() {
    let input = document.getElementById("inputCuadrado")
    let value = input.value;
    let perimetro = perimetroCuadrado(value)
    alert(perimetro)
    input.value = null

}

function calcularArea() {
    let input = document.getElementById("inputCuadrado")
    let value = input.value;
    let area = areaCuadrado(value)
    alert(area)
    input.value = null
}


//Triangulo
alturaTriangulo = (lado, base) => Math.sqrt((lado ** 2) - ((base/2) ** 2)).toFixed(2)
perimetroTriangulo = (lado1, lado2, base) => base + lado1 + lado2
areaTriangulo = (lado, base) => {
    let aBase = base
    let aLado = lado
    let altura = alturaTriangulo(aLado, aBase)
    return (aBase * altura) / 2
}


//Circulo
diametroCirculo = radio => radio * 2
perimetroCirculo = radio => Math.PI * diametroCirculo(radio)
areaCirculo = radio => (radio ** 2) * Math.PI
