import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counter = 0;

  increase() {
    this.counter++;
  }

  dicrease() {
    this.counter--;
  }
}

