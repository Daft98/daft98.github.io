//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function (links) {
    //Agregar un evento click a cada uno
    links.addEventListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');
        //Quitar las clases de animacion que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
        //Agregar clase para animar su salida
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href ="/boletines";
        }, 600);
    })
})
