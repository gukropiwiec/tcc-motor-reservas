import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userTemp = null;

  constructor() { }

  public get user(): any {
    if (!this.userTemp) {
      this.userTemp = JSON.parse(localStorage.getItem('user'));
    }
    return this.userTemp;
  }

  public set user(user: string) {
    this.userTemp = user;
    localStorage.setItem('user', JSON.stringify(this.userTemp));
  }
}
