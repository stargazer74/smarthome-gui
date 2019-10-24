import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {WeekMenuListDto} from '../dto/weekmenu/week-menu-list-dto';
import {validate} from 'class-validator';
import {DropDownValueDto} from '../dto/weekmenu/dropdown-value.dto';
import {DropDownValueListDto} from "../dto/weekmenu/dropdown-list-value.dto";
import {WeekMenuDto} from "../dto/weekmenu/week-menu-dto";

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeekMenuService {

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

  insertWeekMenus(menuDto: WeekMenuDto): Observable<WeekMenuDto> {
    const weekMenuDto = this.http.post<WeekMenuDto>(API_URL + '/weekMenus', menuDto);
    validate(weekMenuDto).then(errors => {
        if (errors.length > 0) {
          console.log('validation failed. errors: ', errors);
        } else {
          return weekMenuDto;
        }
      }
    );
    return weekMenuDto;
  }

  getUnitOgMeasures(): Observable<DropDownValueListDto> {
    const dropDownValueListDto = this.http.get<DropDownValueListDto>(API_URL + '/weekMenus/units-of-measure');
    validate(dropDownValueListDto).then(errors => {
        if (errors.length > 0) {
          console.log('validation failed. errors: ', errors);
        } else {
          return dropDownValueListDto;
        }
      }
    );
    return dropDownValueListDto;
  }
}
