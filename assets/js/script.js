

//3.1 Modifica la función para que reciba el elemento clickeado de forma de no
//tener que seleccionarlo nuevamente dentro de la función (1 Punto). Para
//obtener el puntaje debes entregar el 3 pintar.html válido funcionando en
//conjunto con el código modificado.

function pintar(elem){
ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar, ele);
    


//3.2. Modifica el código anterior para poder pasarle un color como argumento a la
//función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
//párrafo se debe pasar amarillo como color. 

function pintar(elem, color){
    
ele.style.backgroundColor = 'yellow'
}
    
ele1.style.backgroundColor = 'green'
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar, ele );

