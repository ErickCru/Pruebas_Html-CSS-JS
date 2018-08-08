import { Component } from '@angular/core';

// importamos la clase del servicio Slide
import { ServicioSlide } from '../servicios/slide.servicio';

@Component({

  selector: 'slide',
  templateUrl: '../vistas/slide.html',
  // Para generar estancias de los servicios
  providers: [ServicioSlide],

})

export class SlideComponente {

  public slideJson;

  constructor(private _ServicioSlide: ServicioSlide) {

    // Prueba del servicio
    // console.log(this._ServicioSlide.prueba);


    /* Peticiones http */
    this._ServicioSlide.tomarJsonSlide().subscribe(
      resultado => {
        this.slideJson = resultado;
        console.log('Resultado', this.slideJson[0]['titulo']);
      },
      error => {
       const mensajeError = <any> error;
       console.log(mensajeError);
      }
    );

  }

}
