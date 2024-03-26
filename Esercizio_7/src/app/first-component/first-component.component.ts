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
  name = "inizio";
  clickBottone(link: string){
    window.open(link);
    
  }
  setBtn(nomeT: string){
    if(nomeT == "#120 STARYU" ){
      this.name = "#120 STARYU";
    }
    if(nomeT == "#304 ARON" ){
      this.name = "#304 ARON";
    }
    if(nomeT == "#539 SAWK" ){
      this.name = "#539 SAWK";
    }
   
  }
  pokemon = [

 
  {nome:"#120 STARYU", colore:"azzuro", tipo:"acqua", peso:"34,5 kg", altezza:"0,8 metri", posizione:"Route 8 (Good Rod, solo X)", tassocattura:"225 (39,9%)", immagine:"https://media.pokemoncentral.it/wiki/5/52/Artwork0120_RFVF.png", descrizione:"Staryu è un Pokémon introdotto in prima generazione. Si evolve in Starmie quando esposto ad una Pietraidrica.", abilita:"Risplendi (prima abilità), Alternacura (seconda abilità), Ponderazione (abilità speciale)", },

  {nome:"#304 ARON", colore:"grigio", tipo:"acciaio/roccia", peso:"60,0 kg", altezza:"0,4 metri", posizione:"Terminus Cave (solo X)", tassocattura:"180 (33,8%)", immagine:"https://media.pokemoncentral.it/wiki/thumb/9/90/Artwork0304_RZ.png/300px-Artwork0304_RZ.png" , descrizione:"Aron è un Pokémon introdotto in terza generazione. Si evolve in Lairon a partire dal livello 32 e quindi in Aggron a partire dal livello 42.", abilita:"Vigore (prima abilità), Testadura (seconda abilità), Metalpesante (abilità speciale)",},

  {nome:"#539 SAWK", colore:"oro", tipo:"lotta", peso:"51,0 kg", altezza:"1,4 metri", posizione:"Kalos Route 11 (versione X); Trade from X Version; Friend Safari", tassocattura:"45 (11,9%)", immagine:"https://media.pokemoncentral.it/wiki/thumb/a/a9/Artwork0539_NB.png/300px-Artwork0539_NB.png", descrizione:"Sawk è un Pokémon introdotto in quinta generazione. Non si evolve da o in nessun altro Pokémon.", abilita:"Vigore (prima abilità), Forza Interiore (seconda abilità), Rompiforma (abilità speciale)",},

  ]
}
