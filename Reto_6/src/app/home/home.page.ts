import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Character {
  name: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string; // Propiedad para almacenar la URL de la imagen
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  characters: Character[] = [];

  constructor(public http: HttpClient) {
    this.fetchCharacters();
  }

  fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';

    this.http.get(url).subscribe((data: any) => {
      this.characters = data.results;

      // Obtener la URL de la imagen para cada personaje
      this.characters.forEach((character: Character) => {
        this.http.get(character.image).subscribe((detail: any) => {
          character.image = detail.image;
        });
      });
    });
  }
}
