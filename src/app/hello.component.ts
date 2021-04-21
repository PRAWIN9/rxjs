import { Component, Input } from "@angular/core";
import { interval } from "rxjs";
import { Appservice } from "./app.service";

@Component({
  selector: "hello",
  template: `
    <button (click)="emit()">Click</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  isData= false;
  count=0;
  constructor(private ser: Appservice) {
    // this.ser.sub.subscribe(x => {
    //   console.log("from hello sub ", x);
    // });

    this.ser.obj.subscribe(x => {
      console.log("from hello sub obj ", x);
    });

    // this.ser.behobj.subscribe(x => {
    //   console.log("from hello beh obs ", x);
    
    // });


  }

  emit() {
    this.ser.sendData(Math.random());
    this.ser.sendBehData(Math.random());
    this.ser.sendRepData(Math.random());

    if(!this.isData){
      this.isData=true;
      this.ser.behobj.subscribe(x => {
      console.log("from hello beh obj ", x);  //it will retain the value from hello obj
    });
    }
    this.count++;
    if(this.count==3){
      this.ser.repobj.subscribe(x => {
      console.log("from hello rep obj ", x);
    });

    }
  }
}
