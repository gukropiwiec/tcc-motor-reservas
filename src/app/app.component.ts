import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public userS: UserService) {}

  async ngOnInit() {
    if (this.userS.user !== 'admin') {
      this.userS.pagesMenuUser = true;
    } else {
      this.userS.pagesMenuUser = false;
    }
  }
}
