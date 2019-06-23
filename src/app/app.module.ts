import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReportBarangMasukComponent } from './modules/report-barang-masuk/report-barang-masuk.component';
import { ReportBarangKeluarComponent } from './modules/report-barang-keluar/report-barang-keluar.component';
import { ReportPenjualanComponent } from './modules/report-penjualan/report-penjualan.component';
import { ReportStokBarangComponent } from './modules/report-stok-barang/report-stok-barang.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportBarangMasukComponent,
    ReportBarangKeluarComponent,
    ReportPenjualanComponent,
    ReportStokBarangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
