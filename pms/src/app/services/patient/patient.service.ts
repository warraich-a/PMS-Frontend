import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

 
  public getPatients(){
    return this.httpClient.get(`http://localhost:9090/pharmacist/patients`);
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
  
}
