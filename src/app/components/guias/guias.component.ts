import { Component, OnInit, Input } from '@angular/core';
import { Guia } from '../../models/guia.model'; //Tipado
import { GuiasService } from '../../services/guias.service'; //Tipado


@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.scss']
})

//export class GuiasComponent{
export class GuiasComponent implements OnInit{
 //@Input() guias: Guia[] = [];
 guias: Guia[] = [];

  //guias: any = [];
/*
  constructor(
    private guiasService: GuiasService
  ){ }
*/
  constructor(
    private guiasService: GuiasService)
   { console.log('El componente se ha creado') }

 
  ngOnInit(): void {
    this.guiasService.getAllGuias()
    .subscribe(data => {
    this.guias = data
    console.log(this.guias);   
  });
  }


/*
  ngOnInit(): void {
    console.log('el componente se ha iniicializado'); 
    this.guiasService.getAllGuias().subscribe((Response: any) => this.guias = Response ) ;
  }*/

}