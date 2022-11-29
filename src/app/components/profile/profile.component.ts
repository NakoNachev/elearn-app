import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import travelData from '../../data/dictionary/travel.json'
import floraFauna from '../../data/dictionary/FloraFauna.json'
import office from '../../data/dictionary/office.json'
import weatherClimateGeo from '../../data/dictionary/weather-climate-geography.json'
import { CookieService } from 'app/services/cookie.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private readonly cookieService: CookieService) { }
  public statsForGames
  ngOnInit(): void {
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
    let average: number
    if (cookieValuesAsArray.length == 1) {
      tendency = null
      average = cookieValuesAsArray[0]
      return { tendency: null, average: average }
    } else {
      tendency = -(cookieValuesAsArray[cookieValuesAsArray.length - 1] - cookieValuesAsArray[cookieValuesAsArray.length - 2])
      average = this.average(cookieValuesAsArray)
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
