const btnNueva = document.getElementById("btn-nueva");
const btnGuardar = document.getElementById("btn-guardar");
const notaEditable = document.getElementById("nota-editable");
const headerNota = document.getElementById("header-nota");
const cuerpoNota = document.getElementById("cuerpo-nota");
const inputTag = document.getElementById("input-tag");
const tagsDisponibles = document.getElementById("tags-disponibles");
const tagsAplicadas = document.getElementById("tags-aplicadas");
const inputBusqueda = document.getElementById("input-busqueda");
const tagsBusqueda = document.getElementById("tags-busqueda");
const listaNotas = document.getElementById("lista-notas");

const opcionesFechaHora = { dateStyle: 'full', timeStyle: 'short' };

//------------------------------------------------------------

btnNueva.addEventListener("click", evt => nuevaNota());
btnGuardar.addEventListener("click", evt => guardar());
notaEditable.addEventListener("input", evt => modificada());
inputTag.addEventListener("change", evt => aplicarEtiqueta(inputTag.value));
listaNotas.addEventListener("click", evt => listaClicada(evt.target));

//------------------------------------------------------------

function guardar() {

}

function modificada() {
    btnGuardar.disabled = false;
}

function nuevaNota() {
    headerNota.innerText = new Date().toLocaleString("es-ES", opcionesFechaHora);
    notaEditable.dataset.idNota = undefined;
    cuerpoNota.innerText = "";
    btnGuardar.disabled = true;
    tagsAplicadas.innerHTML = "";
    modificada();
}

function aplicarEtiqueta(tag) {
    // TODO comprobar que no esté aplicada ya
    // TODO aplicar y mostrar como aplicada
}

function mostrarNota(nota) {
    notaEditable.dataset.idNota = nota.dataset.idNota;
    headerNota.innerText = nota.querySelector(".card-header").innerText;
    cuerpoNota.innerText = nota.querySelector(".card-body").innerText;
    btnNueva.disabled = false;
    btnGuardar.disabled = true;
    // TODO mostrar etiquetas
}

function listaClicada(target) {
    const nota = target.closest(".card");
    if (target.classList.contains("btn-close")) {
        borrarNota(nota.dataset.idNota);
        return;
    }
    if (nota) {
        mostrarNota(nota);
        return;
    }
}

//------------------------------------------------------------

nuevaNota();

//------------------------------------------------------------

