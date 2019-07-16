import {JsonObject, JsonProperty} from 'json2typescript';
import {IsDefined} from 'class-validator';
import {IngredientDto} from './ingredient-dto';

@JsonObject('WeekMenuDto')
export class WeekMenuDto {

  @IsDefined()
  @JsonProperty('id', Number)
  public id: number = null;

  @IsDefined()
  @JsonProperty('name', String)
  public name: string = null;

  @IsDefined()
  @JsonProperty('ingredients', [IngredientDto])
  public ingredients: IngredientDto[] = null;

}
