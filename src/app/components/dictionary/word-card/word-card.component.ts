import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'app/services/cookie.service';

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
  @Input() topicKey: string

  constructor(public cookieService: CookieService) { }

  ngOnInit(): void {
  }

  public markWordAsLearned(word: string) {
    const cookieValue = this.cookieService.getCookie(this.topicKey)
    if (!cookieValue) {
      this.cookieService.setCookie(this.topicKey, word + ',')
      return
    }
    let valuesAsArray: string[] = cookieValue.split(',')
    if (!valuesAsArray.includes(word)) {
      this.cookieService.setCookie(this.topicKey, cookieValue + word + ',')
    } else {
      valuesAsArray = valuesAsArray.filter(it => it !== word)
      switch (valuesAsArray.length) {
        case 0:
          this.cookieService.deleteCookie(this.topicKey)
          return
        case 1:
          if (valuesAsArray[0] == '') {
            this.cookieService.deleteCookie(this.topicKey)
            return
          }
          this.cookieService.setCookie(this.topicKey, word + ',')
          return
        default:
          this.cookieService.setCookie(this.topicKey, valuesAsArray.toString())
          return
      }

    }
  }

}
