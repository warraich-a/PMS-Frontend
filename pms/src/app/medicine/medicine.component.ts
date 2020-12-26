import { fade } from './../animation/fade';
import { DialogUpdateMedicineComponent } from './dialog-update-medicine/dialog-update-medicine.component';
import { DialogDeleteMedicineComponent } from './dialog-delete-medicine/dialog-delete-medicine.component';
import { MedicineService } from './../services/medicine/medicine.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddMedicineComponent } from './dialog-add-medicine/dialog-add-medicine.component';
import { Medicine } from '../classes/Medicine';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'],
  animations: [
   fade
  ]
})
export class MedicineComponent implements OnInit {
 
  medicines: Object[];
  searchValue: string;
  constructor(private medicineServices: MedicineService,
              public dialog: MatDialog,
              private router: Router,
              private _snackBar: MatSnackBar,) { }

 openDialogMedicine(): void {
  const dialogRef = this.dialog.open(DialogAddMedicineComponent, {
    // width: '30%',
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
    },
    (error: Response) => {
      this.errorHandler(error);
    });
  }
  
  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(DialogDeleteMedicineComponent, {
      // width: '30%',
      data: {Medicine: id},
      panelClass: 'custom-modalbox'
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
      data: {medicine: medicine},
       panelClass: 'custom-modalbox'
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
        this.getAllMedicines();
        this.ngOnInit();
    });
  }
  private  errorHandler(error: Response){
    if(error.status === 403){
      this.router.navigate(['forbidden'])
    } 
    else if(error.status === 404){
      this._snackBar.open('Not Found!!', 'End now', {
        duration: 1000,
     });
    } 
    else 
    {
      this._snackBar.open('Wrong data provided', 'End now', {
        duration: 1000,
      });
    }
  };
  ngOnInit(): void{
    this.getAllMedicines();
    
  }
}
