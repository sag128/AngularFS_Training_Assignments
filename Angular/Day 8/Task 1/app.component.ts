import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoAngularApp';
  menus:any[]=[{'name':'Home','link':'/'},
  {'name':'Categories','link':'/categories'},
  {'name':'About Us','link':'/about'},
  {'name':'Contact Us','link':'/contact'},
  {'name':'Login','link':'/login'}
]
}
