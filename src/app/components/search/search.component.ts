import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, fromEvent, map, Observable, of, switchMap, throwError } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  // word$!: Observable<string>;
  word$!: Observable<never[] | { name: string; gender: string; nationality: string; }[]>;
  loading = false;
  error: string | null = null;

  constructor (
    private searchService: SearchService,
  ) {
    this.word$ = this.searchService.searchResult()
    this.searchService.searchResult().subscribe(
      val => console.log(val),  
    )
    // this.word$ = this.searchService.getWord();
    // console.log(this.word$);
  }

  searchWord (query:string) {
    this.searchService.search(query);
    
  }



}

// export class SearchComponent implements OnInit {
//   inputValue$: Observable<string> | undefined;
//   error$: Observable<string> | undefined;

//   ngOnInit(): void {
//     const inputElement = document.getElementById('inputField') as HTMLInputElement;

//     if (inputElement) {
//       this.inputValue$ = fromEvent(inputElement, 'input').pipe(
//         debounceTime(300), // Wait for 300ms of inactivity
//         map(() => inputElement.value), // Map the event to the input value
//         switchMap(value => {
//           if (value.length < 3) {
//             // Emit error if input value is less than 3 characters
//             return throwError(() => 'Input must be at least 3 characters long');
//           } else {
//             // Emit the valid input value
//             return of(value);
//           }
//         }),
//         catchError(error => {
//           // Handle the error and update the error observable
//           this.error$ = of(error);
//           // Return an empty string to clear the inputValue$ observable
//           return of('');
//         })
//       );
//     }
//   }
// }
