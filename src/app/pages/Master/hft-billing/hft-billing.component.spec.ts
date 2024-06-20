import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HftBillingComponent } from './hft-billing.component';

describe('HftBillingComponent', () => {
  let component: HftBillingComponent;
  let fixture: ComponentFixture<HftBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HftBillingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HftBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
