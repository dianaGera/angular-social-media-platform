import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-right-side',
  templateUrl: './main-right-side.component.html',
  styleUrls: ['./main-right-side.component.sass']
})
export class MainRightSideComponent implements OnInit {
  @Input() faSearch: any;
  @Input() faPlus: any;
  constructor() { }

  ngOnInit(): void {
  }

}
