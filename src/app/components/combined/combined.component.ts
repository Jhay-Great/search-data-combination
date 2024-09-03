import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CombinedDataService } from '../../services/combined-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-combined',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './combined.component.html',
  styleUrl: './combined.component.css'
})
export class CombinedComponent {

  data$!: Observable<[string, number]>;

  constructor (
    private combinedDataService: CombinedDataService,
  ) {
    this.combinedData();
  };

  combinedData () {
    this.data$ = this.combinedDataService.combinedSources();
  }

}
