import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from "../models/usuario";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario; //* Añadimos la propiedad usuario y decimos que es un objeto de tipo Usuario en nuestro contacto.component.ts

  constructor() {
    this.usuario = new ContactoUsuario('','','','')//Dejo los campos vacíos para rellenarlos con el formular
  }

  ngOnInit(): void {
  }

  enviar(form){ //* El parámetro que me llega desde la vista lo reseteo para que cada vez que de ha enviar se vacíen los campos
    form.reset();//Uso el método reset para limpiar el formulario
    console.log('evento enviar lanzado');//Cuando pulse a enviar se muestra este mensaje
    console.log(this.usuario);//Me recoge el objeto usuario que se ha lanzado
    alert('Formulario enviado correctamente')
  }

}
