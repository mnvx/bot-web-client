import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class CommunicationService {

  result: string;

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post(environment.apiUrl + 'send-message', {message: message})
        .toPromise()
        .then(response => response);
  }

  demoMessage() {
    this.http.get(environment.apiUrl + 'demo-message/3').subscribe(data => {
      console.log(data);
    });
  }
}