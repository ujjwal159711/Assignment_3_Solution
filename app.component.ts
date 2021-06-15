import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  arr = [];

  onLog(){
    this.show = !this.show;
    this.arr.push(this.arr.length+1);
  }
}
