import { TestBed } from '@angular/core/testing';

import { AllocatedplanesService } from './allocatedplanes.service';

describe('AllocatedplanesService', () => {
  let service: AllocatedplanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocatedplanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
