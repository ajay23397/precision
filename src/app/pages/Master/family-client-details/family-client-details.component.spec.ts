import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyClientDetailsComponent } from './family-client-details.component';

describe('FamilyClientDetailsComponent', () => {
  let component: FamilyClientDetailsComponent;
  let fixture: ComponentFixture<FamilyClientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilyClientDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyClientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
