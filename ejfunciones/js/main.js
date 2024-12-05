//1. Crea una función que reciba dos números y devuelva su suma
function suma(n1,n2) {
    return n1 + n2;
}
alert(suma(2,3));

//2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayor(numList) {
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] > num) {
            num = numList[i];
        }  
    } 
    return num;
}
const num = [4,78,23,125];
let numMax = mayor(num);
console.log (numMax);


//3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const frase = prompt("Escribe una frase");
let numVocales = 0;

for (let i = 0; i < frase.length; i++) {
  const letra = frase[i];
  switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      numVocales++;
      break;
  }
}
alert(`La frase tiene ${numVocales} vocales`);

//function cuentaVovales(frase) {
//    let numVocales = 0;
//    const vocales = "hola mundo";
//}

//4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function minusToMayus(lista) {
    const mayus = [];
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i]; 
        mayus.push(element.toUpperCase()); 
    }
    return mayus;
}
const deportes = ["futbol", "tenis", "padel"];
console.log(minusToMayus(deportes));

//5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

//6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

//7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

//8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numCuadrado(list) {
    const number = [];
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const cuadrado = element ^ element;
        number.push (cuadrado);
    }
    return number;
}
const numeros = [1, 3, 78, 90];
console.log(numCuadrado(numeros));

//9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function text() {
    const fraseSeparada = [miFrase.split()];
    const fraseInversaSeparada = [fraseSeparada.reverse()];
    const fraseInversaJunta = [fraseInversaSeparada.join()];
}
const miFrase = ("Este fin de semana hay puente");
console.log(fraseInversaSeparada);

//10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert(factorial(7));  