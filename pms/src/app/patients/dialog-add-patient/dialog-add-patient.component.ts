import { PatientService } from './../../services/patient/patient.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-patient',
  templateUrl: './dialog-add-patient.component.html',
  styleUrls: ['./dialog-add-patient.component.css']
})
export class DialogAddPatientComponent implements OnInit {

  patientToAdd:{};
  years = [
    {year : 1999},
    {year : 2000},
    {year : 2001},
    {year : 2002},
    {year : 2003},
    {year : 2004},
    {year : 2005},
    {year : 2006},
    {year : 2007},
    {year : 2008},
    {year : 2009},
    {year : 2010},
    {year : 2011},
    {year : 2012},
    {year : 2013},
    {year : 2014},
    {year : 2015},
    {year : 2016},
    {year : 2017},
    {year : 2018},
    {year : 2019},
    {year : 2020},
  ]
  months = [
    {month : "Jan"},
    {month : "Feb"},
    {month : "Apr"},
    {month : "May"},
    {month : "Jun"},
    {month : "July"},
    {month : "Aug"},
    {month : "Sep"},
    {month : "Oct"},
    {month : "Nov"},
    {month : "Dec"},
  ]

  days= [
    {day: 1},
    {day: 2},
    {day: 3},
    {day: 4},
    {day: 5}

  ]

  constructor(private patientService: PatientService,  
    public dialogRef: MatDialogRef<DialogAddPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    CloseDialog(){
      this.dialogRef.close();
    }
    
    onSubmitPatient(data){
      this.patientToAdd =  {
         "year": data.year,
         "day": data.day,
         "month": data.month,
         "disease": data.disease,
         "email": data.email,
         "firstName": data.firstName,
         "lastName": data.lastName,
         "password": data.password 
     }
      this.patientService.addPatients(<JSON>this.patientToAdd);
      console.log(this.patientToAdd);
      this.CloseDialog()
    }

  ngOnInit(): void {
  }

}
