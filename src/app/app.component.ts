import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  title = 'appfive';
  user_value =""
  getvalue(val)
  {
    console.warn(val)
    this.user_value=val
    
  }
}
