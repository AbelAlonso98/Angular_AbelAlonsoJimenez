import { Component } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent {
  time: number = 0; // Pon aqui cosas para probar
  playing: boolean = false;
  records: number[] = [];
  aux: number = 0;

  async start(){
    this.playing = true;
    while(this.playing){
      this.time++;
      await new Promise(f => setTimeout(f, 1000));
    }
  }
  stop(){
    this.playing = false;
  }

  record(){
    if(this.records.length==0)
    this.records.push(this.time);
    else{
      this.records.forEach(element => {
        this.aux += element;
      });
      this.records.push(this.time - this.aux);
      this.aux = 0;
    }
  }
}
