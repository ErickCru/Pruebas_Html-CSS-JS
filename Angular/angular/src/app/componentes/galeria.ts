import { Component } from '@angular/core';

import { ServicioGaleria } from '../servicios/galeria.servicio';

@Component({

  selector: 'galeria',
  templateUrl: '../vistas/galeria.html',

})

export class GaleriaComponente {

  constructor(private _ServicioGaleria: ServicioGaleria) {

    // Prueba del servicio
    console.log(this._ServicioGaleria.prueba);

  }
}
