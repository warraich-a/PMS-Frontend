import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PatientService } from '../services/patient/patient.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface Patients{
  name:string;
  id:number;
  disease:string;
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})


export class PatientsComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  pts: Object[];
  patient: Object[];
  medicines: Object[];
  patientId: number;
  constructor(private patientService: PatientService,
              private _snackBar: MatSnackBar,
              private route: ActivatedRoute) { }

         
              
  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['blue-snackbar']
    });
  }
  
  getPatientData(id){
    this.patientService.getPatientById(id).subscribe((result)=>{
      this.patient =<Object[]>result;
      console.log(id);
    });
    this.patientService.getMedicineByPatientId(id).subscribe((data)=>{

      this.medicines = <Object[]>data;
      console.log(this.medicines);
      
    });
  }
  ngOnInit(): void {

    this.patientId = +this.route.snapshot.paramMap.get('patientId');
   // this.openSnackBar();


    this.patientService.getPatients().subscribe((data)=>{
      console.log(data);
      this.pts =<Object[]>data;
    });
   
    
  }

}
