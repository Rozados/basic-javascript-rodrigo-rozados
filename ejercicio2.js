const ejercicio2 = require("prompt-sync")({siginit: true})

const nota = ejercicio2("Introduce tu nota (0-10)--> ")

switch (nota) {
    case "0":
    case "1":
    case "2":
        console.log("Tu calificación es 'Muy deficiente'")
        break;
    case "3":
    case "4":
        console.log("Tu calificación es 'Insuficiente'")
        break;
    case "5":
        console.log("Tu calificación es 'Suficiente'")
        break;
    case "6":
        console.log("Tu calificación es 'Bien'")
        break;
    case "7":
    case "8":
        console.log("Tu calificación es 'Notable'")
        break;
    case "9":
    case "10":
        console.log("Tu calificación es 'Sobresaliente'")
        break;
    default:
        console.log("Tu nota no es válida")
        break;
}