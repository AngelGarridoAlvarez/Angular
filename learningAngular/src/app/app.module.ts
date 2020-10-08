import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideogameComponent} from "./videogame/videogame.component";
import {ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { CursosComponent } from './cursos/cursos.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
