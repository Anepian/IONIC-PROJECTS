import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  option1 = false;
  option2 = false;
  option3 = false;

  selectedOptions: string[] = [];
  showAlert = false;

  constructor() { }

  ngOnInit() { }
  onSubmit() {
    this.selectedOptions = [
      this.option1 ? 'Opcion 1' : '',
      this.option2 ? 'Opción 2' : '',
      this.option3 ? 'Opción 3' : ''
    ];
  
    this.showAlert = true;
  
    setTimeout(() => {
      this.showAlert = false;
    }, 2000); // La alerta se ocultará después de 2000 ms (2 segundos)
  }
  

}