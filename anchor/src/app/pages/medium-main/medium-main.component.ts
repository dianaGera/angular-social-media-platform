import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medium-main',
  templateUrl: './medium-main.component.html',
  styleUrls: ['./medium-main.component.sass']
})
export class MediumMainComponent implements OnInit {
  @Input() faTrend: any;

  constructor() { }

  ngOnInit(): void {
  }

}
