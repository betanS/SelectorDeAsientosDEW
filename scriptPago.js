generarPago();
function generarPago(idAsiento, tipoAsiento, asientoDescription, precioAsiento, residente){
    location.href("iberia.html");
    document.writeln(
        'Su asiento es el ' + idAsiento 
        + '<br>' + 'en la clase' + tipoAsiento + '.' +
        + '<br>' + asientoDescription
    );
    if (resiente){
        document.writeln(precioAsiento * 0.75);
    }else{
        document.writeln(precioAsiento);
    }
}