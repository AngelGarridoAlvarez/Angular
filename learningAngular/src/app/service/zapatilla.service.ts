import {Injectable} from "@angular/core";
//Como estamos utilizando el objeto Zapatilla, tenemos que importar su modelo de datos
import {Zapatilla} from "../models/zapatilla";


@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;
//El array de zapatillas ahora lo envío desde mi servicio, así que lo pongo aquí y lo quito del componente Zapatilla
  constructor() {
    this.zapatillas = [
      new Zapatilla('Ochenteras', 'Rebook', 'red and white', 59.95, false),
      new Zapatilla('Air Jordan', 'Nike', 'black', 119.90, true),
      new Zapatilla('New Balance Steve Jobs', 'New Balance', 'pure white', 69.90, true),
      new Zapatilla('Nike Air 1995', 'Nike', 'red', 129.90, false),
      new Zapatilla('Zapatillas del Carrefour', 'NISU', 'generic white', 19.90, true)
    ]
  }

  getTexto(){
    return "Hola Mundo desde un servicio"
  }

  //Creo un método para que me devuelva un array de objetos tipo Zapatilla
  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }

}
