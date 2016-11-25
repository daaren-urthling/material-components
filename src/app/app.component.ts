import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  staticWidth = 25;
  compact = false;

  ngOnInit () {
    console.log(window.innerWidth);
    this.compact = window.innerWidth < 1200;
    // this.compact = true;
    // this.compact = false;
  }
}
