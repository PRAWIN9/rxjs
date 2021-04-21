import { Injectable } from '@angular/core';
import { Subject, Observable} from 'rxjs'
@Injectable()
export class Appservice{
  sub : Subject<number>
  obj: Observable<number>

  constructor(){
    this.sub= new Subject<number>()
    this.obj= this.sub.asObservable();
  }
  sendData(data:number){
    this.sub.next(data);

  }
}
