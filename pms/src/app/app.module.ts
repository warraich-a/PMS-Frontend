import { AuthGuard } from './auth/auth.guard';
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
import { PharmacistComponent } from './patients/pharmacist.component';
import { MedicineComponent } from './medicine/medicine.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogAddMedicineComponent } from './medicine/dialog-add-medicine/dialog-add-medicine.component';
import { DialogDeleteMedicineComponent } from './medicine/dialog-delete-medicine/dialog-delete-medicine.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogUpdateMedicineComponent } from './medicine/dialog-update-medicine/dialog-update-medicine.component';
import { DialogAddPatientComponent } from './patients/dialog-add-patient/dialog-add-patient.component';
import { DialogUpdatePatientComponent } from './patients/dialog-update-patient/dialog-update-patient.component';
import { DialogDeletePatientComponent } from './patients/dialog-delete-patient/dialog-delete-patient.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SearchFilterPipe } from './patients/pipe/search-filter.pipe';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { ClientHeaderComponent } from './clients/client-header/client-header.component';
import { UpdatesComponent } from './clients/updates/updates.component';
import { FilterMedicinePipe } from './patients/pipe/medicine/filter-medicine.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import { RemovePatientMedicineComponent } from './patients/remove-patient-medicine/remove-patient-medicine.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
// below we are mentioning that this is an ngmodule just like in components we tell 
// it about the type of class above the export
@NgModule({
  declarations: [
    AppComponent,
    PharmacistComponent,
    MedicineComponent,
    LoginComponent,
    DialogAddMedicineComponent,
    DialogDeleteMedicineComponent,
    DialogUpdateMedicineComponent,
    DialogAddPatientComponent,
    DialogUpdatePatientComponent,
    DialogDeletePatientComponent,
    SearchFilterPipe,
    HeaderComponent,
    ClientsComponent,
    RegisterationComponent,
    NavBarComponent,
    ForbiddenComponent,
    ClientHeaderComponent,
    UpdatesComponent,
    FilterMedicinePipe,
    RemovePatientMedicineComponent,
    EditProfileComponent
  
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
    MatTooltipModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatBadgeModule 
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
