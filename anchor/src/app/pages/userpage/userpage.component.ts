import { Component, OnInit } from '@angular/core';
import { faBell, faSearch, faEllipsis } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.sass']
})
export class UserpageComponent implements OnInit {
  faSearch = faSearch;
  faBell = faBell;
  faEllipsis = faEllipsis;

  constructor() { }

  ngOnInit(): void {
  }

}
