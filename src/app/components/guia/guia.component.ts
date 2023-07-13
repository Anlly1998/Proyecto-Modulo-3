import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guia } from '../../models/guia.model'; //Tipado

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.scss']
})

//export class GuiaComponent {
export class GuiaComponent implements OnInit {
  // la variable guia va a ser de tipo Guia (Tipado models) 
  //lo inicializamos en cero 
@Input() guia: Guia = {
    id: 0,
    created_at: '',
    updated_at: '',
    id_guia: 12345454,
    destinatario: 'anlly',
    users_id: 0,
    direccion: '',
  }

  @Output() addedGuia = new EventEmitter<Guia>();
  @Output() showGuia = new EventEmitter<Guia>();


  constructor(){}

  ngOnInit(): void {
    
  }
  onAddToCart() {
    this.addedGuia.emit(this.guia);
  }
}
