import { ApiService } from 'src/app/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class MedicineService extends ApiService{

  constructor(private httpClient: HttpClient,
             private _snackBar: MatSnackBar) { 
          super(); 
  }

  public getMedicines(){
    return this.httpClient.get(`http://localhost:9090/pharmacist/medicines`, this.HttpOptions);
  }
  public getMedicineById(id){
    return this.httpClient.get(`http://localhost:9090/pharmacist/medicine/`+id, this.HttpOptions);
  }
  public addMedicine(data){
    return this.httpClient.post('http://localhost:9090/pharmacist/medicine', data, this.HttpOptions).subscribe((data)=>
    { 
      
    },
    (error: Response) => {
      this.errorHandler(error);
    });
      
  }
  public deleteMedicine(id){
    return this.httpClient.delete('http://localhost:9090/pharmacist/medicine/' + id + '/delete/', this.HttpOptions).subscribe((data)=>
    {

    },
    (error: Response) => {
      this.errorHandler(error);
    });
  }
  public updateMedicine(data){
    return this.httpClient.put('http://localhost:9090/pharmacist/medicine', data, this.HttpOptions).subscribe((data)=>
    {
      this.successful();
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
