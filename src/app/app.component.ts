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
    { title: 'Quartos', url: '/quartos', icon: 'bed' },
    { title: 'Promoções', url: '/', icon: 'pricetag' },
    { title: 'Sobre', url: '/', icon: 'information-circle' },
    { title: 'Contatos', url: '/', icon: 'people' }
  ];
  constructor(private menuController: MenuController) {}

  async ngOnInit() {
  }
}
