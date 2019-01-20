import { TestBed } from '@angular/core/testing';

import { EisdetailsService } from './eisdetails.service';

describe('EisdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EisdetailsService = TestBed.get(EisdetailsService);
    expect(service).toBeTruthy();
  });
});
