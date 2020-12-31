import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../classes/Medicine';
import { Patient } from '../classes/Patient';
import { PatientService } from '../services/patient/patient.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  patient: Patient;
  medicines: Medicine[];
  id : number;
  constructor(private patientService: PatientService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,) { }

  getPatientData(id){
    this.patientService.getPatientById(id).subscribe((data)=>{
      this.patient =<Patient>data;
      console.log("patient id -------");
      console.log(this.patient);
    });
    this.patientService.getMedicineByPatientIdClient(id).subscribe((data)=>{

      this.medicines = <Medicine[]>data;
      this.medicines.sort((a,b) => (+b.active) - (+a.active));

      console.log(this.medicines);
      
    },
    (error: Response) => {
      this.router.navigate(['pharmacist/patients'])
      this._snackBar.open('403, Error. No Access!', 'End now', {
        duration: 5000,
     });
      
    });
  }
  ngOnInit(): void {
   this.id = parseInt(localStorage.getItem('id'));
    this.getPatientData(this.id);
  }


}
