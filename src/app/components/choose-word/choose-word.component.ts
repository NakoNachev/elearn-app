import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.css']
})
export class ChooseWordComponent implements OnInit {

  @Input() data

  constructor() { }

  ngOnInit(): void {
  }

}
