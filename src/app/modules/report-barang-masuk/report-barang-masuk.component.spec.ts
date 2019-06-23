/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportBarangMasukComponent } from './report-barang-masuk.component';

describe('ReportBarangMasukComponent', () => {
  let component: ReportBarangMasukComponent;
  let fixture: ComponentFixture<ReportBarangMasukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBarangMasukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBarangMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
