import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MultipleChoiceData } from 'app/models/multiple-choice.model';
import { CookieService } from 'app/services/cookie.service';
export interface AnswersTracker {
  gameId: number
  currentAnswers: string[]
}
@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.css']
})


export class ChooseWordComponent implements OnInit, OnChanges {

  @Input() data: MultipleChoiceData[]
  @Input() gameId: number
  @Input() gameType: string
  @Input() gameKey: string

  private currentAnswers: string[]
  public showAnswers: boolean = false
  public disableShowAnswersButton: boolean = true
  constructor(private readonly cookieService: CookieService) { }

  ngOnInit(): void {
    if (this.data && this.gameId) this.loadDefaultAnswers()
    this.showAnswers = false
    this.disableShowAnswersButton = true
  }

  ngOnChanges(): void {
    if (this.data && this.gameId) this.loadDefaultAnswers()
    this.showAnswers = false
    this.disableShowAnswersButton = true
  }

  public loadDefaultAnswers() {
    if (!this.data) return
    this.currentAnswers = null
    const defaultAnswers = this.data.map(it => it.values[0])
    this.currentAnswers = defaultAnswers
  }

  public changeAnswer(value: string, index: number) {
    if (!value) return
    this.currentAnswers[index] = value
  }

  public showHideAnswers() {
    this.showAnswers ? this.showAnswers = false : this.showAnswers = true
  }

  public submit() {
    const correctAnswers = this.data.map(it => it.solution)
    let correctTotal: number = 0
    for (let index = 0; index < this.currentAnswers.length; index++) {
      if (this.currentAnswers[index] == correctAnswers[index]) {
        correctTotal++
      }
    }
    this.disableShowAnswersButton = false
    this.saveDataInCookies(correctTotal)
    alert(`You have answered ${correctTotal} / ${correctAnswers.length} correct`)
  }

  private saveDataInCookies(correctTotal: number): void {
    const cookieValue = this.cookieService.getCookie(this.gameKey)
    if (!cookieValue) {
      this.cookieService.setCookie(this.gameKey, correctTotal + ',')
      return
    }
    this.cookieService.setCookie(this.gameKey, cookieValue + correctTotal + ',')
  }

  public getInfoTextFromType(type: string): string {
    switch (type) {
      case "multiple-choice":
        return ` The goal of this task is to choose the right word from the selection. <br>
        There is always only one correct choice. <br>
        At the end of the task you can submit your answers and see how many you have guessed correctly. <br>
        Reviewing the answers is <b>only</b> available upon submitting your solution.`
      case "choose-definition":
        return ` The goal of this task is to choose <b>the correct definition</b> matching the question <br>
         There is always only one correct choice. <br>
         At the end of the task you can submit your answers and see how many you have guessed correctly. <br>
         Reviewing the answers is <b>only</b> available upon submitting your solution.`
      default:
        return ""
    }
  }


}
