import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject, ReplaySubject } from "rxjs";
@Injectable()
export class Appservice {
  private sub: Subject<number>;
  obj: Observable<number>;

 private behSub: BehaviorSubject<number>;
  behobj: Observable<number>;

  private repSub: ReplaySubject<number>;
  repobj: Observable<number>;


  constructor() {
    this.sub = new Subject<number>();
    this.obj = this.sub.asObservable();

    this.behSub = new BehaviorSubject<number>(1000);
    this.behobj = this.behSub.asObservable();

     this.repSub = new ReplaySubject<number>(2);
    this.repobj = this.behSub.asObservable();
  }

  

  sendData(data: number) {
    this.sub.next(data);
  }


  sendBehData(data: number) {
    this.behSub.next(data);
  }

  sendRepData(data: number) {
    this.repSub.next(data);
  }
}
