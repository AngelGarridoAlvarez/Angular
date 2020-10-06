import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'learningAngular';
  public mostrarVideojuegos: boolean = true;

  ocultarVideojuegos(valor){
    this.mostrarVideojuegos = valor;
  }
}
