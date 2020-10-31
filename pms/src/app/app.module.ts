import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { MedicineComponent } from './medicine/medicine.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddMedicineComponent } from './medicine/dialog-add-medicine/dialog-add-medicine.component';
import { DialogDeleteMedicineComponent } from './medicine/dialog-delete-medicine/dialog-delete-medicine.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogUpdateMedicineComponent } from './medicine/dialog-update-medicine/dialog-update-medicine.component';
import { DialogAddPatientComponent } from './patients/dialog-add-patient/dialog-add-patient.component';

// below we are mentioning that this is an ngmodule just like in components we tell 
// it about the type of class above the export
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PharmacistComponent,
    MedicineComponent,
    LoginComponent,
    DialogAddMedicineComponent,
    DialogDeleteMedicineComponent,
    DialogUpdateMedicineComponent,
    DialogAddPatientComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
