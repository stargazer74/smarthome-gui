import { JsonObject, JsonProperty } from 'json2typescript';
import {IsDefined} from 'class-validator';


@JsonObject('DropDownValueDto')
export class DropDownValueDto {

  @IsDefined()
  @JsonProperty('value', String)
  public value: string = null;

  @IsDefined()
  @JsonProperty('viewValue', String)
  public viewValue: string = null;

  // constructors

  constructor() {
  }
}
