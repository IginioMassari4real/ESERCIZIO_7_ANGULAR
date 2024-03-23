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

  {nome:"#120 STARYU", colore:"azzuro", tipo:"acqua", peso:"34,5 kg", altezza:"0,8 metri", posizione:"kanto #120, johto #169, hoenn #148, unima #238, kalos #034, alola #223, armatura#098", tassocattura:"225 (39,9%)",},

  {nome:"#304 ARON", colore:"grigio", tipo:"acciaio/roccia", peso:"60,0 kg", altezza:"0,4 metri", posizione:"hoenn #072, unima #166, kalos #099, corona #191", tassocattura:"180 (33,8%)", },

  {nome:"#539 SAWK", colore:"oro", tipo:"lotta", peso:"51,0 kg", altezza:"1,4 metri", posizione:"unima #268, kalos #098, galar #249", tassocattura:"45 (11,9%)",},

  ]
}
