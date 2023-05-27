import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';



@NgModule({
  declarations: [
    // Components
    NavbarComponent,
    ButtonComponent,
    Notfound404Component
  ],
  imports: [
    // Modules
    CommonModule,
  ],
  exports: [
    // Modules
    CommonModule,
    // Components
    NavbarComponent,
    ButtonComponent,
    Notfound404Component
  ]
})
export class SharedModule { }
