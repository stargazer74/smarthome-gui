import {Component, OnInit} from '@angular/core';
import {WeekMenuService} from '../../services/week-menu.service';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from '@angular/cdk/drag-drop';
import {WeekMenuDto} from '../../dto/weekmenu/week-menu-dto';
import {IngredientDto} from '../../dto/weekmenu/ingredient-dto';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DropDownValueDto} from '../../dto/weekmenu/dropdown-value.dto';

@Component({
  selector: 'app-weekmenu',
  templateUrl: './weekmenu.component.html',
  styleUrls: ['./weekmenu.component.scss']
})
export class WeekmenuComponent implements OnInit {

  constructor(private weekMenuService: WeekMenuService, private fb: FormBuilder) {
  }

  submitted = false;

  menuList: WeekMenuDto[];

  tempMenuList: WeekMenuDto[];

  weekList: WeekMenuDto[];

  ingredients: IngredientDto[];

  weekMenuRequestDto: WeekMenuDto = new WeekMenuDto();

  weekMenuFormGroup: FormGroup;

  ingredientFormItems: FormArray;

  unitOfMeasureValues: DropDownValueDto[];

  ngOnInit() {
    this.weekMenuService.listWeekMenus().subscribe(result => {
      this.menuList = result.weekMenuDtos;
      this.tempMenuList = result.weekMenuDtos;
    });
    this.weekList = [];
    this.weekMenuFormGroup = this.fb.group({
      name: new FormControl(this.weekMenuRequestDto.name, [Validators.required]),
      ingredients: this.fb.array([this.createIngredientFormGroup()])
    });
    this.ingredientFormItems = this.weekMenuFormGroup.get('ingredients') as FormArray;

    // get values for unit of measure dropdown
    this.weekMenuService.getUnitOgMeasures().subscribe(response => {
      this.unitOfMeasureValues = response.dropDownValueDtos;
    });
  }

  get ingredientsFormGroup() {
    return this.weekMenuFormGroup.get('ingredients') as FormArray;
  }

  get form() {
    return this.weekMenuFormGroup.controls;
  }

  onSearchFieldChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value.length > 3) {
      this.menuList = this.menuList.filter(menu => menu.name.toLowerCase().includes(target.value.toLowerCase()));
    } else {
      this.menuList = this.tempMenuList;
    }
  }

  drop(event: CdkDragDrop<WeekMenuDto[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  deleteItem(index: number) {
    this.weekList.splice(index, 1);
  }

  showIngredients(id: number) {
    const weekMenuDto = this.weekList.find(item => item.id === id);
    this.ingredients = weekMenuDto.ingredients;
  }

  onSubmit() {
    this.weekMenuRequestDto = this.weekMenuFormGroup.value as WeekMenuDto;
    console.log(this.weekMenuRequestDto);
    this.submitted = true;
    if (this.weekMenuFormGroup.invalid) {
      return;
    }
  }

  menuItemClicked(id: number) {
    const weekMenuDto = this.tempMenuList.find(menu => menu.id === id);
    this.weekMenuFormGroup.get('name').setValue(weekMenuDto.name);
    this.clearFormArray(this.ingredientFormItems);
    weekMenuDto.ingredients.forEach(item => {
      const formGroup = this.createIngredientFormGroup();
      formGroup.get('name').setValue(item.name);
      formGroup.get('amount').setValue(item.amount);
      formGroup.get('unitOfMeasure').setValue(item.unitOfMeasure);
      this.addIngredientItem(formGroup);
    });
  }

  clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  private createIngredientFormGroup() {
    return this.fb.group({
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      unitOfMeasure: new FormControl('TL', [Validators.required])
    });
  }

  addIngredientItem(item) {
    this.ingredientFormItems.push(item);
  }

  removeIngredientItem(index) {
    this.ingredientFormItems.removeAt(index);
  }
}
