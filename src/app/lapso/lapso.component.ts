import { Component, Input, OnInit } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-lapso',
  templateUrl: './lapso.component.html',
  styleUrls: ['./lapso.component.css']
})
export class LapsoComponent implements OnInit {
  @Input() time: number = 0;
  formattedTime: string = "";
  segundos: number = 0;
  minutos: number = 0;
  horas: number = 0;

  
  ngOnInit(): void {
    this.format();
  }

  format(){
    if(this.time>=60){
      this.segundos = this.time%60;
      this.minutos = this.time/60;
      if(this.minutos >= 60){
        this.horas = this.minutos/60;
        this.minutos = this.minutos%60;
      }
    }
    else{
      this.segundos = this.time;
    }
    
    this.formattedTime=Math.floor(this.horas)+":"+Math.floor(this.minutos)+":"+Math.floor(this.segundos);
  }

}
