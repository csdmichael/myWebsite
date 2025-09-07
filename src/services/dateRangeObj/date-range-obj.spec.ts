import { TestBed } from '@angular/core/testing';

import { DateRangeObjService } from './date-range-obj.service';

describe('DateRangeObjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateRangeObjService = TestBed.inject(DateRangeObjService);
    expect(service).toBeTruthy();
  });
});
