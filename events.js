  //Tipos de asiento con sus valores predeterminados
const asientos = {
    Premium: {
      asientoDescription: "Viaja en lo mejor y por el mejor precio, con servicio wifi y atención especial.",
      tipoAsiento: "Primera Clase.",
      precioAsiento: 90 
    },
    Turista: {
      asientoDescription: "La mejor categoría calidad-precio",
      tipoAsiento: "Clase Turista.",
      precioAsiento: 60
    },
    Ocupado: {
      asientoDescription: "Este asiento ya ha sido reservado.",
      tipoAsiento: "Asiento Ocupado.",
      precioAsiento: 0
    }
  };
    //traer modal
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');
    
    const idAsiento = document.getElementById('idAsiento');
    const tipoAsiento = document.getElementById('tipoAsiento')
    const asientoDescription = document.getElementById('asientoDescription');
    const precioAsiento = document.getElementById('precioAsiento');
    const residentelabel = document.getElementById('residentelabel');
    const residnete = document.getElementById('residente');
    const boton = document.getElementById('botonContinuar');

    // Traer todos los elementos con clase "a"
    const elementos = document.querySelectorAll('.a');

// Aplicar un click listener a cada uno
  elementos.forEach(function(elemento) {
    elemento.addEventListener('click', function(event) {

        const id = event.currentTarget.id;
        const target = event.target;

          console.log("ID del elemento clickeado:", id);
          console.log("Clase del hijo clickeado:", target.className);

        // Verifica si el elemento clickeado (o sus padres) tiene alguna de las clases
        if (target.classList.contains('Pasiento')) {
           openModal("premium", id);
       } else if (target.classList.contains('asiento')) {
            openModal("turista", id);
        } else {
            openModal("ocupado", id);
          }
    });
  });


    //Abrir modal, base tipo e id.
    function openModal(type, id){
        if (type == "turista"){
            idAsiento.textContent = id;
            tipoAsiento.textContent = asientos.Turista.tipoAsiento;
            asientoDescription.textContent = asientos.Turista.asientoDescription;
            precioAsiento.textContent = asientos.Turista.precioAsiento;
            precioAsiento.classList.remove('hidden');
            residentelabel.classList.remove('hidden');
            boton.classList.remove('hidden');
            }else if (type == "premium"){
            idAsiento.textContent = id;
            tipoAsiento.textContent = asientos.Premium.tipoAsiento;
            asientoDescription.textContent = asientos.Premium.asientoDescription;
            precioAsiento.textContent = asientos.Premium.precioAsiento;
            precioAsiento.classList.remove('hidden');
            residentelabel.classList.remove('hidden');
            boton.classList.remove('hidden');
            
        }else if (type == "ocupado"){
            idAsiento.textContent = id;
            tipoAsiento.textContent = asientos.Ocupado.tipoAsiento;
            asientoDescription.textContent = asientos.Ocupado.asientoDescription;
            precioAsiento.classList.add('hidden');
            residentelabel.classList.add('hidden');
            boton.classList.add('hidden');
        }
        modal.classList.remove('hidden');
        
        boton.addEventListener('click', () => {
        console.log('Datos del vuelo:' + idAsiento.textContent + tipoAsiento.textContent + asientoDescription.textContent + precioAsiento.textContent + residnete.checked);
        saveData(idAsiento.textContent, tipoAsiento.textContent, asientoDescription.textContent, precioAsiento.textContent, residnete.checked);
        location.href = "../pantallaPago.html";
      });
    }
        

    

  // Cerrar modal
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // cerrar si clicas fuera del contenido modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // guarda datos en local storage para llevarlos a la siguiente página en forma de array
function saveData(idAsiento, tipoAsiento, asientoDescription, precioAsiento, residente){
  const datos = [idAsiento, tipoAsiento, asientoDescription, precioAsiento, residente] 
  localStorage.setItem("Data", JSON.stringify(datos))
}
    

const backbutton = document.getElementById('backbutton'); 
//backpage event
backbutton.addEventListener('click', () => { history.go(-1); });


