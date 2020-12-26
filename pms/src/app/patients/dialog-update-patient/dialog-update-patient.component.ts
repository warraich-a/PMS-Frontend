import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from 'src/app/classes/Patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { DialogAddPatientComponent } from '../dialog-add-patient/dialog-add-patient.component';

@Component({
  selector: 'app-dialog-update-patient',
  templateUrl: './dialog-update-patient.component.html',
  styleUrls: ['./dialog-update-patient.component.css']
})
export class DialogUpdatePatientComponent implements OnInit {

 
  id: number;

  patient: Patient;
  patientToUpdate:{};
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
    {month : "Mar"},
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

  firstName:string;

  constructor(private patientService: PatientService,  
    public dialogRef: MatDialogRef<DialogUpdatePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    CloseDialog(){
      this.dialogRef.close();
    }
    
    onSubmitPatient(data){
      this.patientToUpdate =  {
         "id": this.id,
         "dateOfBirth": data.dateOfBirth,
         "disease": data.disease,
         "email": data.email,
         "firstName": data.firstName,
         "lastName": data.lastName,
         "password": data.password,
         "houseNr": data.houseNr,
         "streetName": data.streetName,
         "zipcode": data.zipcode, 
         "city": data.city,
         "userType": "Patient",
     }
      this.patientService.updatePatients(<JSON>this.patientToUpdate);
      console.log(this.patientToUpdate);
      this.CloseDialog()
    }

  ngOnInit(): void {
    this.id = this.data.patient.id;
    this.patient = this.data;
    this.firstName = "Anas";
    // console.log(this.sellingPrice);
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient = <Patient>data;
     
      console.log(this.patient);
    })
  }
}