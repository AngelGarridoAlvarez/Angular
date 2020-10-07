# Angular

## INDICE

[1. Principaes comandos de Angular](#id1)
[1. Principaes comandos de Angular](#id2)
[1. Principaes comandos de Angular](#id3)

## 1. Principales comandos de Angular<a name="id1"></a>
[cli.angular.io](https://cli.angular.io/)

### 1.1. Instalar Angular
```shell
npm install -g @angular/cli
```
### 1.2. Crear un nuevo proyecto y hacerlo funcionar

```shell
ng new my-first-project
cd my-first-project
ng serve
```

## 2. Estructura de archivos Angular<a name="id2"></a>

* package.json - archivo principal de configuración del projecto
* angular.json - archivod e configuración de proyecto donde podemos cargar liberías y assets externos
* tslint y tsconfig - relativo a la connfiguración de typescript
* carpeta node_modules_ dónde se descargan todas las dependencias
* carpeta src: es la que modificamos nosotros
    * src/app: donde vamos a crear los componentes.

## 3. Elementos que conforman una APP de Angular:<a name="id3"></a>
* Componentes: 
    * elemento que cómpone la página SPA de Ángular
    * es una especie de controlador de la APP
    * cada componente va a tener una función

* Plantillas
    * Ficheros HTML
    * Definene la vista de los componentes
  
* Decoradores y Metadatos
    * Es un patrón de diseño que va a configurar los atributos o metadatos que describen a las clases y las relaciones.

* Servicios
    * Clases con un objetivo claro tales como:
        * facilitar la reutilización del código
        * Interactuar con un servicio RES
        
* Providers
    * Son servicios que nos proveen de datos o funcionalidades mediante sus métodos
    * Existen propios o de 3os
    
* Directivas
    * Funcionalidades aplicables al DOM y a los elementos HTML en las plantillas de un componenete
    * controlan que se vean elementos o no, dan estilos a elementos, etc.
    * Son nuevos tributos que se le aplican a nuestra plantilla o vista
    
## 4. Crear componentes:

Un componente es una parte de nuestra aplicación que se ve en pantalla.



Componente por defecto **app.component.ts**:
```jsx
import { Component } from '@angular/core'; //importamos el módulo que cargamos y desde dónde

@Component({ // Esto es un decorador
  selector: 'app-root', //Indico en que etiqueta de index.html se va a cargar el componente
  templateUrl: './app.component.html',// Indica cual es la vista de este coponentes
  styleUrls: ['./app.component.scss']// Indica el estilo del componente
})
export class AppComponent { //Exportamos la clase para poder utilizarla en otros archivos
  title = 'learningAngular - Aprendiendo JavaScript y Angular';
}
```

**Se pueden crear componentes de diferentes formas:**


### 4.1. Crear una carpeta por componente dentro de APP

Para crear componentes y hacer que se vean vamos a trabajar con 4 archivos:
Dentro de la carpeta src/app:
* app.component.ts --> hacemos los import del nuevo componente y cargo el componente de declarations
* app.component.html --> situamos el componente en el código html
Dentro de la carpeta del nuevo componente:
* nuevo-componente.component.ts --> Aquí hacemos export
* nuevo-componente.component.html --> Contiene el código html del componente

**Por ejemplo:**

* creamos app/videogame/
* Creamos videogame.component.ts y la vista  videogame.component.html

**videogame.component.ts**
* Aquí tengo que hacer el export:
```jsx
import  { Component} from "@angular/core";

@Component({
  selector: 'videogame',
  /*template: `
  <h2>Componente videojuego</h2>
  <ul>
    <li>Sea of thieves</li>
    <li>Fall Guys</li>
    <li>Half Life Source</li>
  </ul>
  `
   */
  templateUrl: './videogame.component.html'
})

export class VideogameComponent {
  public  titulo: string; // con estas propiedades vamos a hacer binding por interpolación en videogame.component.html
  public listado: string;

  constructor() {
    this.titulo = "Componente Videojuegos"; //
    this.listado = "Top Games"
    console.log('se ha cargado el componente: videogame.component.ts');
  }

}
```

**app.module.ts**
* Aquí tengo que hacer el import:
```jsx
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideogameComponent} from "./videogame/videogame.component";

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
**videogame.component.html**
```html
<h2>{{ titulo }}</h2> <!-- Hacemos binding por interporlación y nos traemos título y listado de las propiedades de videgame.component.ts--> 
<h4>{{ listado }}</h4>
<ul>
  <li>Sea of thieves</li>
  <li>Fall Guys</li>
  <li>Half Life Source</li>
</ul>

```

**app.component.html**
```html
<div>
  <h1>
    Bienvenido al {{ title }}!
  </h1>

  <p>Learning Angular together</p>
 <videogame> </videogame>
</div>
```

### 4.2. Crear Componentes usando consola 
* La opción más cómoda.
* Me evita tener que hacer los imports y los exports porque lo hace automáticamente.

```bash
ng g component my-new-component
```
![img](./img/descarga.png)
### 4.3 Otras formas de ordenar los componentes:
* Definir una carpeta de "components" donde tengamos todos los componentes.
* Definir una carpeta de "components" con las clases y una de views donde tuvieramos sus plantillas.

## 5. Hooks - Eventos durante el ciclo de vida del componente

* Son eventos del ciclo de vida del componente
* Son eventos que se ejecuntan en un momento dado del ciclo de vida del componente
* Eventos que se lanzan dependiendo del estado del componente
    * Cuando se incia el componente
    * Cuando hay algún cambio en él

### 5.1 OnInit
* Es un método que se ejecuta nada más cargar un componente
* Hay que importarlo, implmentarlo y ejecutarlo en el archivo del componente

**videogame.component.ts**
```ts
import  { Component, OnInit } from "@angular/core";

@Component({
  selector: 'videogame',

  templateUrl: './videogame.component.html'
})

export class VideogameComponent implements OnInit {
  public  titulo: string;
  public listado: string;

  constructor() {
    this.titulo = "Componente Videojuegos";
    this.listado = "Top Games"
    console.log('se ha cargado el componente: videogame.component.ts');
  }

  ngOnInit(){ //el método OnInit el que se ejecuta nada más cargar el componente
    console.log("OnInit ejecutado")
  }

}
```

### 5.2 DoChek
* Se ejecuta cada vez que hay un cambio en el componente o en la aplicación de Angular en general
* Hay que importarlo, implmentarlo y ejecutarlo en el archivo del componente

Implementamos DoCheck y creamos un método para cambiar el título:

**videogame.component.ts**
```ts
import  { Component, OnInit, DoCheck } from "@angular/core";

@Component({
  selector: 'videogame',
  /*template: `
  <h2>Componente videojuego</h2>
  <ul>
    <li>Sea of thieves</li>
    <li>Fall Guys</li>
    <li>Half Life Source</li>
  </ul>
  `
   */
  templateUrl: './videogame.component.html'
})

export class VideogameComponent implements OnInit, DoCheck {
  public  titulo: string; // con estas propiedades vamos a hacer binding por interpolación en videogame.component.html
  public listado: string;

  constructor() {
    this.titulo = "Componente Videojuegos";
    this.listado = "Top Games"
    console.log('se ha cargado el componente: videogame.component.ts');
  }

  ngOnInit(){ //el método OnInit el que se ejecuta nada más cargar el componente
    console.log("OnInit ejecutado")
  }

  ngDoCheck(){ //Se ejecuta cada vez que hay un cambio en el componente o en la aplicación de Angular en general
    console.log("DoCheck se ha ejecutado")
  }

  cambiarTitulo(){
    this.titulo = "Nuevo título del componente"
  }

}
```
Paralelamente creamos un botón en la vista del componente que ejecute el método cambiarTitulo();

**videogame.component.html**
```html
<h2>{{ titulo }}</h2> <!-- Hacemos binding por interporlación y nos traemos título y listado de las propiedades de videgame.component.ts-->
<h4>{{ listado }}</h4>
<ul>
  <li>Sea of thieves</li>
  <li>Fall Guys</li>
  <li>Half Life Source</li>
</ul>

<button (click)="cambiarTitulo()">Cambiar Título</button> <!-- Los eventos en angular se llaman entre paréntesis-->
```

Cada vez que pulsemos el botón se va a ejecutar el DoCheck también.

### 5.2 OnDestroy
* Se ejecuta cuando se elimina la instancia de un componente
* Se ejecuta cuando se elimine un componente dentro de su cliclo vida
* Hay que importarlo, implmentarlo y ejecutarlo en el archivo del componente

Utilizamos el hook OnDestroy() en el componente videojuegos
**videogame.component.ts**
```ts
import  { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: 'videogame',
  templateUrl: './videogame.component.html'
})

export class VideogameComponent implements OnInit, DoCheck, OnDestroy {
  public  titulo: string; // con estas propiedades vamos a hacer binding por interpolación en videogame.component.html
  public listado: string;

  constructor() {
    this.titulo = "Componente Videojuegos";
    this.listado = "Top Games"
    console.log('se ha cargado el componente: videogame.component.ts');
  }

  ngOnInit(){ //el método OnInit el que se ejecuta nada más cargar el componente
    console.log("OnInit ejecutado")
  }

  ngDoCheck(){ //Se ejecuta cada vez que hay un cambio en el componente o en la aplicación de Angular en general
    console.log("DoCheck se ha ejecutado")
  }

  cambiarTitulo(){
    this.titulo = "Nuevo título del componente"
  }

  ngOnDestroy(){ // Se ejecuta cuando se elimina la instancia de un componente
    console.log("OnDestroy se ha ejecutado")
  }

}
```

* Añadimos la propiedad mostrarVideojuegos, que por defecto será true
* Añadimos el método ocultarVideojuegosque nos sirva para ocultar el componente videogame, de esta forma cuando lo ocultemos se ejecutará OnDestroy
**app.component.ts**
```ts
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
```
* Con el condicional *ngIf hacemos que solo se muestre el componente videogame si mostrarVideojuegos es true
* Añadimos dos botones que hacen uso del método ocultarVideojuegos dentro y con *ngIf decimos en que caso se verá cada uno

**app.component.html**
```html
<div>
  <h1>
    Bienvenido al {{ title }}!
  </h1>

  <p>Learning Angular together</p>

  <videogame *ngIf="mostrarVideojuegos"></videogame>

  <button (click)="ocultarVideojuegos(false)" *ngIf="mostrarVideojuegos">Ocultar Videojuegos</button>
  <button (click)="ocultarVideojuegos(true)" *ngIf="!mostrarVideojuegos">Mostrar Videojuegos</button>

  <zapatillas></zapatillas>
  <app-cursos></app-cursos>


</div>
```

Ahora cada vez que pulsemos sobre ocultar videojuegos se ejecutará ngOnDestroy() . También se ejecutará ngDoCheck() al detectar cambios en el componente.


## 6. Clases y Modelos

### 6.1. Modelo de datos
* Es una clase con una serie de propiedades que representan a un entidad
* Ejemplo: entidad Zapatilla, entidad curso, entidad videogame

Creamos la carpeta **models** dentro de src/app para trabajar con los modelos.
Creamos el archivo **src/app/models/configuracion.ts**
Este archivo se puede llamr como quiera y puede ir en cualquier parte del directorio de app

**src/app/models/configuracion.ts**
```ts
//Creamos una variable con formato json que podamos exportar a otros archivos de mi applicación Angular

export var Configuracion = {
  color: "red",
  fondo: "#eee",
  titulo: "APP con Angular",
  descripcion: "Learning Angular together"
}
```

* En app.component.ts importamos Configuración.
* Dentro de la clase AppComponent incorporamos las propiedades que nos interesen de configuracion.ts:
* Ahora podemos llamar a estas propiedades desde su vista app.component.html
**src/app/app.component.ts**
```ts
import { Component } from '@angular/core';
import { Configuracion } from "./models/configuracion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'learningAngular';
  public descripcion: string;
  public config;
  public mostrarVideojuegos: boolean = true;

  constructor() {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.config = Configuracion
  }

  ocultarVideojuegos(valor){
    this.mostrarVideojuegos = valor;
  }
}
```

En App component.html: 
* incorporamos la directiva ngStyle para dar estilos
* Al haber importado configuracion.ts y haber incorporado sus propiedades a la clase app.component ahora puedo instanciar las propiedades directamente desde la vista de app.component

**src/app/app.component.html**
```html
<div [ngStyle]="{
                'background': config.fondo,
                'padding': '20px',
                'border': '5px solid black',
                'border-color': config.color
                }">
  <h1>
    Bienvenido al {{ title }}!
  </h1>

  <p>{{ descripcion }}</p>
  <button (click)="ocultarVideojuegos(false)" *ngIf="mostrarVideojuegos">Ocultar Videojuegos</button>
  <button (click)="ocultarVideojuegos(true)" *ngIf="!mostrarVideojuegos">Mostrar Videojuegos</button>

  <videogame *ngIf="mostrarVideojuegos"></videogame>
  <zapatillas></zapatillas>
  <app-cursos></app-cursos>


</div>
```

### 6.2 Creando el modelo de datos Zapatilla

* Este modelo nos servirá como "molde" para crear nuevos objetos
* creamos zapatillas.ts en la carpeta models

**src/app/models/zapatilla.ts**
```ts
export class Zapatilla{

  //Con TypeScript me puedo ahorrar el siguiente código como se muestra a continuación:
  /*
  //Propiedades:
  public nombre: string;
  public marca: string;
  public color: string;
  public precio: number;
  public stock: boolean;

  constructor(nombre, marca, color, precio, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
  }
   */

  constructor(
    public nombre: string,
  public marca: string,
  public color: string,
  public precio: number,
  public stock: boolean
  ){}

}
```

A continuación importo la clase Zapatilla en el componente Zapatillas que creamos con anterioridad
Y creo un constructor con un Array de objetos tipo Zapatilla

**src/app/zapatillas/zapatillas.component.ts**
```ts
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

  ngOnInit(){ //Gracias a este hook veremos por consola el array zapatilla al inicio del ciclo de vida del componente zapatillas.component 
    console.log(this.zapatillas)
  }
}
```

En la vista de zapatillas vamos a mostrar el array de zapatillas que hemos creado:

**src/app/zapatillas/zapatillas.component.html**
```html
<h2>{{ titulo }}</h2>
<p>Las zapatillas tienen que ir a juego con tu personalidad</p>
<ul>
  <li *ngFor="let deportiva of zapatillas">{{deportiva.nombre}} de color {{deportiva.color}} y de marca {{deportiva.marca}} cuesta {{deportiva.precio}}€</li>
</ul>
```

## Directivas
