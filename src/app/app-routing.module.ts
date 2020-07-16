import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },{
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Usuarios',
    component: UsuariosComponent
  }
  
]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  /* declarations: [],
  imports: [
    CommonModule
  ] */
})
export class AppRoutingModule { }
