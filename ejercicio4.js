const ejercicio4 = require("prompt-sync")({siginit: true})

let textInput = ejercicio4("Introduce los textos--> ")
let cadena = ""
let texto

while (textInput!= "cancelar"){ 
    if (String(textInput)) {
        texto = String(textInput)
        cadena = (cadena + texto + "-" )
    } else {
        ejercicio4("Introduce los textos-> ")
    }
    textInput = ejercicio4("Introduce los textos-> ")
}

console.log("Has cancelado el proceso, los textos son: " + cadena);

