import { TestBed } from '@angular/core/testing';

import { HangarsService } from './hangars.service';

describe('HangarsService', () => {
  let service: HangarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HangarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
