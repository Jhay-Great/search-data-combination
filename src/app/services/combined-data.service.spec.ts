import { TestBed } from '@angular/core/testing';

import { CombinedDataService } from './combined-data.service';

describe('CombinedDataService', () => {
  let service: CombinedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombinedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
