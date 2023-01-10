import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {     //behavior use krte ho toh default value provide kr skte hai ek defult value chal jati hai
emitSelProduct:BehaviorSubject<number>=new BehaviorSubject(0);
cartobs=this.emitSelProduct.asObservable();

constructor() { }
}
