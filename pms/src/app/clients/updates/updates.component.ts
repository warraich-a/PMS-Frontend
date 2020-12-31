
import { PatientService } from 'src/app/services/patient/patient.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/patients/Message';
import { ChatService } from 'src/app/services/webSocket/web-socket.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NotificationClass } from 'src/app/patients/NotificationClass';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  receivedMessages: Array<NotificationClass> = [];
  existingNotifications: Array<NotificationClass> = [];
  notification: NotificationClass;
  id:String = localStorage.getItem('id');
  msg1:string;
  constructor( private chatService: ChatService,
              private patientService: PatientService,
              private _snackBar: MatSnackBar) {
              this.chatService.connect();

            chatService.getState().subscribe((msg) => {
      // this.receivedMessages.unshift({text: msg.substring(0,msg.indexOf("/"))});
    //  this.notification = new NotificationClass(msg, Date.now().toString())
    var currentDate = new Date()
    console.log(currentDate);
      this.existingNotifications.unshift({content: msg, date: currentDate});
    //   this._snackBar.open(msg, 'End now', {
    //     duration: 1000,
    //  });
   });

   }

   test(msg:string){
    this.msg1 = msg.substring(msg.indexOf("/"),msg.length);
    return this.msg1;
   }

  ngOnInit(): void {
    this.patientService.getNoti(this.id).subscribe(response=>{
      this.existingNotifications = <Object[]>response;
      this.existingNotifications.reverse();
      console.log(this.receivedMessages);
    })
    // this.patientService.getNotifications()

  }

}
