import { MedicineService } from './../services/medicine/medicine.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormArray } from '@angular/forms';

export interface Medicine{
  name:string;
  id:number;
  disease:string;
}
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
 

  constructor(private medicineServices: MedicineService) { }

 
  medicines: Object[];
  ngOnInit(): void{
    this.medicineServices.getMedicines().subscribe((data)=>{
      console.log(data);
      this.medicines = <object[]>data;
    });
    
  }
}
