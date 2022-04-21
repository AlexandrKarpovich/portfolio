import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit  {

  title = 'Main';

  constructor() { }

  @ViewChild('myCanvas')
  private myCanvas: ElementRef = {} as ElementRef;

  
  ngAfterViewInit(): void {
    
  }

  




  

}
