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

  {nome:"PIKACHU" },

  {nome:"CHARIZARD" },

  {nome:"SQUIRTLE" },


  ]
}
