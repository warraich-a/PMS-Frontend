import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/classes/Patient';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  patientToUpdate: { };
  patient: Patient;
  id: String =localStorage.getItem('id');
  token: string;
  oldPassword: String;
  constructor(private patientService: PatientService, ) { }
  onSubmitPatient(data){


    this.patientToUpdate =  {
       "id": this.id,
       "email": data.email,
       "password": data.password,
       "houseNr": data.houseNr,
       "streetName": data.streetName,
       "zipcode": data.zipcode, 
       "city": data.city,
   }
    this.patientService.updatePatients(<JSON>this.patientToUpdate);
    console.log(this.patientToUpdate);
    this.token = btoa(data.email + ":" + data.password); 
    localStorage.setItem('userToken',this.token);
    // console.log(atob(this.token));

    // this.patientService.updatePatients(<JSON>this.patientToUpdate).subscribe((response)=>
    // { 
    // console.log(this.patientToUpdate);
    // this.patient = <Patient>response;
    // console.log(this.patient);
    // this.token = btoa(this.patient.email + ":" + this.patient.password); 
    // localStorage.setItem('userToken',this.token);
    // },
  }
  ngOnInit(): void {
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient = <Patient>data;
    var tokenPassword = atob(localStorage.getItem('userToken'));
    this.oldPassword = tokenPassword.substring(tokenPassword.indexOf(":")+1,tokenPassword.length);
      // console.log(this.oldPassword);
    })
  }
}
