/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StokBarangService } from './stok-barang.service';

describe('Service: StokBarang', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StokBarangService]
    });
  });

  it('should ...', inject([StokBarangService], (service: StokBarangService) => {
    expect(service).toBeTruthy();
  }));
});
