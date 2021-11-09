window.onload = iniciar
var tareas = [];

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnCalcular);
}


function clickBtnCalcular() {
    var txtTarea = document.getElementById("txtTarea");
    var tarea = txtTarea.value;
    tareas.push(tarea);
    alert(tareas);
    mostrarTareas();

}

function mostrarTareas() {
    var listado = document.getElementById("listado");
    var html = ""
    for (var tarea of tareas) {
        html += tarea + "<br/>";
    }
    listado.innerHTML = html;
}