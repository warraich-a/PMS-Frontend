import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/patients/Message';
import { NotificationClass } from 'src/app/patients/NotificationClass';
import { ChatService } from 'src/app/services/webSocket/web-socket.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {

  notifications:number;
  notification: NotificationClass;
  receivedMessages: Array<NotificationClass> = [];

  constructor( private chatService: ChatService, 
    private router: Router,) {
    this.chatService.connect();

    chatService.getState().subscribe((msg) => {
      // this.notification = new NotificationClass(msg, Date.now().toString())
      this.receivedMessages.unshift({content: msg, date: Date.now()});
      this.notifications = this.receivedMessages.length;
   });

   }
  hidden = false;

  toggleBadgeVisibility() {
    this.notifications = 0;
    this.router.navigate(['/client/updates']);
      window.location.href = '/client/updates';
  }
  toNotifications(){
    
  }
  ngOnInit(): void {
    // this.notifications = 0;
    // let totalNotifications = 0;
    // this.receivedMessages.forEach(function (value) {
    //   this.totalNotifications++;
     
    // });
    //  this.notifications = totalNotifications;
  }

}
