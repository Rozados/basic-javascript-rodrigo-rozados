const ejercicio3 = require("prompt-sync")({siginit: true})

let numInput = ejercicio3("Introduce los numeros--> ")
let numeros
let suma = 0

while (numInput!== "cancelar"){ 
    if (Number(numInput)) {
        numeros = Number(numInput)
        suma = (suma + numeros)
    } else {
        console.log("Eso no son números" )         
    }

    numInput = ejercicio3("Introduce los numeros--> ")
}

console.log("Has cancelado el proceso, la suma es: " + suma);