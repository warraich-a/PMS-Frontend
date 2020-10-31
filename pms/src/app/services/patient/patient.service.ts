import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient,
              private _snackBar: MatSnackBar) { }

 
  public getPatients(){
    return this.httpClient.get(`http://localhost:9090/pharmacist/patients`);
  }
  public addPatients(data){
    return this.httpClient.post(`http://localhost:9090/pharmacist/patient`, data).subscribe((data)=>
    { 
      
    },
    (error: Response) => {
      this.errorHandler(error);
    });
  }
  public getPharmacists(){
    return this.httpClient.get(`http://localhost:9090/pharmacist`);
  }
  
  public getPatientById(id){
    return this.httpClient.get(`http://localhost:9090/pharmacist/patient/`+id);
  }
  public getMedicineByPatientId(id){
    return this.httpClient.get(`http://localhost:9090/pharmacist/medicines/`+id);
  }
  public addMedicineToPatient(data){
    return this.httpClient.post('http://localhost:9090/pharmacist/patient/medicine', data).toPromise().then(data => {
      console.log(data);
    })
  }
 
  public getMedicines(){
    return this.httpClient.get(`http://localhost:9090/pharmacist/medicines`);
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

  private successful(){
    this._snackBar.open('Information is updated!!', 'End now', {
      duration: 1000,
    });
  }

}
