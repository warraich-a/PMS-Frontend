import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteMedicineComponent } from './dialog-delete-medicine.component';

describe('DialogDeleteMedicineComponent', () => {
  let component: DialogDeleteMedicineComponent;
  let fixture: ComponentFixture<DialogDeleteMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
