import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCriteriaMasterComponent } from './check-criteria-master.component';

describe('CheckCriteriaMasterComponent', () => {
  let component: CheckCriteriaMasterComponent;
  let fixture: ComponentFixture<CheckCriteriaMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckCriteriaMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCriteriaMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
