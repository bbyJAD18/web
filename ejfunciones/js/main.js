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
function primo(n) {
    if (n <= 1) {
        return false;
    };
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
}
const siesprimo = [45678];
console.log (primo(siesprimo));

//6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function getComunes(arrA, arrB) {
    const comunes = [];
    for (let i = 0; i < arrA.length; i++) {
        const elemento = arrA [i];
        if (arrB.includes (elemento)) {
            comunes.push(elemento);
        }  
    } 
    return comunes;
}
const a = [2, 3, 5, 7];
const b = [3, 6, 9, 5];
console.log(getComunes(a,b));
//7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares() {
    const numeritos = [];
    for (let i = 0; i < numeritos.length; i++) {
        const element = numeritos[i];
        if (numeritos /2 % === 0) {
            return numeritos + numeritos
        }
    }
}

//8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numCuadrado(list) {
    const number = [];
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const cuadrado = element * element;
        number.push (cuadrado);
    }
    return number;
}
const numeros = [1, 3, 78, 90];
console.log(numCuadrado(numeros));

//9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function fraseInversa(text) {
    const miFrase = text.split(" ").reverse().join(" ");
}
const text = ("Este fin de semana hay puente");
//console.log(miFrase);

//10. Crea una función que calcule el factorial de un número dado
function factorial(x) {
    if (x === 0 || x === 1) {
        return 1;
    }
    return x = x * factorial(x-1);
  }
const x = factorial(8);
alert("El factorial es " + x);    
debugger;