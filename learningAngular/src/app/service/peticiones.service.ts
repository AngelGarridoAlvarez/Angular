//Este servicio va ahacer peticiones AJAX a un servidor
import {Injectable} from "@angular/core"; //Para poder inyectar nuestro servicio en otras clases
import {HttpClient, HttpHeaders} from "@angular/common/http"; //Nos permiten hacer peticiones AJAX y  modificar sus cabeceras
import { Observable } from "rxjs"; //Recoge la información que nos devuelve el API REST cuando hacemos una petición

@Injectable() //Utilizamos el decorador injectable, pasándole como parámetro la clase que vamos a importar sobre la clase que vamos a exportar
export class PeticionesService{
  public url: string; //definimos la propiedad url

  constructor(
    public _http: HttpClient //definimos el servicio _http con HttpClient para hacer peticiones AJAX
  ) {
    this.url = 'https://reqres.in/'; //asignamos a la propiedad url el valor correspondiente a la API dónde vamos a hacer las peticioens
  }

  /*
  getUser(): Observable<any>{//Creamos el método getUser para que nos devuelva los usuarios de la url de la API
    return this._http.get(this.url+'api/users/2')
  }
*/
  //Modifico getUser para que no siempre me devuelva el usuario 2 sino el que yo le pida en mi formulario de externo.component.html
  getUser(idUsuario): Observable<any>{//Creamos el método getUser para que nos devuelva los usuarios de la url de la API
    return this._http.get(this.url+'api/users/' + idUsuario)
  }

}
