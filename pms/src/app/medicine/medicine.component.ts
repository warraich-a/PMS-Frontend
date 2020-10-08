import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormArray } from '@angular/forms';

export interface Patients{
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
 
  medicineForms : FormArray = this.fb.array([]);

  constructor(private fb: FormBuilder) { }

 
  ngOnInit(){
    this.addMedForm();
  }
  
addMedForm(){
  this.medicineForms.push(this.fb.group({
    medId : [0],
    medName: [''],  
  }))
}
}
