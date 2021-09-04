import { TestBed } from '@angular/core/testing';

import { PilotsService } from './pilots.service';

describe('PilotsService', () => {
  let service: PilotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
