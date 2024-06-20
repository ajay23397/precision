import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludeClientsInUploadComponent } from './exclude-clients-in-upload.component';

describe('ExcludeClientsInUploadComponent', () => {
  let component: ExcludeClientsInUploadComponent;
  let fixture: ComponentFixture<ExcludeClientsInUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcludeClientsInUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcludeClientsInUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
