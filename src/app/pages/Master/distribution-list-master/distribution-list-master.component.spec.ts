import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionListMasterComponent } from './distribution-list-master.component';

describe('DistributionListMasterComponent', () => {
  let component: DistributionListMasterComponent;
  let fixture: ComponentFixture<DistributionListMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistributionListMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributionListMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
