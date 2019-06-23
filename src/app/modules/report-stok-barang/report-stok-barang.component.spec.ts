/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportStokBarangComponent } from './report-stok-barang.component';

describe('ReportStokBarangComponent', () => {
  let component: ReportStokBarangComponent;
  let fixture: ComponentFixture<ReportStokBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportStokBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStokBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
