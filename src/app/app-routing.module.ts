import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound404Component } from './shared/pages/notfound404/notfound404.component';

const routes: Routes = [
  {
    path:'auth',
    // lazy load para cargar el modulo auth (login y register) solo cuando se necesite
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'404',
    // carga el componente notfound404 de forma normal
    component: Notfound404Component
  },
  {
    path:'**',
    // cualquier otra ruta que no este definida en el sistema, redirecciona a 404
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot porque es el modulo principal
  exports: [RouterModule]
})
export class AppRoutingModule { }
