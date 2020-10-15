import { Component, OnInit } from '@angular/core';
// Para poder hacer peticiones a la api en mi componente:
// 1. importo el servicio peticiones que he creado
// 2. lo cargo en mi array de providers
// 3. lo inyecto dentro de una propiedad en mi constructor y nombro el servicio como _peticionesService
// Ya puedo utilizar el servicio dentro de mi ngOnInit
import { PeticionesService} from "../service/peticiones.service";

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any; //creo la propiedad user, cuyo tipado puede ser cualquiera para recoger los usuarios
  public idUsuario: number;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.idUsuario = 1; //le damos por defecto el valor 1
  }

  ngOnInit(){
    //utilizo el método subscribe que me va a devolver un observable que me permite recoger el resultado que devuelve la petición AJAX
    //El método subscribe tiene dos funciones callback:
    // * Una recoge el resultado
    // * La otra recoger el error

    //LO CAMBIAMOS PARA QUE SE CARGUE CUANDO USEMOS EL MÉTODO cargaUsuario()
    /*
    this._peticionesService.getUser().subscribe(
      result => {
        this.user = result.data;//Esto me va a guardar el resultado de la petición en la variable user
        console.log(this.user);
      },
      error => {
        console.log(<any>error);
      }
    )
     */
    this.cargaUsuario();
  }

  //Creo este método para que cuándo presione la letra enter en mi input se me cargue el usuario
  cargaUsuario(){
    this.user = false;//Ponemos esto para que se vea el mensaje de cargando del externo.component.html al cambiar de usuario.
    //this._peticionesService.getUser().subscribe(
    // añado parámetros a getUser para poder elegir el usuario que quiero que dibuje desde el input
    this._peticionesService.getUser(this.idUsuario).subscribe(
      result => {
        this.user = result.data;//Esto me va a guardar el resultado de la petición en la variable user
        console.log(this.user);
      },
      error => {
        console.log(<any>error);
      }
    )

  }

}
