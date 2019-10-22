import { TestBed } from '@angular/core/testing';

import { WeekMenuService } from './week-menu.service';

describe('WeekMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekMenuService = TestBed.get(WeekMenuService);
    expect(service).toBeTruthy();
  });
});
