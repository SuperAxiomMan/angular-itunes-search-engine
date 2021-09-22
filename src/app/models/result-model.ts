export interface ResultModel {
  resultCount: number;
  results: ResultDetail[];
}

export interface ResultDetail {
  artistName: string;
  trackName: string;
  trackId: number;
}

export interface LookupModel {
  resultCount: number;
  results: SongLookup[];
}

export interface SongLookup {
  artistName: string;
  trackName: string;
  trackId: number;
  previewUrl?: string |null;
  artworkUrl100:string
  collectionName?:string
}
