import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericReportMasterComponent } from './generic-report-master.component';

describe('GenericReportMasterComponent', () => {
  let component: GenericReportMasterComponent;
  let fixture: ComponentFixture<GenericReportMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericReportMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericReportMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
