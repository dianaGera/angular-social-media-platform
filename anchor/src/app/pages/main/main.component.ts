import { Component, OnInit, Input } from '@angular/core';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  faSearch = faMagnifyingGlass;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
