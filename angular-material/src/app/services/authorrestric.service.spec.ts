import { TestBed } from '@angular/core/testing';

import { AuthorrestricService } from './authorrestric.service';

describe('AuthorrestricService', () => {
  let service: AuthorrestricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorrestricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
