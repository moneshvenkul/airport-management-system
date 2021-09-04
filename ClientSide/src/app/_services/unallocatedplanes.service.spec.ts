import { TestBed } from '@angular/core/testing';

import { UnallocatedplanesService } from './unallocatedplanes.service';

describe('UnallocatedplanesService', () => {
  let service: UnallocatedplanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnallocatedplanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
