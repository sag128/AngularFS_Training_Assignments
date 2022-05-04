import { TestBed } from '@angular/core/testing';

import { ObervableService } from './obervable.service';

describe('ObervableService', () => {
  let service: ObervableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObervableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
