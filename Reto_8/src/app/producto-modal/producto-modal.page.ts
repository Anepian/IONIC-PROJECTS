import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.page.html',
  styleUrls: ['./producto-modal.page.scss'],
})
export class ProductoModalPage {
  nuevoProducto = {
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: 0,
    imageUrl: ''
  };

  constructor(public modalController: ModalController) {}

  guardarProducto() {
    // Validaciones, por ejemplo, que los campos no estén vacíos, se pueden agregar aquí.

    this.modalController.dismiss(this.nuevoProducto);
  }

  cerrarModal() {
    this.modalController.dismiss();
  }
}
