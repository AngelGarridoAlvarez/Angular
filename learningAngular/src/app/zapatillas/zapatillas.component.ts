import {Component} from "@angular/core";
import {Zapatilla} from "../models/zapatilla";

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
  public titulo: string = "Componente Zapatillas"; //Esto no es buena práctica pero se puede hacer, mirar videogame.component para ver la buena práctica
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public miMarca: string;

  constructor() {
    this.miMarca = 'Fila';
    this.color = 'blue';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Ochenteras', 'Rebook', 'red and white', 59.95, false),
      new Zapatilla('Air Jordan', 'Nike', 'black', 119.90, true),
      new Zapatilla('New Balance Steve Jobs', 'New Balance', 'pure white', 69.90, true),
      new Zapatilla('Nike Air 1995', 'Nike', 'red', 129.90, false),
      new Zapatilla('Zapatillas del Carrefour', 'NISU', 'generic white', 19.90, true)
    ]
  }

  ngOnInit() {
    console.log(this.zapatillas);

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
