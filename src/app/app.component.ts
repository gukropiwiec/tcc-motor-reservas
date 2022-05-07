import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Quartos', url: '/folder/Outbox', icon: 'bed' },
    { title: 'Promoções', url: '/folder/Favorites', icon: 'pricetag' },
    { title: 'Sobre', url: '/folder/Archived', icon: 'information-circle' },
    { title: 'Contatos', url: '/folder/Trash', icon: 'people' }
  ];
  constructor(private menuController: MenuController) {}

  async ngOnInit() {
  }
}
