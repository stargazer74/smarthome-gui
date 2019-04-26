import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekmenu',
  templateUrl: './weekmenu.component.html',
  styleUrls: ['./weekmenu.component.scss']
})
export class WeekmenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearchFieldChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  }
}
