import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {WeekMenuListDto} from '../dto/weekmenu/week-menu-list-dto';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeekmenuService {

  constructor(private http: HttpClient) {
  }

  listWeekMenus(): Observable<WeekMenuListDto> {
    return this.http.get<WeekMenuListDto>(API_URL + '/weekMenus/list');
  }

}
