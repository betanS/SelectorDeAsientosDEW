## Enunciado

Diseñar una página web para reservar butacas de avión con origen **Arrecife (ACE)** y destino **Madrid (MAD)**.

El flujo de la página será el siguiente:

1. El usuario elige una de las tres compañías aéreas disponibles. Cada compañía utiliza un modelo de avión diferente, con distinto número de asientos y precios según las tres categorías de billete: **business, económica y low-cost**. Todo se presentará mediante **tablas HTML**.

2. Cada avión será un **objeto JavaScript** con al menos las siguientes propiedades:  
   - Número de filas de asientos  
   - Número de columnas de asientos  
   - Nombre de la compañía  
   - Precio base del billete (que se incrementa según la clase)  
   - Una **matriz** que indica si los asientos están libres u ocupados  
   - Al menos **dos métodos**: reservar plazas y liberar plazas  

3. La página mostrará una **tabla HTML** generada con `document.write()` que incluya:  
   - Todos los asientos diferenciando las tres categorías  
   - Precios de cada asiento  
   - Disponibilidad (verde si libre, rojo si ocupado)  

4. Al terminar la elección, se calculará el precio total considerando si el usuario es **residente** o no. De ser residente, se aplicará un **75% de descuento**.

5. Se preguntará si desea **cambiar su elección**, repitiéndose el proceso en caso afirmativo.

6. Toda la interacción con el usuario se realizará mediante **prompts** y **alerts**.

7. La implementación debe usar **archivos separados**:  
   - `.js` para la lógica de JavaScript  
   - `.css` para estilos  
   - `index.html` como página principal  
   - Archivos `.html` adicionales si se necesitan para cada compañía  
   - Incluir imágenes en la misma carpeta y comprimirla con tu nombre para subir a la plataforma.

---

## Evaluación

| Criterio | Valoración |
|---------|------------|
| Sangrado y comentarios correctos. Nombres de variables en camelCase y significativos con comentarios, mensajes y menús | KO = 0,75 |
| Al menos una página principal y tres más (una por compañía) con enlaces entre ellas, donde se crearán las tablas en HTML | OK = 1 |
| Robustez y manejo de errores. Optimización del código mediante funciones modulares | KO = 0,5 |
| Uso correcto del DOM (solo accediendo con getElementBy...) | KO = 0,75 |
| Modularidad (Funciones modulares para cada tarea) | OK = 1 |
| Uso de Arrays para la gestión de datos | KO = 0 |
| Uso de Objetos | OK = 1 |
| Uso de constructores para declarar objetos | KO = 0 |
| Uso correcto de eventos JavaScript: onclick, onmouseover, onmousedown, onmouseup; no usar eventos HTML; addEventListener solo cuando sea necesario acumular eventos | KO = 0,5 |
| Uso de almacenamiento local (localStorage) para aeronaves generadas y sessionStorage para asientos de compras por sesión | KO = 0,5 |
