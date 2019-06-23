import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_ENDPOINT } from 'src/app/base-contants';

@Injectable({
  providedIn: 'root'
})
export class PenjualanService {
  private REPORT_PENJUALAN_ENDPOINT = ROOT_ENDPOINT + 'selling-report';

constructor(private httpClientModule: HttpClient) { }

  public getAllReportPenjualanService(): Observable<any> {
    return this.httpClientModule.get(this.REPORT_PENJUALAN_ENDPOINT);
  }

}
