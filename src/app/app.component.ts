import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Juan Carlos';
  nombre2 = 'Juan Carlos Romero Blanco';
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
  fecha = new Date('1972-10-25');
  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llegaron los datos'), 3500);
  });

  youtubeUrl = 'https://www.youtube.com/embed/';
  video = 'RmUX6nFKNZk';


}
