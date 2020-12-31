import { UpdatesComponent } from './clients/updates/updates.component';
import { ForbiddenComponent } from './errors/forbidden/forbidden.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { PharmacistComponent } from './patients/pharmacist.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {path:'pharmacist/patients', component: PharmacistComponent, canActivate:[AuthGuard]},
  {path:'pharmacist/patients/:patientId', component: PharmacistComponent, canActivate:[AuthGuard]},
  {path:'pharmacist/medicines', component: MedicineComponent, canActivate:[AuthGuard]},
  {path:'client', component: ClientsComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'login', pathMatch : 'full'},
  {path: 'register', component: RegisterationComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path:'client/updates', component: UpdatesComponent, canActivate:[AuthGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
