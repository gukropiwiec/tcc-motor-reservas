import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private menuController: MenuController) {}

  async ngOnInit() {
    // setTimeout(() => {
    //   this.resize();
    // }, 300);
    // window.onresize = () => {
    //   this.resize();
    // };
  }

  // resize() {
  //   if (innerWidth > 992) {
  //     document.querySelector('ion-menu').style.display = 'none';
  //     document.querySelectorAll('.item-nav-desk').forEach((el: any) => { el.style.display = ''; });
  //   } else if (innerWidth < 992) {
  //     document.querySelector('ion-menu').style.display = '';
  //     document.querySelectorAll('.item-nav-desk').forEach((el: any) => { el.style.display = 'none'; });
  //   }
  // }
}
