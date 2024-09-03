import { Injectable } from '@angular/core';
import { debounceTime, filter, map, of, Subject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  subject$ = new Subject<string>();

  constructor() { }

  fetchWord (query:string) {
    const data$ = of(query);
    return data$.pipe(
      debounceTime(500),
      map(word => word),
      filter(word => word.length >= 3), 
      switchMap(word => word)
      // map(query => {
      //   if (query.length >= 3) {
      //     switchMap(query)

      //   }
      // }),
    )
    // .subscribe(
    //   val => console.log(val),
    // )
  }

  search (query:string) {
    this.subject$.next(query)
  }

  
  
  
}
