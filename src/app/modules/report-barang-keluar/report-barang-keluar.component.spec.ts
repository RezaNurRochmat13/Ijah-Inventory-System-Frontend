/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportBarangKeluarComponent } from './report-barang-keluar.component';

describe('ReportBarangKeluarComponent', () => {
  let component: ReportBarangKeluarComponent;
  let fixture: ComponentFixture<ReportBarangKeluarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBarangKeluarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBarangKeluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
