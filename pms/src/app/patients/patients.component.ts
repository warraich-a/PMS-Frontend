import { Medicine } from 'src/app/classes/Medicine';
import { DialogUpdatePatientComponent } from './dialog-update-patient/dialog-update-patient.component';
import { Patient } from 'src/app/classes/Patient';
import { fade } from './../animation/fade';
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
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPatientComponent } from './dialog-add-patient/dialog-add-patient.component';
import { trigger, transition, useAnimation, animate, style } from '@angular/animations';
import { bounce } from 'ng-animate';
import { DialogDeletePatientComponent } from './dialog-delete-patient/dialog-delete-patient.component';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  animations: [
    fade,
    trigger('bounce', [transition('* => *', useAnimation(bounce))]),
    // trigger('slideInOut', [
    //   transition(':enter', [
    //     style({transform: 'translateY(-100%)'}),
    //     animate('200ms ease-in', style({transform: 'translateY(0%)'}))
    //   ])
    //   // transition(':leave', [
    //   //   animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
    //   // ])
    // ])
  ]
})


export class PatientsComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  bounce: any;
  pts: Patient[];
  patient: Patient;
  medicines: Medicine[];
  allMedicines:  Medicine[];
  patientId: number;
  medicineToAdd: {}
  medicineId : number;
  patientIdToAddMed :number;
  courses: [];
  constructor(private patientService: PatientService,
              private _snackBar: MatSnackBar,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  openSnackBar() {
    this._snackBar.open('Cannonball!!', 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['blue-snackbar']
    });
  }
  
  getPatientData(id){
    this.patientService.getPatientById(id).subscribe((data)=>{
      this.patient =<Patient>data;
      this.patientIdToAddMed = id;
      console.log("patient id -------");
      console.log(this.patient);
    });
    this.patientService.getMedicineByPatientId(id).subscribe((data)=>{

      this.medicines = <Medicine[]>data;
      console.log(this.medicines);
      
    });
    
    this.patientService.getMedicines().subscribe((data)=>{
      console.log(data);
      this.allMedicines =<Medicine[]>data;
    });

  } 

  addMedicineToPatient(data){
    console.log("here");
    console.log(data.medicineId);
    this.medicineToAdd = {
        "medicineId": data.medicineId,
        "patientId": this.patientIdToAddMed
    };
    
    this.patientService.addMedicineToPatient(<JSON>this.medicineToAdd);
    
  }
  openDialogAddPatient(): void {
    const dialogRef = this.dialog.open(DialogAddPatientComponent,{
      width: '70%',
      panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']
    }); 
    dialogRef.afterClosed( )
      .subscribe(res => {
        this.getAllPatients();
        // this.ngOnInit();
    });
  }

  getAllPatients(){
    this.patientService.getPatients().subscribe((data)=>{
      console.log(data);
      this.pts =<Patient[]>data;
    });
  }


  openDialogUpdate(patient: Patient): void {
    const dialogRef = this.dialog.open(DialogUpdatePatientComponent, {
      width: '70%',
      data: {patient: patient},
      panelClass: ['custom-modalbox','animate__animated','animate__slideInLeft']
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
       this.getAllPatients();
        // this.ngOnInit();
    });
  }

  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(DialogDeletePatientComponent, {
      // width: '30%',
      data: {Patient: id},
      panelClass: 'custom-modalbox'
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
        this.getAllPatients();
        this.ngOnInit();
    });
  }

  ngOnInit(): void {

    this.patientId = +this.route.snapshot.paramMap.get('patientId');
   // this.openSnackBar();


   this.getAllPatients();
    
  }

}
