import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from 'src/app/services/patient/patient.service';
import { ChatService } from 'src/app/services/webSocket/web-socket.service';

@Component({
  selector: 'app-remove-patient-medicine',
  templateUrl: './remove-patient-medicine.component.html',
  styleUrls: ['./remove-patient-medicine.component.css']
})
export class RemovePatientMedicineComponent implements OnInit {

  id: number;
  medName: string;
  medId: number;
  constructor(private patientService: PatientService,  
              public dialogRef: MatDialogRef<RemovePatientMedicineComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private _snackBar: MatSnackBar,
              private chatService: ChatService) {
                this.chatService.connect();

              // chatService.getState().subscribe((msg) => {
              //   this.receivedMessages.unshift({text: msg});
              // });

               }

sendMessage(data): void {
console.log(data)

this.chatService.sendMessage(data);
// this.chatService.sendMessage(data);


}
closeDialog(): void {
  this.dialogRef.close();
}
deletePatient(){
  this.patientService.removeMedicinePatient(this.id, this.medId);
  var obj = {
    "patientId": this.id,
    "content": "A medicine name "+this.medName+" is removed"
  }
  var myJSON = JSON.stringify(obj);

  this.sendMessage(myJSON);
  console.log(this.medId);
  this.closeDialog()
}
ngOnInit(): void {
  this.id = this.data.patientId;
  this.medId = this.data.medId;
  this.medName = this.data.medName;


  console.log(this.id);
}
}
