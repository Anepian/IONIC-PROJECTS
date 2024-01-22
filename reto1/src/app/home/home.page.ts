import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name = '';
  surname = '';
  email = '';

  showWelcome() {
    alert(`Bienvenido, ${this.name} ${this.surname}! Su correo electrónico es ${this.email}`);
  }

}