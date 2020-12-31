import { Injectable } from '@angular/core';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap, switchAll } from 'rxjs/operators';
import {EMPTY, Observable, Subject} from 'rxjs';


import {BehaviorSubject} from 'rxjs';

const WS_ENDPOINT = 'ws://localhost:9988/ws/demo';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() {}
  private socket$: WebSocketSubject<any>;
  private state$ = new BehaviorSubject<any>('');

  private static getNewWebSocket(): WebSocketSubject<any> {
    return webSocket(WS_ENDPOINT);
  }

  public connect(): void {
    var id = localStorage.getItem('id');
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = ChatService.getNewWebSocket() as WebSocketSubject<any>;
      var s = "id"+id;
      this.sendMessage(s);
      this.socket$.subscribe(
        msg => this.populateMessage(msg),
        // Called whenever there is a message from the server
        err => {
          console.log('getting error');
          console.log(err);
        },
        // Called if WebSocket API signals some kind of error
        () => {
          console.log('complete');
          this.socket$ = null;
        }
        // Called when connection is closed (for whatever reason)
      );
    }
  }

  private populateMessage(message: any): void{
    if (!this.socket$){
      return;
    }
    console.log('message received: ' + message);

    var obj = JSON. parse(message);
    
    // this.state$.next(message);

    // this.state$.next(message);
    let id: string = obj.patientId;
    let notification: string = obj.content;
    console.log('patient Id: ' + id);
    // id = message.substring(message.indexOf("/")+1,message.length);
    if(id == localStorage.getItem("id")) {
      console.log('message received: ' + message);
    this.state$.next(notification);
    } 
  }

  public getState(): Observable<string>{
    return this.state$.asObservable();
  }

  public sendMessage(msg: any): void {
    if (!this.socket$){
      return;
    }
    console.log('message: ' + msg);
    this.socket$.next(msg);
  }

  public close(): void {
    this.socket$.complete();
  }
}
