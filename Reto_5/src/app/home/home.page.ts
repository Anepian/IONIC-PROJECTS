import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string = "";
  descripcion: string = "";
  cantidad: number = 0;
  precioCosto: number = 0;
  precioVenta: number = 0;
  urlFoto: string = "";
  productos: any[] = [];

  constructor() {}

  agregarProducto() {
    if (this.nombre && this.descripcion && this.cantidad && this.precioCosto && this.precioVenta) {
      const nuevoProducto = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        cantidad: this.cantidad,
        precioCosto: this.precioCosto,
        precioVenta: this.precioVenta,
        urlFoto: this.urlFoto
      };
      this.productos.push(nuevoProducto);
      // Limpiar los campos después de agregar el producto
      this.nombre = "";
      this.descripcion = "";
      this.cantidad = 0;
      this.precioCosto = 0;
      this.precioVenta = 0;
      this.urlFoto = "";
    }
  }
}
