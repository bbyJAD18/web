// Pedir operador
const operador=prompt("Escribe el operador:+,-,*,/");
//Pedir un numero
const a =parseFloat(prompt("Primer operador: "));
//Pedir otro numero
const b =parseFloat(prompt("Segundo operador: "));
//Realizar el calculo segun el operador
let resultado;
if(operador==='+') {resultado=a+b;}
else if (operador==='-') {resultado=a-b;}
else if (operador==='*') {resultado=a*b;}
else {resultado=a/b;}
//mostrar el resultado
alert("El resultado es:"+resultado);
