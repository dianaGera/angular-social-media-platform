import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.sass']
})
export class MessangerComponent implements OnInit {
  @Input() faCircle: any;
  @Input() faAngleLeft: any;
  @Input() faAngleRight: any;

  constructor() { }

  ngOnInit(): void {
  }

}
