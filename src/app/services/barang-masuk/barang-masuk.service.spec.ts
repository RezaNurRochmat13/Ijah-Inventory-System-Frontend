/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BarangMasukService } from './barang-masuk.service';

describe('Service: BarangMasuk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarangMasukService]
    });
  });

  it('should ...', inject([BarangMasukService], (service: BarangMasukService) => {
    expect(service).toBeTruthy();
  }));
});
