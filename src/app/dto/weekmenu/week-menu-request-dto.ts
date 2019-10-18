import {JsonObject, JsonProperty} from 'json2typescript';
import {IsDefined} from 'class-validator';
import {IngredientDto} from './ingredient-dto';
import {IngredientRequestDto} from './ingredient-request-dto';

@JsonObject('WeekMenuRequestDto')
export class WeekMenuRequestDto {

  @IsDefined()
  @JsonProperty('name', String)
  public name = '';

  @IsDefined()
  @JsonProperty('ingredients', [IngredientDto])
  public ingredients: IngredientRequestDto[] = null;

}
