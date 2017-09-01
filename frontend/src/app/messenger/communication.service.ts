import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommunicationService {

  result: string;

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post('http://127.0.0.1:5000/send-message', {message: message})
        .toPromise()
        .then(response => response);
  }

  demoMessage() {
    this.http.get('http://127.0.0.1:5000/demo-message/3').subscribe(data => {
      console.log(data);
    });
  }
}