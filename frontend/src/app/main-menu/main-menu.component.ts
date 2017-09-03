import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  /**
   * Open or not menu for small devices
   * @type {boolean}
   */
  public open = false;

  /**
   * Menu items
   * @type Object
   */
  public links = [
    {
      key: "blog",
      route: "",
      title: "Блог",
    },
    {
      key: "qa",
      route: "qa",
      title: "Вопросы и ответы",
    },
    {
      key: "price",
      route: "price",
      title: "Цены",
    },
  ];

  constructor(private router: Router) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.actualizeMenuVisibility();
  }

  onMenu() {
    this.open = !this.open;
    this.actualizeMenuVisibility();
  }

  protected actualizeMenuVisibility() {
    let items = document.getElementsByClassName('main-sub-menu');
    if (this.open) {
      for (let i = 0; i != items.length; ++i) {
        let item = <HTMLElement>items[i];
        item.classList.add('open');
        item.classList.remove('close');
      }
    }
    else {
      for (let i = 0; i != items.length; ++i) {
        let item = <HTMLElement>items[i];
        item.classList.remove('open');
        item.classList.add('close');
      }
    }
  }

  onSelectMenuItem(item) {
    this.router.navigate([item.route]);
  }

}
