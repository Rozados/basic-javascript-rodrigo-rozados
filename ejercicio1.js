const ejercicio1 = require("prompt-sync")({siginit: true})

const nombre = ejercicio1("Introduce tu nombre--> ")
const edad = ejercicio1("Introduce tu edad--> ")

if (edad>=18) {
    console.log(nombre +" ya puedes conducir")
} else{
    console.log(nombre +" no puedes conducir")
}