import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private apiService: ApiService) { }

  pts: Patients[];
  ngOnInit(): void {
    this.apiService.getPatients().subscribe((data)=>{
      console.log(data);
      this.pts =<Patients[]>data;
    });
  }

}
