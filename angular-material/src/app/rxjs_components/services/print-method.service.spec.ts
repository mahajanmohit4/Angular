import { TestBed } from '@angular/core/testing';

import { PrintMethodService } from './print-method.service';

describe('PrintMethodService', () => {
  let service: PrintMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
