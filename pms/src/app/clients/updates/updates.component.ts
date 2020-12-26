import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/patients/Message';
import { ChatService } from 'src/app/services/webSocket/web-socket.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  receivedMessages: Array<Message> = [];
  idS:number;
  msg1:string;
  constructor( private chatService: ChatService) {
    this.chatService.connect();

    chatService.getState().subscribe((msg) => {
      // this.receivedMessages.unshift({text: msg.substring(0,msg.indexOf("/"))});
      this.receivedMessages.unshift({text: msg});
   });
       // let totalNotifications = 0;
    // this.receivedMessages.forEach(function (value) {
    //   console.log("dfdfdfdfdfdf");
      
    //   console.log(value);
     
    // });
    

   }

   test(msg:string){
    this.msg1 = msg.substring(msg.indexOf("/"),msg.length);
    return this.msg1;
   }

  ngOnInit(): void {
  }

}
