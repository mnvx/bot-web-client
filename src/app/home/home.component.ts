import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Смарт отель';

  public messageActivated = false;

  onFocusMessage() {
    this.messageActivated = true;
  }
}
