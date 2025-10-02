

    //Tipos de asiento con sus valores predeterminados
const asientos = {
    Premium: {
      asientoDescription: "Viaja en lo mejor y por el mejor precio, con servicio wifi y atención especial.",
      tipoAsiento: "Primera Clase.",
      precioAsiento: 35 
    },
    Turista: {
      asientoDescription: "La mejor categoría calidad-precio",
      tipoAsiento: "Clase Turista.",
      precioAsiento: 20
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
    const boton = document.getElementById('botonContinuar');

    //traer todos los elementos con clase "a"
    const elementos = document.querySelectorAll('.a');
    //aplicar un on click a todos los elementos "a"
    elementos.forEach(function(elemento) {
    elemento.addEventListener('click', function(event) {
        const id = event.currentTarget.id;
        console.log("ID del elemento clickeado:", id);
        /*if(elemento.target.class == "asiento"){
            openModal("turista", id);
        }else if(elemento.target.class == "Pasiento"){
            openModal("premium", id);
        }else{
            openModal("ocupado", id)
        }*/
        openModal("turista", id); //PREDETERMINADO TURISTA PARA PRUEBAS DE MODAL, CAMBIAR POR IF CUANDO DESCUBRA COMO SELECCIONAR CLASE DEL HIJO
    });
    });

    //Abrir modal, base tipo e id.
    function openModal(type, id){
        if (type == "turista"){
            idAsiento.textContent = id;
            tipoAsiento.textContent = asientos.Turista.tipoAsiento;
            asientoDescription.textContent = asientos.Turista.asientoDescription;
            precioAsiento.textContent = asientos.Turista.precioAsiento + "€";
            boton.classList.remove('hidden');
        }else if (type == "premium"){
            idAsiento.textContent = id;
            tipoAsiento.textContent = asientos.Premium.tipoAsiento;
            asientoDescription.textContent = asientos.Premium.asientoDescription;
            precioAsiento.textContent = asientos.Premium.precioAsiento+ "€";
            boton.classList.remove('hidden');
        }else if (type == "ocupado"){
            idAsiento.textContent = id;
            tipoAsiento.textContent = asientos.Ocupado.tipoAsiento;
            asientoDescription.textContent = asientos.Ocupado.asientoDescription;
            precioAsiento.textContent = asientos.Ocupado.precioAsiento+ "€";
            boton.classList.add('hidden');
        }
        modal.classList.remove('hidden');
    }


 

  // Cerrar modal
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // cerrar si clicas fuera del contenido modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });