import { TestBed } from '@angular/core/testing';

import { ChatService } from './web-socket.service';

describe('WebSocketService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
