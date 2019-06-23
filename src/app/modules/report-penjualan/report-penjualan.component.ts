import { PenjualanService } from './../../services/penjualan/penjualan.service';
import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-report-penjualan',
  templateUrl: './report-penjualan.component.html',
  styleUrls: ['./report-penjualan.component.css']
})
export class ReportPenjualanComponent implements OnInit {
  allReportPenjualan: Array<any>;

  constructor(private reportPenjualanService: PenjualanService) { }

  ngOnInit() {
    this.retrieveAllReportPenjualan();
  }

  public retrieveAllReportPenjualan() {
    this.reportPenjualanService.getAllReportPenjualanService().subscribe(response => {
      this.allReportPenjualan = response.data;
    });
  }

  public generateCSVReportPenjualan() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Untitle.csv',
      useTextFile: false,
      useBom: true,
      headers: [
        'ID penjualan', 'Kode pesan',
        'Nama barang', 'Nama ukuran',
        'Nama warna', 'Tanggal jual',
        'Jumlah order', 'Harga jual',
        'Total penjualan', 'Harga beli', 'Laba']
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.allReportPenjualan);
  }

}
