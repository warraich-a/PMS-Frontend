import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient: HttpClient) { }

  public getMedicines(){
    return this.httpClient.get(`http://localhost:9090/pharmacist/medicines`);
  }

}
