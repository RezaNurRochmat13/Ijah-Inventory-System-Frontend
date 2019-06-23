import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_ENDPOINT } from 'src/app/base-contants';

@Injectable({
  providedIn: 'root'
})
export class BarangKeluarService {

constructor(private httpClientModule: HttpClient) { }
  private REPORT_BARANG_KELUAR_ENDPOINT = ROOT_ENDPOINT + 'product-out';

  public getAllReportBarangKeluar(): Observable<any> {
    return this.httpClientModule.get(this.REPORT_BARANG_KELUAR_ENDPOINT);
  }

}
