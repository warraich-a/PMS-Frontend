import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { MedicineComponent } from './medicine/medicine.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';

// below we are mentioning that this is an ngmodule just like in components we tell 
// it about the type of class above the export
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PharmacistComponent,
    MedicineComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
