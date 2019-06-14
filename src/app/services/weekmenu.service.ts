import {Injectable} from '@angular/core';
import {WeekMenuDto} from '../dto/weekmenu/week-menu-dto';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeekmenuService {

  constructor(private http: HttpClient) {
  }

  listWeekMenus(): Observable<WeekMenuDto[]> {
    return this.http.get<WeekMenuDto[]>(API_URL + '/weekMenus/list');
  }

}
