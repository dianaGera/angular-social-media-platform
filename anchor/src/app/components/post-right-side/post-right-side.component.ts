import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-right-side',
  templateUrl: './post-right-side.component.html',
  styleUrls: ['./post-right-side.component.sass']
})
export class PostRightSideComponent implements OnInit {
  @Input() faSearch: any;
  @Input() faBell: any;

  constructor() { }

  ngOnInit(): void {
  }

}
