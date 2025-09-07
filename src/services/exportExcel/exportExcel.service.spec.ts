import { TestBed } from '@angular/core/testing';

import { ExportExcelService } from './exportExcel.service';

describe('ExportExcelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportExcelService = TestBed.inject(ExportExcelService);
    expect(service).toBeTruthy();
  });
});
