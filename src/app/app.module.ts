import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/main/home/home.component';
import { NavComponent } from './nf/nav/nav.component';
import { FooterComponent } from './nf/footer/footer.component';
import { BodyComponent } from './b/body/body.component';
import { TableroComponent } from './T/tablero/tablero.component';
import { RegistroComponent } from './R/registro/registro.component';
import { IconosComponent } from './L/iconos/iconos.component';
import { ListasComponent } from './L/listas/listas.component';
import { PagoComponent } from './P/pago/pago.component';
import { HistorialComponent } from './H/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    TableroComponent,
    RegistroComponent,
    IconosComponent,
    ListasComponent,
    PagoComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
