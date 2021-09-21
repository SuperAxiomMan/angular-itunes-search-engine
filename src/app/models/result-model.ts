export interface ResultModel {
  resultCount: number;
  results: ResultDetail[];
}

export interface ResultDetail {
  artistName: string;
  trackName: string;
  trackId: number;
}
