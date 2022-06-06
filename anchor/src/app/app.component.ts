import { Component } from '@angular/core';
import { faBell, faHouseChimney, faBookmark,
  faNoteSticky, faPenToSquare, faMessage,
  faCircle, faAngleLeft, faAngleRight, faPaperPlane,
  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Anchor';

  // Font Awesome
  faBell = faBell;
  faHome = faHouseChimney;
  faNotes = faNoteSticky;
  faBookmark = faBookmark;
  faPenToSquare = faPenToSquare;
  faMessage = faMessage;
  faCircle = faCircle;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faSearch = faMagnifyingGlass;
}
