//comillas dobles
let producto = "Monitor de '23' pulgadas";
producto = 'Monitor de "23" pulgadas';
//Escapar caracteres
producto = 'Moni\\tor de "23" pul\ngad\tas';

//saber la longitud de un string
console.log(producto.length);

producto="Teclado USB";
const precio="180€";
//let oferta=producto+", tiene un precio de "+precio;
let oferta=`El producto ${producto}
                tiene un precio de $(precio)
                la suma de 1+2 es: ${1+2};`
let p1="Tele";
let p2="Telefono";
let p3="Calculadora";
let nombre="Ana";
let lista=`<h1>${nombre}</h1>
            <ul>
                <li>${p1}</li>
                <li>${p2}</li> 
                <li>${p3}</li>
            </ul>`;
console.log(oferta);
document.write(lista);

let saludo="hola";
console.log(saludo.length);
console.log(saludo{0})
console.log(saludo{saludo.length-1});
let i=0;
while (i<saludo.length) {
    console.log (saludo i);
    i++;
}
console.log (saludo);
if(saludo i === "a");{console.log ("he encontrado una a en la posición" + i)}
console.log (saludo.indexOf("ola"));
console.log (saludo.includes("hola"));
console.log (saludo.charAt(3));
console.log (saludo.charCodeAt(3));
let username="  Yomisma    ";
let usernamefiltered=username.trim().toLocaleLowerCase();
//usernamefiltered=usernamefiltered.toLocaleLowerCase();
