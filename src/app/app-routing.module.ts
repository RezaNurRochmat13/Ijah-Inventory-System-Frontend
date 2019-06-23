import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportBarangMasukComponent } from './modules/report-barang-masuk/report-barang-masuk.component';
import { ReportBarangKeluarComponent } from './modules/report-barang-keluar/report-barang-keluar.component';
import { ReportPenjualanComponent } from './modules/report-penjualan/report-penjualan.component';
import { ReportStokBarangComponent } from './modules/report-stok-barang/report-stok-barang.component';

const routes: Routes = [
  {
    path: 'barang-masuk',
    component: ReportBarangMasukComponent
  },
  {
    path: 'barang-keluar',
    component: ReportBarangKeluarComponent
  },
  {
    path: 'penjualan',
    component: ReportPenjualanComponent
  },
  {
    path: 'stok-barang',
    component: ReportStokBarangComponent
  },
  {
    path: '**',
    redirectTo: 'barang-masuk',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
