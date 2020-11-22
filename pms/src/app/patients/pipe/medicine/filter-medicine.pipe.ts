import { Medicine } from './../../../classes/Medicine';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMedicine'
})
export class FilterMedicinePipe implements PipeTransform {

  transform(medicines: Medicine[], searchValue:string): Medicine[] {
    if(!medicines || !searchValue){
      return medicines;
    }
    return medicines.filter(medicine=>
      medicine.medName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      
      );
  }

}
