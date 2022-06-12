import { Component, OnInit, Input } from '@angular/core';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  faSearch = faMagnifyingGlass;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
