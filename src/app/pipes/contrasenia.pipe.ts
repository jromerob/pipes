import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {
  transform(value: string, activo: boolean): string {

    if (activo) {
      let valueActivo: string="";
      for (let i = 0; i <= value.length; i++) {
        valueActivo += '*';
      }
      return valueActivo;
    }
    return value;
  }
}
