import { Injectable } from '@angular/core';
import { debounceTime, filter, map, of, scan, Subject, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject$ = new Subject<string[]>();

  constructor() { }

  private transform () {

    return this.subject$.pipe(
      debounceTime(500), // Debounce to limit how often the search is triggered
      scan((acc, char) => acc + char, ''), // Accumulate characters into a string
      map(query => query.trim()) // Trim spaces if necessary
    )
    // .subscribe(query => {
    //   // Handle the final query here, e.g., make an HTTP request
    //   console.log('Final query:', query);
    // });
    
    console.log()

    /**something */
    
    
    // const data$ = of(query);
    // return this.subject$.pipe(
    //   tap(console.log)
      // debounceTime(500),
      // scan((acc, char) => acc + char, ''),
      // map(word => [...word]),
      // filter(word => word.length >= 3), 
      // switchMap(word => word.join('')),
      // tap(console.log),
      
    // )
    // .subscribe(
    //   val => console.log(val),
    // )
  }

  // private transform() {
  //   return this.subject$.pipe(
  //     debounceTime(500),  // Wait for 500ms pause in events
  //     map(word => [...word]), // Convert string to array of characters
  //     filter(chars => chars.length >= 3), // Only process if length >= 3
  //     switchMap(chars => {
  //       const query = chars.join(''); // Convert array back to string
  //       // Perform an async operation, e.g., API call
  //       // return ajax.getJSON(`https://api.example.com/search?q=${query}`);
  //     }),
  //     tap(console.log) // Log the result for debugging
  //   );
  // }


  search (query:string) {
    const data = [...query];
    console.log(data);
    this.subject$.next(data);
    // this.subject$.next(query);
  }

  getWord () {
    // console.log('triggered...')
    // this.transform()
    // return of('s')
    return this.transform()
  }

  
  
  
}
