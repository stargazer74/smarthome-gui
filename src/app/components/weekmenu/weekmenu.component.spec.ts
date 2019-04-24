import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekmenuComponent } from './weekmenu.component';

describe('WeekmenuComponent', () => {
  let component: WeekmenuComponent;
  let fixture: ComponentFixture<WeekmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
