import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
import { BarangKeluarService } from './../../services/barang-keluar/barang-keluar.service';

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

  public generateCSVReportBarangKeluar() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Untitle.csv',
      useTextFile: false,
      useBom: true,
      headers: ['ID barang keluar', 'Nama barang', 'Nama ukuran', 'Nama warna', 'Jumlah keluar barang']
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.allReportBarangKeluar);
  }

}
