import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Medicine } from 'src/app/classes/Medicine';
import { MedicineService } from 'src/app/services/medicine/medicine.service';

@Component({
  selector: 'app-dialog-update-medicine',
  templateUrl: './dialog-update-medicine.component.html',
  styleUrls: ['./dialog-update-medicine.component.css']
})
export class DialogUpdateMedicineComponent implements OnInit {

  id: number;
  medicineToUpdate: {};

  medicine: Medicine;
  constructor(private medicineService: MedicineService,  
              public dialogRef: MatDialogRef<DialogUpdateMedicineComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _snackBar: MatSnackBar) { }

  updateMedicine(data){
    this.medicineToUpdate= {
    "id": this.id,   
    "medName": data.medName,
    "price": data.price,
    "sellingPrice": data.sellingPrice
    }
    this.medicineService.updateMedicine(<JSON>this.medicineToUpdate);
    this.CloseDialog()
  }

  CloseDialog(){
    this.dialogRef.close();
  }
  

  ngOnInit(): void {
    this.id = this.data.medicine.id;
    this.medicine = this.data;
    // console.log(this.sellingPrice);
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine = <Medicine>data;
      console.log(this.medicine);
    })
  }

}
