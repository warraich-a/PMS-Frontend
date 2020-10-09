import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PatientService } from '../services/patient/patient.service';

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

  constructor(private patientService: PatientService) { }

  pts: Object[];
  ngOnInit(): void {
    this.patientService.getPatients().subscribe((data)=>{
      console.log(data);
      this.pts =<Object[]>data;
    });
  }

}
