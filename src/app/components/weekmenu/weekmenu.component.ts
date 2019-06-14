import { Component, OnInit } from '@angular/core';
import {WeekmenuService} from '../../services/weekmenu.service';

@Component({
  selector: 'app-weekmenu',
  templateUrl: './weekmenu.component.html',
  styleUrls: ['./weekmenu.component.scss']
})
export class WeekmenuComponent implements OnInit {

  constructor(private weekMenuService: WeekmenuService) { }

  ngOnInit() {
  }

  onSearchFieldChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const observable = this.weekMenuService.listWeekMenus();
    observable.subscribe(result => {
      console.log(result);
    });
    console.log(target.value);
  }
}
