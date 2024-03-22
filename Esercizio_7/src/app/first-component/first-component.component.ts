import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  clickBottone(link: string){
    window.open(link);
  }

  pokemon = [

  {nome:"STARYU", immagine:"https://media.pokemoncentral.it/wiki/5/52/Artwork0120_RFVF.png", colore:"blu"},

  {nome:"ARON", immagine:"https://media.pokemoncentral.it/wiki/thumb/9/90/Artwork0304_RZ.png/300px-Artwork0304_RZ.png", colore:"rosso" },

  {nome:"SAWK", immagine:"https://media.pokemoncentral.it/wiki/thumb/a/a9/Artwork0539_NB.png/300px-Artwork0539_NB.png", colore:"nero"},

  ]
}
