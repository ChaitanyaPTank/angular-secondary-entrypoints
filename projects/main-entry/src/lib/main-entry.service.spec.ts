import { TestBed } from '@angular/core/testing';

import { MainEntryService } from './main-entry.service';

describe('MainEntryService', () => {
  let service: MainEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
