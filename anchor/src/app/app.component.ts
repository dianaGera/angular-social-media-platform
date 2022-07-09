import { Component } from '@angular/core';
import { faBell, faHouseChimney, faBookmark,
  faNoteSticky, faPenToSquare, faMessage, faAngleLeft, faAngleRight,
   } from '@fortawesome/free-solid-svg-icons';


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

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;


  is_authenticate:boolean = false;

}
