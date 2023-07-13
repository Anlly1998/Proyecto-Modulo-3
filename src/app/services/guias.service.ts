import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Servicio para hacer consultas
import { Guia } from '../models/guia.model';

@Injectable({
  providedIn: 'root'
})
export class GuiasService {

  constructor(
    private http: HttpClient
  ) { console.log('Servicio HTTP')}

  //Metodo para mostrar todos las guias esperamos que las muestre en un array
  getAllGuias(){
    return this.http.get<Guia[]>('http://localhost:8000/api/guias'); //mostrar guias
  }
/*
  getAllGuias(): any {
    return this.http.get('http://localhost:8000/api/guias');
  }*/
}
