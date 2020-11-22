import { PharmacistComponent } from './../pharmacist/pharmacist.component';
import { PatientService } from 'src/app/services/patient/patient.service';
import { ApiService } from './../api.service';
import { Component, OnInit, Type } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { Patient } from '../classes/Patient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  token: string;
  id: number;
  user: Patient;
  constructor(private PatientService: PatientService, private router : Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit(data){
    // encoding the email and password 
    this.token = btoa(data.email + ":" + data.password); 

    this.PatientService.login(data).subscribe((response:any)=>{
      this.user = <Patient>response;
      this.id = this.user.id;

      //setting the local storage items e.g. token and userId
      localStorage.setItem('userToken',this.token);
      localStorage.setItem('id',this.id.toString());

       // here I am setting the time for auto logout, 1000 is one second and multiply by 60 means one hour
      this.PatientService.autoLogout((1000 * 60)*60);
      console.log(response);

      // to navigate to correct components
      if(this.user.userType == "Pharmacist"){
        this.router.navigate(['/pharmacist/patients']);
      }
      else{
        this.router.navigate(['client']);
      }
    },  
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
      console.log(err)
    })
    // this.patientService.userAuthentication(data);

  }
}
