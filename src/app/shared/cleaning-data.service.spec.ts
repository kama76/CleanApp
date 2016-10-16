/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CleaningDataService } from './cleaning-data.service';

describe('Service: CleaningData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CleaningDataService]
    });
  });

  it('should ...', inject([CleaningDataService], (service: CleaningDataService) => {
    expect(service).toBeTruthy();
  }));
});
