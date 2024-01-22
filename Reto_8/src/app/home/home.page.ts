import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoModalPage } from '../producto-modal/producto-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  productos: any[] = [];

  constructor(public modalController: ModalController) {
    this.cargarProductos();
  }

  async cargarProductos() {
    const productos = localStorage.getItem('productos');
    this.productos = productos ? JSON.parse(productos) : [];
  }

  async agregarProducto() {
    const modal = await this.modalController.create({
      component: ProductoModalPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.productos.push(dataReturned.data);
        localStorage.setItem('productos', JSON.stringify(this.productos));
      }
    });

    return await modal.present();
  }
}
