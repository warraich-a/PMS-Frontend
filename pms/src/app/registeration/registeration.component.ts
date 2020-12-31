import { Router } from '@angular/router';
import { PatientService } from './../services/patient/patient.service';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ChatService } from '../services/webSocket/web-socket.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

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
  // connect = this.chatService.connect();

  constructor(private patientService: PatientService,
              private router: Router,
              private _snackBar: MatSnackBar,
              private chatService: ChatService) { }


  onSubmitPatient(data){
    this.patientToAdd =  {
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
      //  "webSocket": this.connect,
   }
    this.patientService.addPatients(<JSON>this.patientToAdd).subscribe((data)=>
    { 
      console.log(this.patientToAdd);
     this.router.navigate(['/login']);
    },
    (error: Response) => {
      this.errorHandler(error);
    });
   
  }

  private errorHandler(error: Response){
    if(error.status === 409){
      this._snackBar.open('Already exist!!', 'End now', {
        duration: 1000,
      });
    } 
    else if(error.status === 404){
      this._snackBar.open('Not Found!!', 'End now', {
        duration: 1000,
     });
    } 
    else 
    {
      this._snackBar.open('Wrong data provided', 'End now', {
        duration: 1000,
      });
    }
  };
  ngOnInit(): void {
  }

}
