document.getElementById("sesion").addEventListener("click", function() {
    cambiarColor();
}); 
function cambiarColor() {
    var botonSesion = document.getElementById("sesion");
    botonSesion.style.backgroundColor = "red";
    botonSesion.textContent="Cerrar sesión";
}

document.getElementById("agregar").addEventListener("click", () => {
    const botonAgregar = document.getElementById("agregar");
    botonAgregar.remove();
});
var like1=0;
var like2=0;
document.getElementById("like1").addEventListener("click", () => {
    const botonLIKE1 = document.getElementById("like1");
    like1++;
    botonLIKE1.textContent=like1+" Me gusta";
    alert("¡Gato Atigrado le gusto!");
});

document.getElementById("like2").addEventListener("click", () => {
    const botonLIKE1 = document.getElementById("like2");
    like2++;
    botonLIKE1.textContent=like2+" Me gusta";
    alert("¡Golden Retriever le gusto!");
});