import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public nombre: string; //Creo la propiedad nombre
  public followers: number;

  constructor( //Incluyo estas propiedades para poder pasar parametros
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  //Hago que al inicio use los parametros que le he pasado por página y me los devuelva por consola
  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre;
      //this.nombre = params['nombre']; otra forma de sacar el nombre en JS, como array asociativo
      this.followers = +params.followers;//pongo + para que lo convierta a tipo number
      console.log(this.nombre + " - " + this.followers + " followers")
    })
  }

  redirigir(){
    this._router.navigate(['/zapatillas'])
  }

}
