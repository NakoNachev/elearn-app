import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'move-match',
  templateUrl: './match-move.component.html',
  styleUrls: ['./match-move.component.css']
})

export class match_move{
  start = ['Deadly Nightshade', 'Cobra'];
  pois = [];
  ven = [];

  drop(event: CdkDragDrop<string[]>){
    if(event.previousContainer == event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }else{
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}