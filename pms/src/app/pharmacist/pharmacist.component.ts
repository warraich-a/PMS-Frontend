import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


export interface Pharmacist{
  firstName:string;
  id:number;
  lastName: string;
  email: string;
}
@Component({
  selector: 'app-pharmacist',
  templateUrl: './pharmacist.component.html',
  styleUrls: ['./pharmacist.component.css']
})


export class PharmacistComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  pharmacists: Pharmacist[];
  ngOnInit(): void {
    this.apiService.getPharmacists().subscribe((pharmacistData)=>{
      console.log(pharmacistData);
      this.pharmacists =<Pharmacist[]>pharmacistData;
    });
  }
}
