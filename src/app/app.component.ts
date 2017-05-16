import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Juan Carlos';
  array = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  PI = Math.PI;
  porcentaje = 0.234;
  importe = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: '19'
    }
  };
}
