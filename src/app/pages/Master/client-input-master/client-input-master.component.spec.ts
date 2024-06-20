import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInputMasterComponent } from './client-input-master.component';

describe('ClientInputMasterComponent', () => {
  let component: ClientInputMasterComponent;
  let fixture: ComponentFixture<ClientInputMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientInputMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInputMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
