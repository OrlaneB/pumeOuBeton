import { Component, Input } from '@angular/core';
import { displayActions } from '../displayActions/displayActions.component';

@Component ({
  selector:"game",
  templateUrl:"./game.component.html",
  styleUrl:"./game.component.css",
  imports:[displayActions],
  standalone:true
})

export class Game {
  choiceLocked:boolean=false;
  @Input() typeOfGame:string="";
}
