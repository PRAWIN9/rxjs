import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
@Injectable()
export class Appservice {
  private sub: Subject<number>;
  obj: Observable<number>;

 private behSub: BehaviorSubject<number>;
  behobj: Observable<number>;

  constructor() {
    this.sub = new Subject<number>();
    this.obj = this.sub.asObservable();

    this.behSub = new BehaviorSubject<number>(1000);
    this.behobj = this.behSub.asObservable();
  }

  sendBehData(data: number) {
    this.behSub.next(data);
  }

  sendData(data: number) {
    this.sub.next(data);
  }
}
