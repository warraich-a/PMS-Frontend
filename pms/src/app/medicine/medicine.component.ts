import { DialogUpdateMedicineComponent } from './dialog-update-medicine/dialog-update-medicine.component';
import { DialogDeleteMedicineComponent } from './dialog-delete-medicine/dialog-delete-medicine.component';
import { MedicineService } from './../services/medicine/medicine.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddMedicineComponent } from './dialog-add-medicine/dialog-add-medicine.component';
import { Medicine } from '../classes/Medicine';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
 
  medicines: Object[];
  constructor(private medicineServices: MedicineService,
              public dialog: MatDialog,) { }

 openDialogMedicine(): void {
  const dialogRef = this.dialog.open(DialogAddMedicineComponent, {
    width: '30%',
    panelClass: 'custom-modalbox'
  }); 
  dialogRef.afterClosed()
    .subscribe(res => {
      this.getAllMedicines();
      this.ngOnInit();
  });
}

  getAllMedicines(){
    this.medicineServices.getMedicines().subscribe((data)=>{
      console.log(data);
      this.medicines = <object[]>data;
    });
  }
  
  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(DialogDeleteMedicineComponent, {
      width: '30%',
      data: {Medicine: id}
      // panelClass: 'custom-modalbox'
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
        this.getAllMedicines();
        this.ngOnInit();
    });
  }

  openDialogUpdate(medicine: Medicine): void {
    const dialogRef = this.dialog.open(DialogUpdateMedicineComponent, {
      width: '40%',
      data: {medicine: medicine}
      // panelClass: 'custom-modalbox'
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
        this.getAllMedicines();
        this.ngOnInit();
    });
  }

  ngOnInit(): void{
    this.getAllMedicines();
    
  }
}
