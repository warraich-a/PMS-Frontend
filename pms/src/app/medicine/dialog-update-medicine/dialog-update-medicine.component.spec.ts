import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateMedicineComponent } from './dialog-update-medicine.component';

describe('DialogUpdateMedicineComponent', () => {
  let component: DialogUpdateMedicineComponent;
  let fixture: ComponentFixture<DialogUpdateMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
