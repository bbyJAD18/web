debugger;
console.log("Antes de init APP");
initApp();
console.log("Después de init APP");
function initApp() {
    console.log("Inicializando app...");
    pedirDatosUsuario();
}
function pedirDatosUsuario() {
    console.log("Pidiendo datos al usuario...");
    autenticarUsuario("Crisóstomo");
}
function autenticarUsuario(usuario) {
    console.log("Autenticando usuario...");
    let userGift = "Gorro";
    console.log("Usuario " + usuario + " autenticado con éxito"); 
}