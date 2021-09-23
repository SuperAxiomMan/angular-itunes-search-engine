import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { LookupModel, SongLookup } from 'src/app/models/result-model';
import { ItunesService } from 'src/app/services/itunes.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css'],
})
export class SongDetailComponent implements OnInit {
  subscription?: Subscription;
  song?: SongLookup | undefined;
  audioPreview: any;
  playEnabled?: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itunes: ItunesService
  ) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.url.subscribe((url) => {
      this.getsongDetails(url[1].path);
    });
  }

  getsongDetails(id: string): void {
    if (this.audioPreview) {
      this.stop();
    }
    console.log(id);
    this.itunes
      .getsongDetails(parseInt(id))
      .subscribe((songData: LookupModel) => {
        this.song = songData.results[0];

        this.song.artworkUrl100 = this.song.artworkUrl100.replace(
          '100x100bb',
          '500x500bb'
        );
      });
  }

  play() {
    this.playEnabled = true;
    this.audioPreview = new Audio(this.song?.previewUrl!);
    this.audioPreview.play();
  }

  stop() {
    this.playEnabled = false;
    this.audioPreview.pause();
    this.audioPreview.currentTime = 0;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
