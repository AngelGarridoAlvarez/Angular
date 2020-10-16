import { Pipe, PipeTransform} from "@angular/core";//Necesario para crear Pipes

//Uso decorador pipe
@Pipe({
  name: 'calculadora' //nombre que le voy a dar a mi pipe
})
export class CalculadoraPipe implements PipeTransform{
  // dato | calculadora: otroDato
  // param1              param2
//Usamos el método transform al que le tengo que pasar un valor y x argumentos:
  transform(valor: any, valorDos: any){
    let operaciones = `
    Suma: ${valor + valorDos} //
    Resta: ${valor - valorDos} //
    Multiplicación: ${valor * valorDos} //
    División: ${valor / valorDos}
    `;
    return operaciones;
  }
}
