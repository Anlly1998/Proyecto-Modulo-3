import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Servicio para hacer consultas

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }



}
