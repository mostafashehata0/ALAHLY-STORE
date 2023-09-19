import { TestBed } from '@angular/core/testing';

import { KitServiceService } from './kit-service.service';

describe('KitServiceService', () => {
  let service: KitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
