import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: string,todas:boolean=true): string {
    value=value.toLowerCase();
    let nombres=value.split(" ");

    return nombres.join(" ");
  }
}
