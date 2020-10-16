import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http"; //para poder hacer peticiones http
import { routing, appRoutingProviders} from "./app.routing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideogameComponent} from "./videogame/videogame.component";
import {ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { Home2Component} from "./home2/home2.component";
import { GoBackComponent } from './go-back/go-back.component';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe} from "./pipes/calculadora.pipe";
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [ //Aquí ponemos las declaraciones que yo hago y que no están por defecto en angular
    AppComponent,
    VideogameComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    Home2Component,
    GoBackComponent,
    ExternoComponent,
    CalculadoraPipe,//es una declaración que yo he hecho, el pipe que yo he creado
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule, //modulo para poder hacer peticiones http
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
