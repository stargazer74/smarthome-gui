import {JsonObject, JsonProperty} from 'json2typescript';
import {IsDefined} from 'class-validator';
import {DropDownValueDto} from './dropdown-value.dto';


@JsonObject('DropDownValueDto')
export class DropDownValueListDto {

  @IsDefined()
  @JsonProperty('dropDownValueDtos', [DropDownValueDto])
  public dropDownValueDtos: DropDownValueDto[] = null;


  // constructors

  constructor() {
  }
}
