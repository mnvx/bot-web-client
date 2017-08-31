import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smartbot-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  public messageActivated = false;

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
