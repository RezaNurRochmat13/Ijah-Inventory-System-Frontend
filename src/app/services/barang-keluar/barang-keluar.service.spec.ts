/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BarangKeluarService } from './barang-keluar.service';

describe('Service: BarangKeluar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarangKeluarService]
    });
  });

  it('should ...', inject([BarangKeluarService], (service: BarangKeluarService) => {
    expect(service).toBeTruthy();
  }));
});
