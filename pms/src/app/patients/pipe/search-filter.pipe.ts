import { Medicine } from './../../classes/Medicine';
import { Patient } from 'src/app/classes/Patient';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  //  *ngFor="let patient of patients | searchFilter:searchValue" 

  //this patient list will be provided where you call this pipe, for example in for loop of patients list. see first line in *ngFor
  // that is where i have called this pipe in patient.component.ts
  // and the sValue is the value on the right side of the filter, for example searchValue after colons, see first line in *ngFor
  transform(patients: Patient[], sValue: string): Patient[] {
    if(!patients || !sValue){
      return patients;
    }
    return patients.filter(patient => 
      patient.firstName.toLocaleLowerCase().includes(sValue.toLocaleLowerCase()) ||
      patient.lastName.toLocaleLowerCase().includes(sValue.toLocaleLowerCase()) ||
      patient.email.toLocaleLowerCase().includes(sValue.toLocaleLowerCase())
      
      );
  }
  
}
