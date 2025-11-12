import { Component, ViewChild, ElementRef } from '@angular/core';
import { SeviceEmpleados } from '../../services/service.empleados';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild("cajaUser") cajaUser!: ElementRef;
  @ViewChild("cajaPassword") cajaPassword!: ElementRef;

  constructor(private _service:SeviceEmpleados, private _router: Router){
    
  }

  loginEmpleados(): void {
    let user = this.cajaUser.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    this._service.loginEmpleados(user, password).subscribe(response => {
      console.log(response.response);
      environment.token = response.response;
      this._router.navigate(["/perfil"]);
    })
  }
}
