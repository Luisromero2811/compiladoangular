import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/main/home/home.component';

import { RegistroComponent } from './R/registro/registro.component';
import { HistorialComponent } from './H/historial/historial.component';
import { ListasComponent } from './L/listas/listas.component';
import { PagoComponent } from './P/pago/pago.component';

import { TableroComponent } from './T/tablero/tablero.component';
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  //Ruta hacia el registro de alumnado
  {path: 'Registro', component: RegistroComponent},
  //Ruta para tablero
  {path: 'Tablero', component: TableroComponent},
  //Ruta hacia el historial de alumnado
  {path: 'Historial', component: HistorialComponent},
  //Ruta hacia el listado de alumnado
  {path: 'Listas', component: ListasComponent},
  //Ruta hacia el pago de alumnado
  {path: 'Pago', component: PagoComponent},
  {path:'home', component: HomeComponent},
   //Ruta de default para reedirigir a login
   {path: '', redirectTo:'/login', pathMatch: 'full'},
  //Ruta no existente redirige al login
  {path: '**', redirectTo: '/login'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
