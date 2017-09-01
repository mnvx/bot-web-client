import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationService {

  sendMessage(message: string) {
    return 'ok';
  }
}