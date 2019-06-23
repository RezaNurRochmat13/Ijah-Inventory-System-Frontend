import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOT_ENDPOINT } from 'src/app/base-contants';

@Injectable({
  providedIn: 'root'
})
export class BarangMasukService {

  private REPORT_BARANG_MASUK_ENDPOINT = ROOT_ENDPOINT + 'product-income';

constructor(
  private httpClientModule: HttpClient
) { }

  public getReportBarangMasukService(): Observable<any> {
    return this.httpClientModule.get(this.REPORT_BARANG_MASUK_ENDPOINT);
  }

  public getDetailReportBarangMasukService(barangMasukId: string): Observable<any> {
    return this.httpClientModule.get(this.REPORT_BARANG_MASUK_ENDPOINT + '/' + barangMasukId);
  }

}
