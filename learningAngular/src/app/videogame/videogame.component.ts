import  { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: 'videogame',
  /*template: `
  <h2>Componente videojuego</h2>
  <ul>
    <li>Sea of thieves</li>
    <li>Fall Guys</li>
    <li>Half Life Source</li>
  </ul>
  `
   */
  templateUrl: './videogame.component.html'
})

export class VideogameComponent implements OnInit, DoCheck, OnDestroy {
  public  titulo: string; // con estas propiedades vamos a hacer binding por interpolación en videogame.component.html
  public listado: string;

  constructor() {
    this.titulo = "Componente Videojuegos";
    this.listado = "Top Games"
    console.log('se ha cargado el componente: videogame.component.ts');
  }

  ngOnInit(){ //el método OnInit el que se ejecuta nada más cargar el componente
    console.log("OnInit ejecutado")
  }

  ngDoCheck(){ //Se ejecuta cada vez que hay un cambio en el componente o en la aplicación de Angular en general
    console.log("DoCheck se ha ejecutado")
  }

  cambiarTitulo(){
    this.titulo = "Nuevo título del componente"
  }

  ngOnDestroy(){
    console.log("OnDestroy se ha ejecutado")
  }

}
