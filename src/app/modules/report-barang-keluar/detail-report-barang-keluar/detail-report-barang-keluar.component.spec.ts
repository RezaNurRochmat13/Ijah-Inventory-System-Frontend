/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailReportBarangKeluarComponent } from './detail-report-barang-keluar.component';

describe('DetailReportBarangKeluarComponent', () => {
  let component: DetailReportBarangKeluarComponent;
  let fixture: ComponentFixture<DetailReportBarangKeluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReportBarangKeluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailReportBarangKeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
