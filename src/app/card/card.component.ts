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
  imgUrl: string = 'https://images.unsplash.com/photo-1585159904350-24ea5cf707c0?&auto=format&fit=crop&w=1950&q=80'
  array: number[] = [1, 1, 2, 3, 5, 8, 13]
  obj: object = {
    name: 'Vladilen',
    info: {
      age: 25,
      job: 'Frontend'
    }
  }
  disabled: boolean = false

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://images.unsplash.com/photo-1518409274682-1cb2fe2955a8?&auto=format&fit=crop&w=1568&q=80'
      this.disabled = true
    }, 3000)
  }

  changeTitle() {
    this.title = 'Title has been changed'
  }

  inputHunler(value: string) {
      this.title = value
  }

  getInfo(): string {
    return 'This is my info'
  }

}
