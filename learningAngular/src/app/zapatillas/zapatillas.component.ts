import {Component} from "@angular/core";
//Como estamos utilizando el objeto Zapatilla, tenemos que importar su modelo de datos
import {Zapatilla} from "../models/zapatilla";
//Además del modelo de datos, tenemos que importar el propio objeto Zapatillas:
import {ZapatillaService} from "../service/zapatilla.service";

@Component({ //Esto es un decorador
  selector: 'zapatillas', //Indico en que etiqueta de index.html se va a cargar el componente
  templateUrl: './zapatillas.component.html',// Indica cual es la vista de este componente
  providers: [ZapatillaService]//Añadimos ZapatillaService como un provider (un servicio de mi componente)
})

export class ZapatillasComponent {
  public titulo: string = "Componente Zapatillas"; //Esto no es buena práctica pero se puede hacer, mirar videogame.component para ver la buena práctica
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public miMarca: string;

  constructor(
    //En el constructor tengo que definir la propiedad _zapatillaService
    // La propiedad _zapatillaService empieza con guion bajo al tratarse de un servicio
    private _zapatillaService: ZapatillaService
  ) {
    this.miMarca = 'Fila';
    this.color = 'blue';
    this.marcas = new Array();
    /* Ahora este array de zapatillas me lo va ha devolver desde el servicio zapatillas.service.ts, por eso lo comento
    this.zapatillas = [
      new Zapatilla('Ochenteras', 'Rebook', 'red and white', 59.95, false),
      new Zapatilla('Air Jordan', 'Nike', 'black', 119.90, true),
      new Zapatilla('New Balance Steve Jobs', 'New Balance', 'pure white', 69.90, true),
      new Zapatilla('Nike Air 1995', 'Nike', 'red', 129.90, false),
      new Zapatilla('Zapatillas del Carrefour', 'NISU', 'generic white', 19.90, true)
    ]
     */
  }

  ngOnInit() {
    console.log(this.zapatillas);
    //a this.zapatillas le doy el valor del método que me da el array de Zapatillas para que los métodos de este mismo archivo me lo dibujen
    this.zapatillas = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto())

    this.getMarcas();
  }

  //El método getMarcas mete las marcas sin repetir en el array marcas.
  getMarcas() {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) { //En el caso de que no encuentre dentro del array marca la marca de zapatilla, indexOf(zapatilla.marca) será -1, solo en ese caso mete la marca en el array y así no se repite
        this.marcas.push(zapatilla.marca);
      }
    })
  }

  getMarca(){
    alert(this.miMarca)
  }

  addMarca(){
    this.marcas.push(this.miMarca)
  }

  borrarMarca(indice){
    //delete this.marcas[indice]
    this.marcas.splice(indice,1)
  }

  onBlur(){
    alert('has sacado el ratón del input y lo hemos detectado con el evento (blur)')
  }

  mostrarPalabra(){
    alert(`Como has presionado Enter, yo te muestro "${this.miMarca}", presiona ESC para no entrar en un bulce infinito`)
  }

}
