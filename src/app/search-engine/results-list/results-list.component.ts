import { Component, Input, OnInit } from '@angular/core';
import { ResultModel } from 'src/app/models/result-model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  @Input() songs?: ResultModel | null;

  constructor() { }

  ngOnInit(): void {
  }

}
