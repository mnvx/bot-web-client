import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'smartbot-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit, AfterViewInit {

  /**
   * Is message control activated by user?
   * @type {boolean}
   */
  public messageActivated = false;

  /**
   * Current message
   */
  public message = '';

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

  constructor() { }

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
      this.messages.push({
        author: 'user',
        text: this.message,
      });
      this.message = '';
      setTimeout(() => {
        this.scrollDown();
      }, 100);
    }
  }

}
