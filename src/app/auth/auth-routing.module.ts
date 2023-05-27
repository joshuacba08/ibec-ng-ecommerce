// vamos a escribir un modulo de rutas para el modulo de autenticacion
//importaciones
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importar componentes
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



//definir rutas
const routes: Routes = [
  {
    path: 'login', // /auth/login
    component: LoginComponent,
  },
  {
    path: 'register', // /auth/register
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login' // redirecciona a login si no encuentra la ruta o por defecto
  }
]

//decorador
@NgModule({
  imports: [
    RouterModule.forChild(routes) // forChild porque es un modulo hijo
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }


