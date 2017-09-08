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
   * @type {string}
   */
  public message: string = '';

  /**
   * Do bot printing now
   * @type {boolean}
   */
  public typing: boolean = false;

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
      this.scrollDownItem(<HTMLElement>items[i]);
    }
  }

  /**
   * Scroll down one item
   * @param item
   */
  protected scrollDownItem(item: HTMLElement) {
    let distance = item.scrollHeight - item.scrollTop;
    let step = distance / 50;
    let interval = setInterval(() => {
      item.scrollTop += step;
      if (distance < 0) {
        clearInterval(interval);
      }
      distance -= step ;
    }, 10);
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
      this.typing = true;
      this.service.sendMessage(this.message)
          .then(
            (response) => {
              setTimeout(() => {
                this.typing = false;
                if (response && response['speech']) {
                  this.addMessage({
                    author: 'smartbot',
                    text: response['speech'],
                  });
                }
                else {
                  this.addMessage({
                    author: 'smartbot',
                    text: 'Извините, но что-то пошло не так... Бот отвечает на неизвестном языке...',
                  });
                }
              }, 500 + 2000*Math.random());
            },
            (error) => {
              this.typing = false;
              this.addMessage({
                author: 'smartbot',
                text: 'Извините, но что-то пошло не так...',
              });
            }
          );

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
