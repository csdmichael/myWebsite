import { TestBed } from '@angular/core/testing';

import { CountyService } from './county.service';

describe('CountyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountyService = TestBed.inject(CountyService);
    expect(service).toBeTruthy();
  });
});
