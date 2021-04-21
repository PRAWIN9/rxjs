import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
@Injectable()
export class Appservice {
  sub: Subject<any>;
  obj: Observable<number>;

  constructor() {
    this.sub = new Subject<any>();
    this.obj = this.sub.asObservable();
  }
  sendData(data: number) {
    this.sub.next(data);
  }
}
