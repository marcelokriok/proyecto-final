const navToggle = document.querySelector(".btn-menu")
const navMenu = document.querySelector("nav")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

const contenedorHTML = document.getElementById("contenedorPackTour")
let fechaActual = Date();
var precioUnitario;
document.getElementById("fechaSalida").value = "2023-04-17"
document.getElementById("fechaLlegada").value = "2023-04-17"
document.getElementById("lugarOrigen").value = "Buenos Aires"
document.getElementById("precioPack").value = "15436.40"

fetch("./database.json")
    .then(response => response.json())
    .then(data =>{
        for(const pack of data){
            contenedorHTML.innerHTML+=`
            <div class="card">
                <h2>${pack.idPack} ${pack.tituloDescriptivo}</h2>                
                <img src=${pack.image} alt="Imagen del lugar a visitar" width="300px" height="200px">
                <p>Transporte: ${pack.tramo}</p>
                                           
                <p>Precio: ${pack.precio}</p>
            </div>
            `
        }        
    })


function enviarForm(){    
    /* aca se deberia usar un constructor (objeto) para tener los datos del  formulario */
        let _lugarOrigen = document.getElementById("lugarOrigen").value
        let _lugarDestino = document.getElementById("lugarDestino").value
        let _fsalida = document.getElementById("fechaSalida").value
        let _fllegada = document.getElementById("fechaLlegada").value        
        if(_fsalida >_fllegada){

            console.log("Error en las fechas ingresadas")
        }else{

            let _tramo = _lugarOrigen + "-" + _lugarDestino
            console.log(_fsalida + _lugarDestino + _fllegada + _lugarOrigen + "tramo " + _tramo)       
            


        }
        
}
    /*
    "idPack": "SU-589",
    "desde": "Buenos Aires",
    "hasta": "Bariloche",
    "tramo": "Buenos Aires-Bariloche",
    "tituloDescriptivo": "Semana Santa en San Carlos de Bariloche",
    "telContacto": 1189654231,
    "estado": "DISPONIBLE",
    "precio": "$38.563,00",
    "cupos": 50,
    "image": "https://riosdelplaneta.com/wp-content/uploads/2019/12/cataratas-del-iguazu-2.jpg"*/