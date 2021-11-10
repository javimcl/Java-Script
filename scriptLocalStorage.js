window.onload = iniciar;

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)

    var btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar)

    mostarNotas();
}

function clickBtnBorrar(){
    localStorage.clear();
    mostarNotas();
}

function clickBtnAgregar() {
    var txtNota = document.getElementById("txtNota");
    var notas = [];
    if(localStorage.notas){
        notas = JSON.parse(localStorage.notas);    
    }
    notas.push(txtNota.value);
    localStorage.notas = JSON.stringify(notas);    
    mostarNotas();

}

function mostarNotas() {
    var divNotas = document.getElementById("divNotas");
    var notas = [];
    if(localStorage.notas){
        notas = JSON.parse(localStorage.notas);    
    }

    var html = "";
    for(var nota of notas){
html += nota + "<br/>";
    }
    divNotas.innerHTML =html;

}