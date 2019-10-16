import {IsDefined} from 'class-validator';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('IngredientRequestDto')
export class IngredientRequestDto {

  @IsDefined()
  @JsonProperty('name', String)
  public name: string = null;

  @IsDefined()
  @JsonProperty('amount', String)
  public amount: string = null;

  @IsDefined()
  @JsonProperty('unitOfMeasure', String)
  public unitOfMeasure: string = null;

}
