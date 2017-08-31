import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smartbot-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  public messageActivated = false;

  public messages = [
    {
      author: 'smartbot',
      text: 'Представьте, что вы гость в вашем отеле. Потестируйте бота.',
    },
    {
      author: 'smartbot',
      text: 'Добро пожаловать в наш отель! Как я могу к Вам обращаться?',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onFoundMessageControl() {
    this.messageActivated = true;
  }

  activateMessageControl(el) {
    el.focus();
  }

}
