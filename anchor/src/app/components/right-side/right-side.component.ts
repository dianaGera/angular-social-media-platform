import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.sass']
})
export class RightSideComponent implements OnInit {
  @Input() faSearch: any;

  constructor() { }

  ngOnInit(): void {
  }

}
