import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Agregar HTTPModule para trabajar con cabezares http
import { HttpModule } from '@angular/http';

// Importamos el componente que es donde estará la vista
import { AppComponent } from './app.component';

import { IndexComponente } from './componentes';

import { SlideComponente } from './componentes/slide';

import { GaleriaComponente } from './componentes/galeria';

import { EfectoMouseComponente } from './componentes/efectoMouse';

import { ScrollComponente } from './componentes/scroll';

import { FormularioComponente } from './componentes/formulario';

import { ApiComponente } from './componentes/api';

// Importamos los módulos de la ruta
import { routing, appRoutingProviders } from './app.rutas';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponente,
    SlideComponente,
    GaleriaComponente,
    EfectoMouseComponente,
    ScrollComponente,
    FormularioComponente,
    ApiComponente,
  ],
  imports: [
    BrowserModule,
    // Se carga el módulo de rutas
    routing,
    HttpModule,
  ],
  providers: [
    // Se carga el servicio que hace que el router se lance y funcione cada ruta
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
