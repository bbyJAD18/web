//const nombre = "Monitor de 20 pulgadas";
//const precio = 200;
//const disponible = true;

//Objetos como literal 
const producto = {
    nombre: "Pantalla OLED", 
    precio:300, 
    disponible: true
};

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

producto.nombre = "Teclado USB";
console.log(producto);

producto.imagen = "imagen.jpg";
console.log(producto);

//Crear otro producto con otros datos e imprimirlo en la consola

const producto2 = {
    nombre: "Pantalla",
    precio: 80,
    disponible: true,
};

console.log(producto2.nombre);
//Otra forma de acceder a las propiedades
console.log(producto2["disponible"]);
//quitar una propiedad
delete producto2.disponible;
console.log(producto2);

//desestructuración de objetos
//const nombre = producto2.nombre;
//const disponible = producto.disponible;
//const precio = producto2.precio;

const {nombre, precio, disponible} = producto;
console.log(nombre);