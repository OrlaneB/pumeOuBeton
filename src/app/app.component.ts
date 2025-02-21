import { Component, ChangeDetectorRef } from '@angular/core';
import { Game } from './components/game/game.component';

@Component({
  selector: 'app-root',
  imports: [Game],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plumeOuBeton';
  gameMode :string = "" ;
  gameStarted:boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  startGame(type:string,event:Event){

    event.preventDefault();
    event.stopPropagation();

    this.gameMode= type==="co2" ? "co2" : "eau";
    this.gameStarted=true;

    this.cdr.detectChanges();
  }
}
