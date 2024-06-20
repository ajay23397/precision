import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColumnMasterComponent } from './dynamic-column-master.component';

describe('DynamicColumnMasterComponent', () => {
  let component: DynamicColumnMasterComponent;
  let fixture: ComponentFixture<DynamicColumnMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicColumnMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicColumnMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
