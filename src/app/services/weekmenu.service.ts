import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {WeekMenuListDto} from '../dto/weekmenu/week-menu-list-dto';
import {validate} from 'class-validator';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeekmenuService {

  constructor(private http: HttpClient) {
  }

  listWeekMenus(): Observable<WeekMenuListDto> {
    const weekMenuListDto = this.http.get<WeekMenuListDto>(API_URL + '/weekMenus/list');
    validate(weekMenuListDto).then(errors => {
        if (errors.length > 0) {
          console.log('validation failed. errors: ', errors);
        } else {
          return weekMenuListDto;
        }
      }
    );
    return weekMenuListDto;
  }

}
