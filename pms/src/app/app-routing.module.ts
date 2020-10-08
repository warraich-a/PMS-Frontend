import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';

const routes: Routes = [

  {path:'pharmacist', component: PharmacistComponent},
  {path:'pharmacist/patients', component: PatientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
