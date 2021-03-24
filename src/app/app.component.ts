import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber: number[]= [1, 3, 5, 7];
  evenNumber: number[]=[2, 4, 6, 8];
  onOdd: boolean = false;
}
