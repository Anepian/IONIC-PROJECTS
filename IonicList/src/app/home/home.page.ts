import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor=""
  nombres:string[]=[]
  constructor() {}
Agregar(){
  if(!!this.valor){
    this.nombres.push(this.valor)
    this.valor = ""
  }
}
}