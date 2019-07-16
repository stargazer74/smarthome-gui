import {IsDefined} from 'class-validator';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('IngredientDto')
export class IngredientDto {

  @IsDefined()
  @JsonProperty('id', Number)
  public id: number = null;

  @IsDefined()
  @JsonProperty('name', String)
  public name: string = null;

  @IsDefined()
  @JsonProperty('amount', String)
  public amount: string = null;

}
