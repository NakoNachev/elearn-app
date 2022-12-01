import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import travelData from '../../data/dictionary/travel.json'
import floraFauna from '../../data/dictionary/FloraFauna.json'
import office from '../../data/dictionary/office.json'
import officeDataGame from '../../data/multiple-choice/office.json'
import travelDataGame from '../../data/multiple-choice/travel.json'
import travelData2Game from '../../data/multiple-choice/travel2.json'
import florfaunDataGame from '../../data/match-sentence/flora_fauna.json'
import weatherClimateGeo from '../../data/dictionary/weather-climate-geography.json'
import { CookieService } from 'app/services/cookie.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private readonly cookieService: CookieService) { }
  public statsForGames
  public travelDataGame = travelDataGame
  public keyDataMatcher = []
  ngOnInit(): void {
    this.initTotalMatcherForGameStats()
    this.statsForGames = this.evaluateStatsForGames()
    console.log("this.statsForGames", this.statsForGames)
  }

  public evaluateProgressByCookieForWords(cookieName: string): any {
    const cookieValue = this.cookieService.getCookie(cookieName)
    if (!cookieValue) return 0
    const cookieValuesAsArray: string[] = cookieValue.split(',')
    switch (cookieName) {
      case 'travel_words':
        return { 'width': ((cookieValuesAsArray.length / travelData.length) * 100) + '%' }
      case 'flora_fauna_words':
        return { 'width': ((cookieValuesAsArray.length / floraFauna.length) * 100) + '%' }
      case 'office_work_words':
        return { 'width': ((cookieValuesAsArray.length / office.length) * 100) + '%' }
      case 'weather_climate_geography_words':
        return { 'width': ((cookieValuesAsArray.length / weatherClimateGeo.length) * 100) + '%' }
      default:
        return { 'width': '0%' }
    }
  }

  public initTotalMatcherForGameStats() {
    this.keyDataMatcher = [
      { key: 'mc-travel', total: travelDataGame.length, label: "Multiple choice 1 (travel)"},
      { key: 'def-travel', total: travelData2Game.length, label: "Multiple choice 2 (travel)" }
    ]
  }

  public evaluateStatsForGames() {
    const gameKeys: string[] = ['mc-travel', 'def-travel', 'mc-office']
    let stats = {}
    for (let key of gameKeys) {
      stats[key] = this.evaluateProgressByCookieForGame(key)
    }
    return stats
  }

  public evaluateProgressByCookieForGame(cookieName: string) {
    const cookieValue = this.cookieService.getCookie(cookieName)
    if (!cookieValue) return null
    const cookieValuesAsArray: number[] = cookieValue.split(',').filter(it => it != '').map(it => parseInt(it))
    let tendency: number
    let average: string
    let divider = this.keyDataMatcher.find(it => it['key'] == cookieName)['total']
    if (cookieValuesAsArray.length == 1) {
      tendency = null
      average = ((cookieValuesAsArray[0]/divider)*100).toFixed(0)  + '%'
      return { tendency: null, average: average }
    } else {
      tendency = -(cookieValuesAsArray[cookieValuesAsArray.length - 1] - cookieValuesAsArray[cookieValuesAsArray.length - 2])
      average = ((this.average(cookieValuesAsArray)/divider)*100).toFixed(0) + '%' 
      return { tendency: tendency, average: average }
    }
  }

  public average(arr: number[]) {
    console.log(arr)
    if (!arr || arr.length == 0) return 0
    let total: number = 0
    for (let i = 0; i <= arr.length - 1; i++) {
      total = total + arr[i]
    }
    return total / arr.length
  }

}
