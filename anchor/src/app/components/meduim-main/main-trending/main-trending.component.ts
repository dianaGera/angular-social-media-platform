import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-trending',
  templateUrl: './main-trending.component.html',
  styleUrls: ['./main-trending.component.sass']
})
export class MainTrendingComponent implements OnInit {
  @Input() faTrend: any;

  constructor() { }

  ngOnInit(): void {
  }

}
