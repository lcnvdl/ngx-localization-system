import { TestBed } from '@angular/core/testing';

import { NgxLocalizationSystemService } from './ngx-localization-system.service';

describe('NgxLocalizationSystemService', () => {
  let service: NgxLocalizationSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLocalizationSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
