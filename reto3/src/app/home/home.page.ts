import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  option: string = '';
  selectedOption: string = '';
  showAlert: boolean = false;

  constructor(public alertController: AlertController) {}

  async onSubmit() {
    this.selectedOption = this.option;
    this.showAlert = true;

    const alert = await this.alertController.create({
      header: 'Opción seleccionada',
      subHeader: '',
      message: this.selectedOption,
      buttons: ['OK']
    });

    await alert.present();
  }

  dismissAlert() {
    this.showAlert = false;
  }
}