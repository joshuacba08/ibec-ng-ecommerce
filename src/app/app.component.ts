import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-app';

  // declaro variables o propiedades de la clase
  frutas = [
    'manzana',
    'pera',
    'naranja',
    'sandia',
    'melon',
    'platano',
    'uva',
    'cereza',
    'fresa',
  ]



}
