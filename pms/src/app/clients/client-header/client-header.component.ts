import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/patients/Message';
import { ChatService } from 'src/app/services/webSocket/web-socket.service';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.css']
})
export class ClientHeaderComponent implements OnInit {

  notifications:number;
  receivedMessages: Array<Message> = [];

  constructor( private chatService: ChatService) {
    this.chatService.connect();

    chatService.getState().subscribe((msg) => {
      this.receivedMessages.unshift({text: msg});
      this.notifications = this.receivedMessages.length;
   });

   }
  hidden = false;

  toggleBadgeVisibility() {
    this.notifications = 0;
  }
  ngOnInit(): void {
    // let totalNotifications = 0;
    // this.receivedMessages.forEach(function (value) {
    //   this.totalNotifications++;
     
    // });
    //  this.notifications = totalNotifications;
  }

}
