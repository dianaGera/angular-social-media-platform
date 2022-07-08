import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.sass']
})
export class FollowingComponent implements OnInit {
  @Input() faEllipsis: any;

  constructor() { }

  ngOnInit(): void {
  }

}
