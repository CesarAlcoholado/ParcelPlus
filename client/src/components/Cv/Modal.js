let openButton = document.getElementById('open')
let container = document.getElementById('container')
let closeButton = document.getElementById('close')

//!ABRIR MODAL
openButton.onclick = function() {
    container.style.visibility = "visible"
}

//!CERRAR MODAL BOTON
closeButton.onclick = function() {
    container.visibility = "hidden"
}

//!CERRAR MODAL VENTANA
container.onclick = function() {
    container.visibility = "hidden"
}