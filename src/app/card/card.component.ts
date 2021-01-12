import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.styl'],
  interpolation: ['[[', ']]']
})
export class CardComponent implements OnInit {
  number: number = 42
  title: string = 'Card component'
  text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eum?'
  array: number[] = [1, 1, 2, 3, 5, 8, 13]
  obj: object = {
    name: 'Vladilen',
    info: {
      age: 25,
      job: 'Frontend'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
