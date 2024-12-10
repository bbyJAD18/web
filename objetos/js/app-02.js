//Los objetos pueden tener cualquier tipo de dato como valor de propiedad
const producto = {
    nombre: "Mesa comedor",
    precio: 200,
    stock: true,
    color: ["negro", "blanco", "gris"],
    info: {
        peso: "16kg",
        medidas: {
            h: 2,
            x: 2,
            y: 2,
        }
    }
};
console.log(producto);
console.log("La " + producto.nombre + " pesa " + producto.info.peso + " y tienes disponibles estos colores: " + producto.color);

function imprimirInfo(producto) {
    console.log(`La `);  
    console.log("Tienes los siguientes colores: ");
    for (let i = 0; i < producto.color.length; i++) {
        const element = producto.color[i];
        console.log(color);
    }
}
imprimirInfo(producto);
//Hacer una copia de un objeto
