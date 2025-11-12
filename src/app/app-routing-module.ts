import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado.component/perfil-empleado.component';
import { SubordinadosComponent } from './components/subordinados.component/subordinados.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "perfil", component: PerfilEmpleadoComponent },
  { path: "subordinados", component: SubordinadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
