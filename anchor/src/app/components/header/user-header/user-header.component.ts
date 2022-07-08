import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.sass']
})
export class UserHeaderComponent implements OnInit {
  @Input() faEllipsis: any;

  
  constructor() { }

  ngOnInit(): void {
  }

}
