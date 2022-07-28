import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'etiya-angular';

  counter: number = 0;
  increase(){
    this.counter++;
  }
  get Counter() {
    return this.counter;
  }
}
