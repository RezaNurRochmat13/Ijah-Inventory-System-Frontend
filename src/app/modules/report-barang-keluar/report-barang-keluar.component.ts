import { BarangKeluarService } from './../../services/barang-keluar/barang-keluar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-barang-keluar',
  templateUrl: './report-barang-keluar.component.html',
  styleUrls: ['./report-barang-keluar.component.css']
})
export class ReportBarangKeluarComponent implements OnInit {
  allReportBarangKeluar: Array<any>;

  constructor(private reportBarangKeluarService: BarangKeluarService) { }

  ngOnInit() {
    this.retrieveAllReportBarangKeluar();
  }

  public retrieveAllReportBarangKeluar() {
    this.reportBarangKeluarService.getAllReportBarangKeluar().subscribe(response => {
      this.allReportBarangKeluar = response.data;
    });
  }

}
