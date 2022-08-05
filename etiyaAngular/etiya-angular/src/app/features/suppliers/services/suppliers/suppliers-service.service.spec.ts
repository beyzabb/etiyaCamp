import { TestBed } from '@angular/core/testing';

import { SuppliersServiceService } from './suppliers-service.service';

describe('SuppliersServiceService', () => {
  let service: SuppliersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppliersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
