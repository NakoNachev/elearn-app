import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explanations-card',
  templateUrl: './explanations-card.component.html',
  styleUrls: ['./explanations-card.component.css']
})
export class ExplanationsCardComponent implements OnInit {

  @Input() topic: string
  @Input() text: string
  @Input() category: string

  constructor() { }

  ngOnInit(): void {
  }

}
