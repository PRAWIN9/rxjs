import { Component, VERSION } from "@angular/core";
import { Appservice } from "./app.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  fromsub = null;
  constructor(private ser: Appservice) {
    // this.ser.sub.subscribe(x => {
    //   console.log("from app sub ", x);
    //   this.fromsub = x;
    // });
    // this.ser.sub.next("Praveen");
    // this.ser.obj.next("Praveen");
    

    this.ser.obj.subscribe(x => {
      console.log("from app sub obj ", x);
      this.fromsub = x;
    });



    this.ser.behobj.subscribe(x => {
      console.log("from app beh obj ", x);
      this.fromsub = x;
    });

     this.ser.repobj.subscribe(x => {
      console.log("from app rep obj ", x);
      this.fromsub = x;
    });


  }
}
