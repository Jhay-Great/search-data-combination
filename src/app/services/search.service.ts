import { Injectable } from '@angular/core';
import { catchError, debounceTime, delay, distinctUntilChanged, filter, map, of, scan, Subject, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data = [
    {name: 'James', gender: 'male', nationality: 'Ghanaian'},
    {name: 'Beverly', gender: 'female', nationality: 'Ghanaian'},
    {name: 'Joseph', gender: 'male', nationality: 'Ghanaian'},
    {name: 'Michelle', gender: 'female', nationality: 'Ghanaian'},
    {name: 'Emmanuel', gender: 'male', nationality: 'Ghanaian'},
    {name: 'Felicity', gender: 'female', nationality: 'Ghanaian'},
    {name: 'Emerald', gender: 'female', nationality: 'Ghanaian'},
  ];

  private subject$ = new Subject<string>();
  error: string | null = null;

  constructor() { }

  search (query:string) {
    this.subject$.next(query)
  }

  private searchHandler() {
    return this.subject$
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        if (term.length <= 3) {
          return of(this.data);
        }
        try {
          const result = this.dataLookup(term);
          return of(result).pipe(delay(500));
        } catch (err) {
          this.error = 'Error fetching results';
          return of([]);
        }
      }),
      catchError(err => {
        this.error = 'Error fetching results';
        return of([]);
      })
    )
    
  }

  searchResult () {
    return this.searchHandler();
  }


  private dataLookup(term: string) {
    return this.data.filter((item:any) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
  }

}

  
  

