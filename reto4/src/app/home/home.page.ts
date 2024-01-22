import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombres = ['Juan', 'Pedro', 'María'];
  nombre: string = '';
  seleccionados: string[] = [];
  seleccionado: string = '';

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    console.log('Servicio de almacenamiento inicializado.');
    this.cargarLista(); // Cargar la lista al iniciar la página
  }

  agregarNombre() {
    if (/^[a-zA-Z]+$/.test(this.nombre.trim())) {
      this.nombres.push(this.nombre.trim());
      this.nombre = '';
      this.guardarLista(); // Guardar la lista al agregar un nombre
    } else {
      alert('Por favor, ingresa un nombre válido.');
    }
  }

  eliminarNombre(nombre: string) {
    this.nombres = this.nombres.filter(n => n !== nombre);
    this.guardarLista(); // Guardar la lista al eliminar un nombre
  }

  guardarLista() {
    const listaParaGuardar = JSON.stringify(this.nombres);

    this.storage.set('lista_nombres', listaParaGuardar)
      .then(_ => {
        console.log('Lista guardada con éxito.');
      })
      .catch(error => {
        console.error('Error al guardar la lista:', error);
      });
  }

  cargarLista() {
    this.storage.get('lista_nombres')
      .then(data => {
        if (data) {
          this.nombres = JSON.parse(data);
        }
      })
      .catch(error => {
        console.error('Error al cargar la lista:', error);
      });
  }

  ionViewDidEnter() {
    this.cargarLista();
  }
}
