import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu.component/menu.component';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { SeviceEmpleados } from './services/service.empleados';
import { PerfilEmpleadoComponent } from './components/perfil-empleado.component/perfil-empleado.component';
import { SubordinadosComponent } from './components/subordinados.component/subordinados.component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    PerfilEmpleadoComponent,
    SubordinadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    SeviceEmpleados
  ],
  bootstrap: [App]
})
export class AppModule { }
