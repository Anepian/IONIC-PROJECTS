import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombres: string[] = [];
  nombre: string = '';

  constructor(public navCtrl: NavController) {}

  agregarNombre() {
    if (this.nombre) {
      this.nombres.push(this.nombre);
      this.nombre = '';
    }
  }

  irPagina2() {
    this.navCtrl.navigateForward('/pagina2', { state: { nombres: this.nombres } });
  }
}
