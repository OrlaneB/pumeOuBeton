import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Action } from '../../utilities/types/action.type';
import actions from '../../utilities/actions';

@Component({
  selector:"display-actions",
  templateUrl:"./displayActions.component.html",
  styleUrl:"./displayActions.component.css",
  standalone:true
})
export class displayActions implements OnInit {

  actionsList:Action[] = [];
  sortedActionsList:Action[] = [];
  @Input() choiceLocked:boolean = false;
  @Input() typeOfGame!:string;

  @Output() restartButtonClicked = new EventEmitter<void>();


  ngOnInit(): void {
    let randomNumbers = new Set<number>();

    while(randomNumbers.size!==8){
      let num = Math.floor(Math.random()*20);

      randomNumbers.add(num);
    }

    randomNumbers.forEach((num:number)=>this.actionsList.push(actions[num]));

    this.sortedActionsList = [...this.actionsList].sort((a:Action,b:Action)=>{

      if(a[this.typeOfGame as "eau" | "co2"]<b[this.typeOfGame as "eau" | "co2"]) {
        return 1
      } else {
        return -1
      }
    })


  }

  onChangePlacement(index:number,up:boolean){

    const newIndex = up ? index-1 : index+1 ;
    if(newIndex<0 || newIndex>7) return;

    let newActionsList = [...this.actionsList];

    const thisAction = newActionsList[index];
    newActionsList.splice(index,1);
    newActionsList.splice(newIndex,0,thisAction)

    this.actionsList = newActionsList;
  }

  restartGame(){

    this.actionsList=[];
    this.sortedActionsList=[];

    this.restartButtonClicked.emit();
  }

}
