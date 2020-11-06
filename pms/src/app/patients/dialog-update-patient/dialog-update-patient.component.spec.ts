import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdatePatientComponent } from './dialog-update-patient.component';

describe('DialogUpdatePatientComponent', () => {
  let component: DialogUpdatePatientComponent;
  let fixture: ComponentFixture<DialogUpdatePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdatePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
