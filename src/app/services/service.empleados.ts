import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Empleado } from "../models/empleado";

@Injectable()
export class SeviceEmpleados {
    constructor(private _http: HttpClient){

    }

    loginEmpleados(username: string, password: string): Observable<any> {
        let body = {
            userName: username,
            password: password
        };

        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");

        let urlLogin = environment.urlApiEmpleados;
        let request = "Auth/Login";

        return this._http.post(urlLogin + request, body, {headers: header});
    }

    getPerfilEmpleado(token: string): Observable<Empleado> {
        let urlEmpleado = environment.urlApiEmpleados;
        let request = "api/Empleados/PerfilEmpleado";

        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");
        header = header.set("Authorization", "bearer " + token);

        return this._http.get<Empleado>(urlEmpleado + request, {headers: header});
    }

    getSubordinados(token: string): Observable <Array<Empleado>> {
        let urlEmpleado = environment.urlApiEmpleados;
        let request = "api/Empleados/Subordinados";

        let header = new HttpHeaders();
        header = header.set("Content-Type", "application/json");
        header = header.set("Authorization", "bearer " + token);

        return this._http.get<Array<Empleado>>(urlEmpleado + request, {headers: header});
    }
}