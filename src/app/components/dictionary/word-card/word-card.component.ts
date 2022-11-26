import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent implements OnInit {

  @Input() word: string
  @Input() wordType: string
  @Input() translation: string
  @Input() transcription: string

  constructor() { }

  ngOnInit(): void {
  }

}
