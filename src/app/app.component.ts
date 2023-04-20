import { Component} from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `
        <h1>Welcome to {{title}}!</h1>
        <p> current count is {{ClickCounter}} </p>
        <child-component [count]=Counter (countChanged)="countChangedHandler($event)"></child-component>` ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction';
  Counter = 5;
 
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
}