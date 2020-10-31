import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MedicineService } from 'src/app/services/medicine/medicine.service';

@Component({
  selector: 'app-dialog-delete-medicine',
  templateUrl: './dialog-delete-medicine.component.html',
  styleUrls: ['./dialog-delete-medicine.component.css']
})
export class DialogDeleteMedicineComponent implements OnInit {

  id: number;

  constructor(private medicineService: MedicineService,  
              public dialogRef: MatDialogRef<DialogDeleteMedicineComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _snackBar: MatSnackBar) { }
    
  closeDialog(): void {
    this.dialogRef.close();
  }
  deleteMedicine(){
    this.medicineService.deleteMedicine(this.id);
    this.closeDialog()
  }
  ngOnInit(): void {
    this.id = this.data.Medicine;
    console.log(this.id);
  }

}
