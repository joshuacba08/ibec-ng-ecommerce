import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    // Components
    NavbarComponent,
    ButtonComponent
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
  ]
})
export class SharedModule { }
