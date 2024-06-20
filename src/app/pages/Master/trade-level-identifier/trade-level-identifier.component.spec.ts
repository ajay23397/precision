import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeLevelIdentifierComponent } from './trade-level-identifier.component';

describe('TradeLevelIdentifierComponent', () => {
  let component: TradeLevelIdentifierComponent;
  let fixture: ComponentFixture<TradeLevelIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TradeLevelIdentifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradeLevelIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
