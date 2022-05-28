import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.sass']
})
export class LeftBarComponent implements OnInit {
  @Input() faHome: any;
  @Input() faBell: any;
  @Input() faBookmark: any;
  @Input() faNotes: any;
  @Input() faPenToSquare: any;
  @Input() faMessage: any;

  constructor() { }

  ngOnInit(): void {
  }

}
