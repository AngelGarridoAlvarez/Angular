import { Component, OnInit } from '@angular/core';
import {Configuracion} from "../models/configuracion";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
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

  ngOnInit(): void {
  }
}
