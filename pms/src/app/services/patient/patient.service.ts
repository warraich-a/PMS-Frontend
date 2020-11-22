import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';

// const HttpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'Basic ' + btoa('john:1234')
//   })
// };
@Injectable({
  providedIn: 'root'
})
export class PatientService extends ApiService {
  

  constructor(private httpClient: HttpClient,
              private _snackBar: MatSnackBar,) {
  super();
  }
 

  credentials: string;

  public login(data){
    this.credentials = btoa(data.email + ":" + data.password); // email:password
    console.log(this.HttpOptions.headers);
    
      this.HttpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': this.credentials})
      }
     
    return this.httpClient.get('http://localhost:9090/pharmacist?email='+data.email + '&password='+data.password, this.HttpOptions);

  }

  public getPatients(){
    console.log(this.HttpOptions);
    return this.httpClient.get(`http://localhost:9090/pharmacist/patients`, this.HttpOptions);
  }
  public addPatients(data){
    return this.httpClient.post(`http://localhost:9090/pharmacist/patient`, data).subscribe((data)=>
    { 
      
    },
    (error: Response) => {
      this.errorHandler(error);
    });
  }
  public updatePatients(data){
    return this.httpClient.put(`http://localhost:9090/pharmacist/patient`, data, this.HttpOptions).subscribe((data)=>
    { 
      
    },
    (error: Response) => {
      this.errorHandler(error);
    });
  }
  public deletePatient(id){
    return this.httpClient.delete('http://localhost:9090/pharmacist/patient/' + id + '/delete/', this.HttpOptions).subscribe((data)=>
    { 
      
    },
    (error: Response) => {
      this.errorHandler(error);
    });
  }
  
  
  public getPharmacists(){
    return this.httpClient.get(`http://localhost:9090/pharmacist`, this.HttpOptions);
  }
  
  public getPatientById(id){
    return this.httpClient.get(`http://localhost:9090/pharmacist/patient/`+id, this.HttpOptions);
  }
  public getMedicineByPatientId(id){
    return this.httpClient.get(`http://localhost:9090/pharmacist/medicines/`+id, this.HttpOptions);
  }
  public getMedicineByPatientIdClient(id){
    return this.httpClient.get(`http://localhost:9090/pharmacist/client/medicine/`+id, this.HttpOptions);
  }
  public addMedicineToPatient(data){
    return this.httpClient.post('http://localhost:9090/pharmacist/patient/medicine', data, this.HttpOptions).toPromise().then(data => {
      console.log(data);
    },
    (error: Response) => {
      this.errorHandler(error);
    });
  }
 
  public getMedicines(){
    return this.httpClient.get(`http://localhost:9090/pharmacist/medicines`, this.HttpOptions);
  }
  
  // in order to use the put method you must provide some data, so that it completes the put function. e.g. below im sending an empty string 
  // becaues I dont have any other data to update in this specific method. however in the backend I just change the value from true to false.
  public removeMedicinePatient(patientId, medicineId){
    return this.httpClient.put(`http://localhost:9090/pharmacist/delete/patient/` + patientId + '/medicine/' +medicineId,"", this.HttpOptions).subscribe((data)=>
    { 
      this._snackBar.open('Succesfully removed from active medicines', 'End now', {
        duration: 5000,
      });
      location.reload();
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

  private successful(){
    this._snackBar.open('Information is updated!!', 'End now', {
      duration: 1000,
    });
  }

}
