// Importamos los módulos del router de Anglular

import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from "@angular/router";

// Importar Componentes

import { HomeComponent} from "./home/home.component";
import {ZapatillasComponent} from "./zapatillas/zapatillas.component";
import {VideogameComponent} from "./videogame/videogame.component";
import {CursosComponent} from "./cursos/cursos.component";

// Array de rutas

const appRoutes: Routes = [ //Creo la constante appRoutes que tiene que tener formato tipo Routes, en la que vamos a meter objetos json

  {path: '', component: HomeComponent},// Este es el componente que se me va a marcar por defecto
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videogame', component: VideogameComponent},
  {path: 'cursos', component: CursosComponent},
  {path: '**', component: HomeComponent},//Esta es la ruta que se me cargará si pongo una ruta que no existe. Tiene que ir en última posición.
];

// Exportar el modulo del router

export  const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)
