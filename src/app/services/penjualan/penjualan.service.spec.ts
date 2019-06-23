/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PenjualanService } from './penjualan.service';

describe('Service: Penjualan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PenjualanService]
    });
  });

  it('should ...', inject([PenjualanService], (service: PenjualanService) => {
    expect(service).toBeTruthy();
  }));
});
