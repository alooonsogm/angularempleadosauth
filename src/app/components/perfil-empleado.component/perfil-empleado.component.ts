import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { SeviceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-perfil-empleado',
  standalone: false,
  templateUrl: './perfil-empleado.component.html',
  styleUrl: './perfil-empleado.component.css',
})
export class PerfilEmpleadoComponent implements OnInit{
  public token!: string;
  public empleado!: Empleado;

  constructor(private _router: Router, private _service: SeviceEmpleados){

  }

  ngOnInit(): void {
    this.token = environment.token;

    this._service.getPerfilEmpleado(this.token).subscribe(response => {
      this.empleado = response;
    })
  }

  llevarFormulario(): void {
    this._router.navigate(["/login"]);
  }
}
