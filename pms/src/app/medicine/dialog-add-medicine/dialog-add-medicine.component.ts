import { MedicineService } from './../../services/medicine/medicine.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-add-medicine',
  templateUrl: './dialog-add-medicine.component.html',
  styleUrls: ['./dialog-add-medicine.component.css']
})
export class DialogAddMedicineComponent implements OnInit {

  medicineToAdd: {};
  constructor(private medicineService: MedicineService,  
    public dialogRef: MatDialogRef<DialogAddMedicineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) { }

    CloseDialog(){
      this.dialogRef.close();
    }
    
    onSubmitMedicine(data){
      this.medicineToAdd = {
        "medName": data.medicine,
        "price": data.price,
        "sellingPrice": data.sellingPrice
      }
      this.medicineService.addMedicine(<JSON>this.medicineToAdd);
      this.CloseDialog()
    }
  ngOnInit(): void {
  }

}
