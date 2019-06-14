import {JsonObject, JsonProperty} from 'json2typescript';
import { IsDefined} from 'class-validator';

@JsonObject( 'WeekMenuDto' )
export class WeekMenuDto {

  @IsDefined()
  @JsonProperty('name', String)
  public name: string = null;

}
