import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { ResultsListComponent } from './search-engine/results-list/results-list.component';
import { SongDetailComponent } from './search-engine/song-detail/song-detail.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ItunesService } from './services/itunes.service';

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
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ItunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
