import {JsonObject, JsonProperty} from 'json2typescript';
import { IsDefined} from 'class-validator';
import {MenuDto} from './menu-dto';

@JsonObject( 'MenuListDto' )
export class MenuListDto {

  @IsDefined()
  @JsonProperty('menuDtos', [MenuDto])
  public menuDtos: MenuDto[] = null;

}
