import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {

  firstTime: boolean = false;

  constructor(private route: ActivatedRoute){
    route.params.subscribe(
      params => {
        this.firstTime = params["firstTime"]
      }
    )
  }
}
