import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombinedDataService {

  private sourceColor$ = new Observable<string>(
    subscriber => {
      subscriber.next('Teal');
      subscriber.next('Cyan');
      subscriber.next('Indigo');
      subscriber.next('Beige');
      subscriber.next('Charcoal');
      subscriber.next('Aubergine');
      subscriber.next('Turquoise');
      subscriber.next('Emerald');
      subscriber.next('Purple');
      subscriber.next('Aubergine');
      subscriber.complete()

    }
  )

  private sourceNumbers$ = new Observable<number>(
    subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      subscriber.next(5);
      subscriber.next(6);
      subscriber.next(7);
      subscriber.next(8);
      subscriber.next(9);
      subscriber.next(10);
    }
  )

  constructor() { 

   }

   combinedSources () {
    return combineLatest([this.sourceColor$, this.sourceNumbers$])
    
   }


   
   
}
