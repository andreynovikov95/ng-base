import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title: string = 'ng-basics';
  toggle: boolean = true

  cards: Card[] = [
    {
      title: 'Card 1',
      text: 'This is card number 1'
    },
    {
      title: 'Card is card 2',
      text: 'This is card number 2'
    },
    {
      title: 'Card is card 3',
      text: 'This is card number 3'
    },
    {
      title: 'Last card!',
      text: 'This is card number 4'
    }
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
