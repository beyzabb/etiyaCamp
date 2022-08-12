import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false) //bir değişiklik olduğunda yakalamakiçin kullanılır, emitter ile aynı amaçla kullanılır
  constructor() { }

  setIsLoading(loading: boolean) {
    this.isLoading.next(loading); //isLoading değerinin değiştirmwek için next kullanılır
  }
}
