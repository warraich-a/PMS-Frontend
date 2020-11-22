import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Local } from 'protractor/built/driverProviders';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: HttpClient;
  // this is a method that checks if there is any local storage item 
  //if if there exist any, then it is setting the Http header with the userToken.
  // and in this scenerio the user token is the decoded version of email and password which is set when user logged in successfull
  // that can be found in login component
  // and that HttpOption will be sent by each request to the back end, so basically, email:password along with Authorization and Basic
  // will be sent to backend and in the backend that will be dealt accordingly.
  checkLocalStorage(){
    if(localStorage.getItem("userToken") != null){
      this.HttpOptions.headers = this.HttpOptions.headers.set('Authorization', 'Basic ' + localStorage.getItem("userToken"));
    };
  }
  HttpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor() {
    this.checkLocalStorage();
   }

  //  this can be used for different purposes e.g. you if the user is logged in, then you can use it at different places
  // lets say you use it in *ngIf and show or hide the logout button. 
   isLoggedIn(){
     return !localStorage.getItem("userId");
   }
   logout(){
    localStorage.removeItem("userToken");
    localStorage.removeItem("id");
    // to reload the current location, and it will automatically be redirected to login page which is handled by authguards. 
    // so once the page is refreshed, the route will be called again and the route has the authguard which checks if there is 
    // any localstorage item. if not then you wont be able to access the route. e.g. pharmacist/patients
    location.reload();
   }
   //time will be set once the user is logged in, which is in login component in success of login. 
  autoLogout(time: number){
    setTimeout(()=> {
      // this logout function will be called accordignly the given time, for example 1 hour. 
    this.logout()}, time);

  }
}
