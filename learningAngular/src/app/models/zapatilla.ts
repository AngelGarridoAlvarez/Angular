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
