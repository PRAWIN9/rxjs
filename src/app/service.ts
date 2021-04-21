import { Injectable } from '@angular/core';
@Injectable()
export class Appservice{
  sub = Subject<any>
  obj= Observable<number>

  constructor(){
    this.sub= new Subject<number>()
    this.obj= this.sub.asObservable();
  }
  sendData(data:number){
    this.sub.next(data);

  }
}
