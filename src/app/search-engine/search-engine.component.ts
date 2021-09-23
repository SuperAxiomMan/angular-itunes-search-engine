import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ResultModel } from '../models/result-model';
import { ItunesService } from '../services/itunes.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css'],
})
export class SearchEngineComponent implements OnInit {
  songList$!: Observable<ResultModel>;
  private searchTerms = new Subject<string>();
  searchin: boolean=false;

  constructor(private itunes: ItunesService) {}

  search(term: string): void {
    this.searchin = true;
    console.log('searchin', this.searchin);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.songList$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        this.searchin = false;
        console.log('searchin', this.searchin);

        return this.itunes.getResults(term);
      })
    );
  }
}
