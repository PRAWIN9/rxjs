import { Component, VERSION } from "@angular/core";
import { Appservice } from "./app.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  fromsub = null;
  constructor(private ser: Appservice) {
    this.ser.sub.subscribe(x => {
      console.log("from app sub ", x);
      this.fromsub = x;
    });
  }
}
