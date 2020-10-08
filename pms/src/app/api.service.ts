import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getPatients(){
    return this.httpClient.get(`http://localhost:9090/pharmacist/patients`);
  }

  public getPharmacists(){
    return this.httpClient.get(`http://localhost:9090/pharmacist`);
  }
  
}
