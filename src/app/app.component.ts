import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
      <div><h1>{{pageTitle}}</h1>
         <div>My first component</div>
      </div>
  `,

  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = `Acme Product Mangement`;
  title = 'Angular: Getting Started';
}
