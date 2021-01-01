import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePatientMedicineComponent } from './remove-patient-medicine.component';

describe('RemovePatientMedicineComponent', () => {
  let component: RemovePatientMedicineComponent;
  let fixture: ComponentFixture<RemovePatientMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePatientMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePatientMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
