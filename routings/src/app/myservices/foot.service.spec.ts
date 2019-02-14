import { TestBed } from '@angular/core/testing';

import { FootService } from './foot.service';

describe('FootService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootService = TestBed.get(FootService);
    expect(service).toBeTruthy();
  });
});
