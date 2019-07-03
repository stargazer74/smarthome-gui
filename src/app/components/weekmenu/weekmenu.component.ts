import {Component, OnInit} from '@angular/core';
import {WeekmenuService} from '../../services/weekmenu.service';
import {WeekMenuListDto} from '../../dto/weekmenu/week-menu-list-dto';

@Component({
  selector: 'app-weekmenu',
  templateUrl: './weekmenu.component.html',
  styleUrls: ['./weekmenu.component.scss']
})
export class WeekmenuComponent implements OnInit {

  constructor(private weekMenuService: WeekmenuService) {
  }

  private weekMenuListDto: WeekMenuListDto;

  ngOnInit() {
    this.weekMenuService.listWeekMenus().subscribe(result => {
      this.weekMenuListDto = result;
    });
  }

  onSearchFieldChange(event: Event) {
    const target = event.target as HTMLInputElement;
  }
}
