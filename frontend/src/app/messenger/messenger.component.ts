import { Component, OnInit, AfterViewInit } from '@angular/core';
import {CommunicationService} from "./communication.service";

@Component({
  selector: 'smartbot-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
  providers: [
    CommunicationService
  ]
})
export class MessengerComponent implements OnInit, AfterViewInit {

  /**
   * Is message control activated by user?
   * @type {boolean}
   */
  public messageActivated: boolean = false;

  /**
   * Current message
   */
  public message: string = '';

  /**
   * Message history for displaying on screen
   * @type Array
   */
  public messages = [
    {
      author: 'smartbot',
      text: 'Представьте, что вы гость в вашем отеле. Потестируйте бота.',
    },
    {
      author: 'smartbot',
      text: 'Добро пожаловать в наш отель!\nКак я могу к Вам обращаться?',
    },
  ];

  constructor(protected service: CommunicationService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.scrollDown();
  }

  /**
   * Forcibly scroll down messages
   */
  protected scrollDown() {
    let items = document.getElementsByClassName('messages');
    for (let i = 0; i != items.length; ++i) {
      let item = <HTMLElement>items[i];
      item.scrollTop = item.scrollHeight;
    }
  }

  /**
   * When user starts typing message
   */
  onFoundMessageControl() {
    this.messageActivated = true;
  }

  /**
   * Set focus on message control
   * @param el
   */
  activateMessageControl(el) {
    el.focus();
    this.messageActivated = true;
  }

  /**
   * When every key pressed in message control
   * @param e
   */
  onKeyPress(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      this.addMessage({
        author: 'user',
        text: this.message,
      });

      // Display bot's reply after several time
      setTimeout(() => {
        this.addMessage({
          author: 'smartbot',
          text: this.service.sendMessage(this.message),
        });
      }, 500 + 2000*Math.random());

      this.message = '';
    }
  }

  /**
   * Add message on screen and update scroll
   * @param messageItem
   */
  protected addMessage(messageItem)
  {
    this.messages.push(messageItem);
    setTimeout(() => {
      this.scrollDown();
    }, 100);
  }

}
