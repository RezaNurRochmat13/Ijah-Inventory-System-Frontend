import { BarangMasukService } from './../../services/barang-masuk/barang-masuk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-barang-masuk',
  templateUrl: './report-barang-masuk.component.html',
  styleUrls: ['./report-barang-masuk.component.css'],
  providers: [BarangMasukService]
})
export class ReportBarangMasukComponent implements OnInit {

  allReportBarangMasuk: Array<any>;
  detailReportBarangMasuk: any;

  constructor(private reportBarangMasukService: BarangMasukService) { }

  ngOnInit() {
    this.retrieveAllReportBarangMasuk();
  }

  public retrieveAllReportBarangMasuk() {
    this.reportBarangMasukService.getReportBarangMasukService().subscribe(response => {
      this.allReportBarangMasuk = response.data;
    });
  }

  public onClickDetailReportBarangMasuk(idBarangMasuk: string) {
    this.reportBarangMasukService.getDetailReportBarangMasukService(idBarangMasuk).subscribe(response => {
      this.detailReportBarangMasuk = response.data;
    });
  }



}
