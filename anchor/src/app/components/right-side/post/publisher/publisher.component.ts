import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.sass']
})
export class PublisherComponent implements OnInit {
  @Input() faBell: any;
  constructor() { }

  ngOnInit(): void {
  }

}
