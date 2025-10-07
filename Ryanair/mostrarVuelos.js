
const vuelo = {filas: 34, asientos: 3, columnas: 3}
mostrarVuelo()
                //                                              #####################REFACTORIZABLE PARA USAR UN SCRIPT EN LAS 3 COMPAÑIAS

function mostrarVuelo() {
    var abc = "abcNdefNghijklmnopqrstuvwxyz"; //c repetida para no dar problemas con el hueco del pasillo en el bucle.
    var asiento = "";
    document.writeln("<table><caption><h2>Vuelo Ryanair</h2><h4>Selector de asiento</h4></caption>")
    document.writeln("<tbody>")
    for (var i = 1; i <= vuelo.filas; i++){
        document.writeln("<tr id = '"+i+"'R>")
        contador = 1;
        if(i < 5){
            for (var x = 0; x < vuelo.asientos*vuelo.columnas+(vuelo.columnas-1); x++){ //Se repite por tantos asientos x columnas + 1 para el hueco del pasillo
            asiento = i+abc.charAt(x)+"R";
            if(contador == vuelo.asientos+1){  //el pasillo corresponde cuando se 
                document.writeln("<td id = '"+i+"nullR'><div class = 'null'></div></td>");
                contador = 0;
            }else{
                if(checkseat(asiento) == false){ // si el asiento está libre (false).
                    document.writeln("<td class = 'a' id = '"+i+""+abc.charAt(x)+"R'><div class = 'Pasiento'></div> </td>")
                }else if (checkseat(asiento) == true){  //si el asiento está ocupado (true)
                    document.writeln("<td class = 'a' id = '"+i+""+abc.charAt(x)+"R'> <div class = 'asientoOcup'></div> </td>")
                }
            }    
            contador++;
        }
        }else{
            for (var x = 0; x < vuelo.asientos*vuelo.columnas+(vuelo.columnas-1); x++){ //Se repite por tantos asientos x columnas + 1 para el hueco del pasillo
            asiento = i+abc.charAt(x)+"R";
            if(contador == vuelo.asientos+1){
                document.writeln("<td id = '"+i+"nullR'><div class = 'null'></div></td>")
                contador = 0;
            }else{
                if(checkseat(asiento) == false){ // si el asiento está libre (false).
                    document.writeln("<td class = 'a' id = '"+i+""+abc.charAt(x)+"R'><div class = 'asiento'></div></td>")
                }else if (checkseat(asiento) == true){  //si el asiento está ocupado (true)
                    document.writeln("<td class = 'a' id = '"+i+""+abc.charAt(x)+"R'><div class = 'asientoOcup'></div></td>")
                }   
            }  
            contador++;  
            }  
        }
        
        document.writeln("</tr>")
    }
    document.writeln("</tbody>")
}




function checkseat(id){
    if(localStorage.getItem(id)!= null){
        console.log("El asiento existe, devolviendo true, expected X");
        return true;
    }
    console.log("El asiento NO existe, devolviendo false, expected O");
    return false;
}
