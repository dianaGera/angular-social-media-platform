import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-right-side',
  templateUrl: './user-right-side.component.html',
  styleUrls: ['./user-right-side.component.sass']
})
export class UserRightSideComponent implements OnInit {
  @Input() faSearch: any;
  @Input() faBell: any;
  @Input() faEllipsis: any;

  constructor() { }

  ngOnInit(): void {
  }

}
