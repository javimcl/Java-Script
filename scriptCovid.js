window.onload = iniciar;
function iniciar(){
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickBoton);
}

async function cargarUrl(url){
    let response = await fetch(url);
    return response.json();
}

async function clickBoton(){
   let json = await cargarUrl('https://api.covid19tracking.narrativa.com/api/2020-05-22/country/spain');
   console.log(json);
}