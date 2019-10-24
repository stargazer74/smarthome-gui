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

  selectedWeekMenuDto: WeekMenuDto;

  weekMenuFormGroup: FormGroup;

  ingredientFormItems: FormArray;

  unitOfMeasureValues: DropDownValueDto[];

  removeIngredientButtonDisabled: boolean;

  editMenuButtonHidden = true;

  addIngredientButtonHidden = true;

  addMenuButtonHidden = false;

  abortEditingButtonHidden = true;

  saveMenuButtonHidden = true;

  ngOnInit() {
    this.weekMenuService.listWeekMenus().subscribe(result => {
      this.menuList = result.weekMenuDtos;
      this.tempMenuList = result.weekMenuDtos;
    });
    this.weekList = [];
    this.weekMenuFormGroup = this.createWeekMenuForm();
    this.ingredientFormItems = this.weekMenuFormGroup.get('ingredients') as FormArray;

    // get values for unit of measure dropdown
    this.weekMenuService.getUnitOgMeasures().subscribe(response => {
      this.unitOfMeasureValues = response.dropDownValueDtos;
    });

    this.disableForm();
  }

  get ingredientsFormGroup() {
    return this.weekMenuFormGroup.get('ingredients') as FormArray;
  }

  get form() {
    return this.weekMenuFormGroup.controls;
  }

  private disableForm() {
    this.weekMenuFormGroup.disable();
    this.removeIngredientButtonDisabled = true;
  }

  private enableForm() {
    this.weekMenuFormGroup.enable();
    this.removeIngredientButtonDisabled = false;
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
    this.submitted = true;
    if (this.weekMenuFormGroup.invalid) {
      return;
    }
    this.weekMenuService.insertWeekMenus(this.weekMenuRequestDto).subscribe();
    // remove stored WeekMenuDto to prevent double insert
    this.selectedWeekMenuDto = null;
  }

  menuItemClicked(id: number) {
    this.selectedWeekMenuDto = this.tempMenuList.find(menu => menu.id === id);
    this.weekMenuFormGroup.get('name').setValue(this.selectedWeekMenuDto.name);
    this.weekMenuFormGroup.get('id').setValue(this.selectedWeekMenuDto.id);
    this.clearFormArray(this.ingredientsFormGroup);
    this.selectedWeekMenuDto.ingredients.forEach(item => {
      const formGroup = this.createIngredientFormGroup();
      formGroup.get('id').setValue(item.id);
      formGroup.get('name').setValue(item.name);
      formGroup.get('amount').setValue(item.amount);
      formGroup.get('unitOfMeasure').setValue(item.unitOfMeasure);
      this.addIngredientItem(formGroup);
    });
    this.disableForm();
    this.editMenuButtonHidden = false;
    this.addMenuButtonHidden = true;
    this.abortEditingButtonHidden = false;
    this.saveMenuButtonHidden = true;
    this.addIngredientButtonHidden = true;
  }

  clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  private createWeekMenuForm() {
    return this.fb.group({
      id: new FormControl(),
      name: new FormControl(this.weekMenuRequestDto.name, [Validators.required]),
      ingredients: this.fb.array([this.createIngredientFormGroup()])
    });
  }

  private createIngredientFormGroup() {
    return this.fb.group({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      unitOfMeasure: new FormControl(null, [Validators.required])
    });
  }

  addIngredientItem(item) {
    this.ingredientsFormGroup.push(item);
  }

  removeIngredientItem(index) {
    this.ingredientsFormGroup.removeAt(index);
  }

  addIngredient() {
    this.addIngredientItem(this.createIngredientFormGroup());
  }

  addMenu() {
    this.enableForm();
    this.abortEditingButtonHidden = false;
    this.addIngredientButtonHidden = false;
    this.saveMenuButtonHidden = false;
  }

  editMenu() {
    this.enableForm();
    this.addIngredientButtonHidden = false;
    this.saveMenuButtonHidden = false;
  }

  abortEditing() {
    this.weekMenuFormGroup.reset();
    this.abortEditingButtonHidden = true;
    this.addIngredientButtonHidden = true;
    this.saveMenuButtonHidden = true;
    this.addMenuButtonHidden = false;
    this.editMenuButtonHidden = true;
    while (this.ingredientsFormGroup.length !== 1) {
      this.ingredientsFormGroup.removeAt(0);
    }
    this.disableForm();
    console.log(this.weekMenuFormGroup);
  }
}
