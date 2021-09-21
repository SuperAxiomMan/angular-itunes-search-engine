import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { ResultsListComponent } from './search-engine/results-list/results-list.component';
import { SongDetailComponent } from './search-engine/song-detail/song-detail.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchEngineComponent,
    ResultsListComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
