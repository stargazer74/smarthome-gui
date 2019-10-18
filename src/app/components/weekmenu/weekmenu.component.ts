import {Component, OnInit} from '@angular/core';
import {WeekmenuService} from '../../services/weekmenu.service';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {WeekMenuDto} from '../../dto/weekmenu/week-menu-dto';
import {IngredientDto} from '../../dto/weekmenu/ingredient-dto';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {WeekMenuRequestDto} from '../../dto/weekmenu/week-menu-request-dto';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-weekmenu',
  templateUrl: './weekmenu.component.html',
  styleUrls: ['./weekmenu.component.scss']
})
export class WeekmenuComponent implements OnInit {

  constructor(private weekMenuService: WeekmenuService, private fb: FormBuilder) {
  }

  submitted = false;

  menuList: WeekMenuDto[];

  tempMenuList: WeekMenuDto[];

  weekList: WeekMenuDto[];

  ingredients: IngredientDto[];

  weekMenuRequestDto: WeekMenuRequestDto = new WeekMenuRequestDto();

  weekMenuFormGroup: FormGroup;

  ngOnInit() {
    this.weekMenuService.listWeekMenus().subscribe(result => {
      this.menuList = result.weekMenuDtos;
      this.tempMenuList = result.weekMenuDtos;
    });
    this.weekList = [];
    this.weekMenuFormGroup = this.fb.group({
      name: new FormControl(this.weekMenuRequestDto.name, [Validators.required])
    });
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
    console.log('Foobar' + id);
    const weekMenuDto = this.weekList.find(item => item.id === id);
    this.ingredients = weekMenuDto.ingredients;
  }

  onSubmit() {
    this.submitted = true;
    if (this.weekMenuFormGroup.invalid) {
      return;
    }
  }
}
