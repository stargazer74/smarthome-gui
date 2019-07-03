import {JsonObject, JsonProperty} from 'json2typescript';
import { IsDefined} from 'class-validator';
import {WeekMenuDto} from './week-menu-dto';

@JsonObject( 'WeekMenuListDto' )
export class WeekMenuListDto {

  @IsDefined()
  @JsonProperty('weekMenuDtos', [WeekMenuDto])
  public weekMenuDtos: WeekMenuDto[] = null;

}
