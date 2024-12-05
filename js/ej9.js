const frase = prompt("Escribe tu frase");
frase = "buenos dias que hay";
let numAes = 0;
for (let i = 0; i < frase.length; i++;){
    const letra = frase[i];
    if (letra === "a")
        numAes++;
}
alert(`La frase tiene ${numAes} aes`);