import { Component } from '@angular/core';
import { Configuracion } from "./models/configuracion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'learningAngular';
  public descripcion: string;
  public config;
  public mostrarVideojuegos: boolean = true;

  constructor() {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion
  }

  ocultarVideojuegos(valor){
    this.mostrarVideojuegos = valor;
  }
}
