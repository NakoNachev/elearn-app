import { Component, OnInit } from '@angular/core';
import  data from '../../data/work-choose-right-word.json'

@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.css']
})
export class ChooseWordComponent implements OnInit {

  sentences = data.data
  constructor() { }

  ngOnInit(): void {
  }

}
