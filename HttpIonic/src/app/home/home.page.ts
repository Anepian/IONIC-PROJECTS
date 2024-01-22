import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Customer {
  Name: string;
  Country:string;
  City: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  registros: Customer[] = [];

  constructor(public http: HttpClient) {
    this.cargar();
  }

  cargar() {
    const uri = 'https://www.w3schools.com/angular/customers.php';

    this.http.get(uri).subscribe((data:any) => {
      this.registros = data.records;
      console.log(data);
    });
  }
}