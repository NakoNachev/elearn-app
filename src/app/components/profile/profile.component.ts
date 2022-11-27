import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import travelData from '../../data/dictionary/travel.json'
import floraFauna from '../../data/dictionary/FloraFauna.json'
import office from '../../data/dictionary/office.json'
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

  ngOnInit(): void {
  }

  public evaluateProgressByCookie(cookieName: string): any {
    const cookieValue = this.cookieService.getCookie(cookieName)
    if (!cookieValue) return 0
    const cookieValuesAsArray: string[] = cookieValue.split(',')
    switch (cookieName) {
      case 'travel_words':
        return {'width': ((cookieValuesAsArray.length / travelData.length) * 100) + '%'}
      case 'flora_fauna_words':
        return {'width': ((cookieValuesAsArray.length / floraFauna.length) * 100) + '%'}
      case 'office_work_words':
        return {'width': ((cookieValuesAsArray.length / office.length) * 100) + '%'}
      case 'weather_climate_geography_words':
        return {'width': ((cookieValuesAsArray.length / weatherClimateGeo.length) * 100) + '%'}
      default:
        return {'width': '0%'}
    }
  }

}
