var conexiones=400;
var solicitudes=2;
document.getElementById("editar").addEventListener("click", () => {
    const usuario = document.getElementById("usuario");
    usuario.textContent="Daniel Cabrera";
});
function solicitud(element,valor){
    //console.log(element+valor);
    var solicitud=document.getElementById(element);
    solicitud.remove();
    if (solicitudes>0){
        solicitudes--;
    }
    var cantSolicitud= document.getElementById('solicitudes');
    cantSolicitud.textContent='Solicitudes de Conexión ('+solicitudes+')';
    if (valor==true){
        var conexion=document.getElementById('conexiones');
        conexiones++;
        conexion.textContent='Tus Conexiones ('+conexiones+')';
    }
}