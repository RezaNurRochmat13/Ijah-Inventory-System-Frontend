import { StokBarangService } from './../../services/stok-barang/stok-barang.service';
import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-report-stok-barang',
  templateUrl: './report-stok-barang.component.html',
  styleUrls: ['./report-stok-barang.component.css']
})
export class ReportStokBarangComponent implements OnInit {

  allReportStokBarang: Array<any>;

  constructor(private reportStokBarangService: StokBarangService) { }

  ngOnInit() {
    this.retrieveAllReportStokBarang();
  }

  public retrieveAllReportStokBarang() {
    this.reportStokBarangService.getAllStokBarangService().subscribe(response => {
      this.allReportStokBarang = response.data;
      console.log('Data', this.allReportStokBarang);
    });
  }

  public generateCSVReportStokBarang() {
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
        'ID barang', 'Kode barang',
        'Nama barang', 'Nama ukuran',
        'Nama warna', 'Jumlah stok']
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.allReportStokBarang);
  }

}
