import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROOT_ENDPOINT } from 'src/app/base-contants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StokBarangService {

  private REPORT_STOK_BARANG_ENDPOINT = ROOT_ENDPOINT + 'stock-product';

constructor(private httpClientModule: HttpClient) { }

  public getAllStokBarangService(): Observable<any> {
    return this.httpClientModule.get(this.REPORT_STOK_BARANG_ENDPOINT);
  }
}
