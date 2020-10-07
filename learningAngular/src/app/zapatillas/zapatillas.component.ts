import { Component } from "@angular/core";
import { Zapatilla} from "../models/zapatilla";

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
  public  titulo: string = "Componente Zapatillas"; //Esto no es buena práctica pero se puede hacer, mirar videogame.component para ver la buena práctica
  public zapatillas: Array<Zapatilla>;

  constructor() {
    this.zapatillas = [
      new Zapatilla('Air Jordan', 'Nike', 'black', 119.90,true),
      new Zapatilla('New Balance Steve Jobs', 'New Balance', 'pure white', 69.90,true),
      new Zapatilla('Nike Air 1995', 'Nike', 'red', 129.90,false),
      new Zapatilla('Zapatillas del Carrefour', 'NISU', 'generic white', 19.90,true)
    ]
  }

  ngOnInit(){
    console.log(this.zapatillas)
  }
}
