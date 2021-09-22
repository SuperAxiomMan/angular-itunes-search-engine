import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LookupModel, SongLookup } from 'src/app/models/result-model';
import { ItunesService } from 'src/app/services/itunes.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css'],
})
export class SongDetailComponent implements OnInit {
  songDetail$?: Observable<SongLookup>;
  song?: SongLookup | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itunes: ItunesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.getsongDetails(url[1].path);
    });
  }

  getsongDetails(id: string): void {
    console.log(id)
    this.itunes.getsongDetails(parseInt(id)).subscribe((songData:LookupModel) => {
      this.song=songData.results[0]
    });
  }
}
