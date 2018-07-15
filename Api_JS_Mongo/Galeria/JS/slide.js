/*  
Objeto con las propiedades del slide
*/

var propiedades = {
    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: "slide",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    velocidadSlide: 3000,
    formatearLoop: false,
}

/* 
Objeto con los métodos del slide
*/

var metodos ={
    inicioSlide: function () {
        /*  propiedades.paginacion.forEach(element => {
            element.addEventListener("click", metodos.paginacionSlide)
        });
        */
       for(var i = 0; i<propiedades.paginacion.length; i++){
           propiedades.paginacion[i].addEventListener("click", metodos.paginacionSlide);
           propiedades.imgSlide[i].style.width = 100 / propiedades.paginacion.length + "%";
        }

        propiedades.avanzar.addEventListener("click",metodos.avanzar);

        propiedades.retroceder.addEventListener("click",metodos.retroceder);

        metodos.intervalo();

        propiedades.cajaSlide.style.width = propiedades.paginacion.length * 100 + "%";
        
    },
    paginacionSlide: function (item) {
        propiedades.item = item.target.parentNode.getAttribute("value")-1;

        metodos.movimientoSlide(propiedades.item);

    },
    avanzar: function () {
        if(propiedades.item == propiedades.imgSlide.length-1){
            propiedades.item = 0;
        }
        else{
            propiedades.item++;
        }
        
        metodos.movimientoSlide(propiedades.item)
    },
    retroceder: function () {
        if (propiedades.item == 0) {
            propiedades.item = propiedades.imgSlide.length-1;
        }
        else {
            propiedades.item--;
        }
        metodos.movimientoSlide(propiedades.item);
    }
    ,
    movimientoSlide: function(item){

        propiedades.formatearLoop = true;

        propiedades.cajaSlide.style.left = item * -100+"%";
        
        /* propiedades.paginacion.forEach(element => {
            element.style.opacity = 0.5;
        }); */

        for (var i = 0; i < propiedades.paginacion.length; i++) {
            propiedades.paginacion[i].style.opacity = 0.5;
        }

        propiedades.paginacion[item].style.opacity = 1;

        if (propiedades.animacionSlide == "slide") {
          propiedades.cajaSlide.style.transition = "1s left ease-in-out"; /* modo de deslizamiento */
        }

        else if (propiedades.animacionSlide == "fade") {
            
            propiedades.imgSlide[item].style.opacity = 0;
           
            propiedades.imgSlide[item].style.transition = "0.7s opacity ease-in-out";

            setTimeout(function () { 
                propiedades.imgSlide[item].style.opacity = 1;
            },500)
        }
        
    },
    intervalo: function () {

        setInterval(function(){
            if(propiedades.formatearLoop){
                propiedades.formatearLoop = false;
            }
            else{
                metodos.avanzar();
            }
            
        },propiedades.velocidadSlide)
    }
}

metodos.inicioSlide();