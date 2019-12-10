import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {MenuListDto} from '../dto/weekmenu/menu-list-dto';
import {validate} from 'class-validator';
import {DropDownValueListDto} from '../dto/weekmenu/dropdown-list-value.dto';
import {MenuDto} from '../dto/weekmenu/menu-dto';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class WeekMenuService {

  constructor(private http: HttpClient) {
  }

  listWeekMenus(): Observable<MenuListDto> {
    const weekMenuListDto = this.http.get<MenuListDto>(API_URL + '/week-menus/list');
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

  insertWeekMenus(menuDto: MenuDto): Observable<MenuDto> {
    const weekMenuDto = this.http.post<MenuDto>(API_URL + '/week-menus', menuDto);
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
    const dropDownValueListDto = this.http.get<DropDownValueListDto>(API_URL + '/week-menus/units-of-measure');
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
