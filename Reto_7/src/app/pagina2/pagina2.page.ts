import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page {
  nombres: string[] = [];

  constructor(private router: Router) {
    this.nombres = this.router.getCurrentNavigation()?.extras?.state?.['nombres'] ?? [];
  }
}