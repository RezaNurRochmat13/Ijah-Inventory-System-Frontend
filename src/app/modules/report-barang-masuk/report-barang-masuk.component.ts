import { BarangMasukService } from './../../services/barang-masuk/barang-masuk.service';
import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';

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

  public generateCSVReportBarangMasuk() {
    console.log('Data', this.allReportBarangMasuk);

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Untitle.csv',
      useTextFile: false,
      useBom: true,
      headers: ['ID barang masuk', 'Nama barang', 'Nama ukuran', 'Nama warna', 'Tanggal masuk barang']
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.allReportBarangMasuk);
  }



}
