const vuelobinter = {filas: 34, asientos: 2, columnas: 2}
mostrarVueloBinter()

function mostrarVueloBinter() {
    var abc = "abccdefghijklmnopqrstuvwxyz"; //c repetida para no dar problemas con el hueco del pasillo en el bucle.
    var asiento = "";
    document.writeln("<table><caption><h2>Vuelo Binter</h2><h4>Selector de asiento</h4></caption>")
    document.writeln("<tbody>")
    for (var i = 1; i <= vuelobinter.filas; i++){
        document.writeln("<tr id = '"+i+"'>")
        if(i < 5){
            for (var x = 0; x < vuelobinter.asientos*vuelobinter.columnas+1; x++){ //Se repite por tantos asientos x columnas + 1 para el hueco del pasillo
            asiento = i+abc.charAt(x);
            if(x== vuelobinter.columnas){
                document.writeln("<td id = '"+i+"null'>__</td>")
            }else{
                if(checkseat(asiento) == false){ // si el asiento está libre (false).
                    document.writeln("<td id = '"+i+""+abc.charAt(x)+"', bgcolor='#FFD700'> O </td>")
                }else if (checkseat(asiento) == true){  //si el asiento está ocupado (true)
                    document.writeln("<td id = '"+i+""+abc.charAt(x)+"', bgcolor='#CE5937'> X </td>")
                }
                
            }    
        }
        }else{
            for (var x = 0; x < vuelobinter.asientos*vuelobinter.columnas+1; x++){ //Se repite por tantos asientos x columnas + 1 para el hueco del pasillo
            asiento = i+abc.charAt(x);
            if(x== vuelobinter.columnas){
                document.writeln("<td id = '"+i+"null'>__</td>")
            }else{
                if(checkseat(asiento) == false){ // si el asiento está libre (false).
                    document.writeln("<td id = '"+i+""+abc.charAt(x)+"', bgcolor='#6699FF'> O </td>")
                }else if (checkseat(asiento) == true){  //si el asiento está ocupado (true)
                    document.writeln("<td id = '"+i+""+abc.charAt(x)+"', bgcolor='#CE5937'> X </td>")
                }
                
            }    
            }
        }
        
        document.writeln("</tr>")
    }
    document.writeln("</tbody>")
}





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
function checkseat(id){
    if(localStorage.getItem(id)!= null){
        console.log("El asiento existe, devolviendo true, expected X");
        return true;
    }
    console.log("El asiento NO existe, devolviendo false, expected O");
    return false;
}