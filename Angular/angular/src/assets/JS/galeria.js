/* Propiedades de la galeria */

var PropiedadesGaleria = {
    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null, 
    cuerpoDom: document.querySelector("body"),
    lightbox: null,
    modal: null,
    animacionGaleria: "slideTop",


}

/* Metodos de la galeria */

var MetodosGaleria = {
    inicioGaleria: function(){
       for(var i = 0; i<PropiedadesGaleria.imgGaleria.length; i++){
           PropiedadesGaleria.imgGaleria[i].addEventListener("click",MetodosGaleria.capturaImagen);
       } 
        
    },
    capturaImagen: function(img){
        PropiedadesGaleria.rutaImagen = img.target;

        MetodosGaleria.lightbox(PropiedadesGaleria.rutaImagen);
    },
    lightbox: function(img){
        PropiedadesGaleria.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id","lightbox");
        PropiedadesGaleria.lightbox = document.querySelector("#lightbox");

        PropiedadesGaleria.lightbox.style.width = "100%";
        PropiedadesGaleria.lightbox.style.height = "100%";
        PropiedadesGaleria.lightbox.style.position = "fixed";
        PropiedadesGaleria.lightbox.style.zIndex = "10";
        PropiedadesGaleria.lightbox.style.background = "rgba(0,0,0,0.8)";
        PropiedadesGaleria.lightbox.style.top = 0;
        PropiedadesGaleria.lightbox.style.left = 0;

        PropiedadesGaleria.lightbox.appendChild(document.createElement("DIV")).setAttribute("id","modal");

        PropiedadesGaleria.modal = document.querySelector("#modal");

        PropiedadesGaleria.modal.innerHTML = img.outerHTML + "<div>X</div>"; /* Trae el contenido html */

        PropiedadesGaleria.modal.style.display = "block";
        PropiedadesGaleria.modal.style.position = "relative";

        PropiedadesGaleria.modal.childNodes[0].style.width = "100%";
        PropiedadesGaleria.modal.childNodes[0].style.border = "15px solid white";
        
        if(window.matchMedia("(max-width:1000px)").matches){
            PropiedadesGaleria.modal.style.width = "90%";
        }
        else{
            PropiedadesGaleria.modal.style.width = "60%";
        }    
        
        if (PropiedadesGaleria.animacionGaleria == "slideLeft") {
          PropiedadesGaleria.modal.style.top = "50%";
          PropiedadesGaleria.modal.style.left = 0;
          PropiedadesGaleria.modal.style.opacity = 0;

          setTimeout(function() {
            PropiedadesGaleria.modal.style.transition = "0.5s left ease";
            PropiedadesGaleria.modal.style.left = "50%";
            PropiedadesGaleria.modal.style.opacity = 1;
            PropiedadesGaleria.modal.style.marginLeft = -PropiedadesGaleria.modal.childNodes[0].width / 2 + "px";
            PropiedadesGaleria.modal.style.marginTop = -PropiedadesGaleria.modal.childNodes[0].height / 2 + "px";
          }, 50);
        } else if (PropiedadesGaleria.animacionGaleria == "slideTop") {
          PropiedadesGaleria.modal.style.top = "-100%";
          PropiedadesGaleria.modal.style.left = "50%";
          PropiedadesGaleria.modal.style.opacity = 0;

        setTimeout(function(){
            PropiedadesGaleria.modal.style.transition = "0.5s top ease";
            PropiedadesGaleria.modal.style.top = "50%";
            PropiedadesGaleria.modal.style.opacity = 1;
            PropiedadesGaleria.modal.style.marginLeft = -PropiedadesGaleria.modal.childNodes[0].width / 2 + "px";
            PropiedadesGaleria.modal.style.marginTop = -PropiedadesGaleria.modal.childNodes[0].height / 2 + "px";
          }, 50);
        } 
        else {
          PropiedadesGaleria.modal.style.top = "50%";
          PropiedadesGaleria.modal.style.left = "50%";
          PropiedadesGaleria.modal.style.opacity = 0;

            setTimeout(function() {
            PropiedadesGaleria.modal.style.transition = "0.5s opacity ease";
            PropiedadesGaleria.modal.style.opacity = 1;
            PropiedadesGaleria.modal.style.marginLeft = -PropiedadesGaleria.modal.childNodes[0].width / 2 + "px";
            PropiedadesGaleria.modal.style.marginTop = -PropiedadesGaleria.modal.childNodes[0].height / 2 + "px";
          }, 50);
        }
        
        
        PropiedadesGaleria.modal.childNodes[1].style.position = "absolute";
        PropiedadesGaleria.modal.childNodes[1].style.right = "5px";
        PropiedadesGaleria.modal.childNodes[1].style.top = "5px";
        PropiedadesGaleria.modal.childNodes[1].style.color = "red";
        PropiedadesGaleria.modal.childNodes[1].style.cursor = "pointer";
        PropiedadesGaleria.modal.childNodes[1].style.fontSize = "30px";
        PropiedadesGaleria.modal.childNodes[1].style.width = "40px";
        PropiedadesGaleria.modal.childNodes[1].style.height = "40px";
        PropiedadesGaleria.modal.childNodes[1].style.textAlign = "center";
        PropiedadesGaleria.modal.childNodes[1].style.background = "white";
        PropiedadesGaleria.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px";
        
        PropiedadesGaleria.modal.childNodes[1].addEventListener("click",MetodosGaleria.salirGaleria);

    },
    salirGaleria: function () {
        PropiedadesGaleria.lightbox.parentNode.removeChild(PropiedadesGaleria.lightbox);
    }
}

MetodosGaleria.inicioGaleria();