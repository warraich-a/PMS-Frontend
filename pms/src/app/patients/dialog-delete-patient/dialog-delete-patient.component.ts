import { Patient } from 'src/app/classes/Patient';
import { PatientService } from './../../services/patient/patient.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-delete-patient',
  templateUrl: './dialog-delete-patient.component.html',
  styleUrls: ['./dialog-delete-patient.component.css']
})
export class DialogDeletePatientComponent implements OnInit {

  id: number;
  constructor(private patientService: PatientService,  
              public dialogRef: MatDialogRef<DialogDeletePatientComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _snackBar: MatSnackBar) { }

    closeDialog(): void {
      this.dialogRef.close();
    }
    deletePatient(){
      this.patientService.deletePatient(this.id);
      this.closeDialog()
    }
    ngOnInit(): void {
      this.id = this.data.Patient;
      console.log(this.id);
    }
  }