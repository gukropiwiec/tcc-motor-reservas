/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userTemp = null;
  private pagesMenuTemp = [];
  private userPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Quartos', url: '/quartos', icon: 'bed' },
    { title: 'Promoções', url: '/', icon: 'pricetag' },
    { title: 'Sobre', url: '/', icon: 'information-circle' },
    { title: 'Contatos', url: '/', icon: 'people' }
  ];
  private adminPages = [
    { title: 'Dashboard', url: '/admin/dashboard', icon: 'stats-chart' },
    { title: 'Lista de Quartos', url: '/admin/lista-quartos', icon: 'bed' },
    { title: 'Lista de Reservas', url: '/admin/lista-reservas', icon: 'bag-check' },
    { title: 'Usuários', url: '/admin/lista-usuarios', icon: 'people' }
  ];

  constructor() { }

  public get user(): any {
    if (!this.userTemp) {
      this.userTemp = JSON.parse(localStorage.getItem('user')) || '';
    }
    return this.userTemp;
  }

  public set user(user: string) {
    this.userTemp = user;
    localStorage.setItem('user', JSON.stringify(this.userTemp));
  }

  public get pagesMenu(): any {
    if (!this.pagesMenuTemp) {
      this.pagesMenuTemp = JSON.parse(localStorage.getItem('pagesMenu')) || [];
    }
    return this.pagesMenuTemp;
  }

  public set pagesMenuUser(pagesMenuUser: boolean) {
    if (pagesMenuUser) {
      this.pagesMenuTemp = this.userPages;
    } else {
      this.pagesMenuTemp = this.adminPages;
    }
    localStorage.setItem('pagesMenu', JSON.stringify(this.pagesMenuTemp));
  }
}
