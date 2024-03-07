import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAbelAlonsoJimenez';
  firstTime: boolean = true;

  saludar(){
    this.firstTime = false;
  }

}
