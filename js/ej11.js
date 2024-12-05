const frase = prompt("Escribe tu frase");
const frase = "ayer fue domingo";
let numVocales = 0;
const vocales = "aeiouAEIOU";
for (let i = 0; i < frase.length; i++) {
    /*switch (letra) {
        case "a":
        case "e":
        case "i":
        case "o": 
        case "u":  
           numVocales++;
            break;
   }
  */
 for (let j = 0; j < vocales.length; j++) {
    if (frase[i] === vocales[j]) {
        numVocales++;
        break;
    }
    
 }

}
alert(`La frase tiene ${numVocales} vocales`)