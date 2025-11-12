import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { SeviceEmpleados } from '../../services/service.empleados';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-subordinados',
  standalone: false,
  templateUrl: './subordinados.component.html',
  styleUrl: './subordinados.component.css',
})
export class SubordinadosComponent implements OnInit{
  public token!: string;
  public arraySubordinados!: Array<Empleado>;

  constructor(private _router: Router, private _service: SeviceEmpleados){

  }

  ngOnInit(): void {
    this.token = environment.token;

    this._service.getSubordinados(this.token).subscribe(response => {
      this.arraySubordinados = response;
    })
  }

  llevarFormulario(): void {
    this._router.navigate(["/login"]);
  }
}
