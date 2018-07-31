import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { IndexComponente } from './componentes/index';

import { SlideComponente } from './componentes/slide';

import { GaleriaComponente } from './componentes/galeria';

import { EfectoMouseComponente } from './componentes/efectoMouse';

import { ScrollComponente } from './componentes/scroll';

import { FormularioComponente } from './componentes/formulario';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponente,
    SlideComponente,
    GaleriaComponente,
    EfectoMouseComponente,
    ScrollComponente,
    FormularioComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
