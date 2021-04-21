import { Component, Input } from "@angular/core";
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
  constructor(private ser: Appservice) {
    this.ser.sub.subscribe(x => {
      console.log("from hello sub ", x);
    });

      this.ser.obj.subscribe(x => {
      console.log("from hello obj ", x);
    });
  }

  emit() {
    this.ser.sendData(Math.random());
  }
}
