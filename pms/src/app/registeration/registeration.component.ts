import { PatientService } from './../services/patient/patient.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private patientService: PatientService) { }
  onSubmitPatient(data){
    this.patientToAdd =  {
       "year": data.year,
       "day": data.day,
       "month": data.month,
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
    this.patientService.addPatients(<JSON>this.patientToAdd);
    console.log(this.patientToAdd);
  }
  ngOnInit(): void {
  }

}
