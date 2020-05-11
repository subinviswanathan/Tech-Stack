import { TestBed } from '@angular/core/testing';

import { TechDataService } from './tech-data.service';

describe('TechDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechDataService = TestBed.get(TechDataService);
    expect(service).toBeTruthy();
  });
});
