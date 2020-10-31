import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMedicineComponent } from './dialog-add-medicine.component';

describe('DialogAddMedicineComponent', () => {
  let component: DialogAddMedicineComponent;
  let fixture: ComponentFixture<DialogAddMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
