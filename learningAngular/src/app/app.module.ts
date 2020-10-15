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

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    Home2Component,
    GoBackComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule //modulo para poder hacer peticiones http
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
