//recupera los datos guardados
var datosguardados = JSON.parse(localStorage.Data);
console.log(datosguardados.Data);

var idvuelo = datosguardados[0];
var tipoAsiento = datosguardados[1];
var asientoDescription = datosguardados[2];
var precioAsiento = datosguardados[3];
var residente = datosguardados[4];
console.log('Datos del vuelo 2:' + idvuelo + tipoAsiento + asientoDescription + precioAsiento + residente);


generarPago(idvuelo, tipoAsiento, asientoDescription, precioAsiento, residente)


// funcion para la lógica y generacion de contenido de la pantalla de pagos
function generarPago(idvuelo, tipoAsiento, asientoDescription, precioAsiento, residente){
    var precioResidente = precioAsiento * 0.25;
    var precioFinal = 0;
    console.log(precioResidente);
    document.writeln(
        '<h1>Su asiento es el ' + idvuelo 
        + '</h1><br> <h3>en la ' + tipoAsiento + '.<br>' + asientoDescription + '<br></h3>'
    );
    if (residente){
        document.writeln('Precio Final: ' + precioResidente + '€ <i>(75% descuento de residente aplicado[antes <del>' + precioAsiento +'€</del>])</i><br>');
        precioFinal = precioResidente;
    }else{
        document.writeln('Precio Final: ' + precioAsiento + '€ <br>');
        precioFinal = precioAsiento;
    }

    document.writeln('<button class="my-button" id = "pagoFinal"><i><b>Pagar ' + precioFinal +'€</b></i></button>')

    boton = document.getElementById("pagoFinal");
    boton2 = document.getElementById("volverInicio");
    boton.addEventListener('click', () => {
        saveseat(idvuelo);
        const modal = document.getElementById('modal');
        const idAsiento = document.getElementById('idAsiento');
        idAsiento.textContent = idvuelo;
        modal.classList.remove('hidden');


        boton2.addEventListener('click', () => {
            modal.classList.add('hidden');
            location.href = "index.html";
    });
    });
    



    function saveseat(id){
    if (localStorage.getItem(id) != null){
        console.log("ERROR: Asiento "+id+" ya registrado. Expected true.")
        return true;
    }else{
        localStorage.setItem(id, id)
        console.log(""+id+" Guardado correctamente. Expected false.")
        return false;
    }
    
}
}
