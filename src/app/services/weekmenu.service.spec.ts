import { TestBed } from '@angular/core/testing';

import { WeekmenuService } from './weekmenu.service';

describe('WeekmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekmenuService = TestBed.get(WeekmenuService);
    expect(service).toBeTruthy();
  });
});
