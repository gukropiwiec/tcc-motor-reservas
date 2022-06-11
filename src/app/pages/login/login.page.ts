import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  accounts = [];

  constructor(private userS: UserService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    if (this.userS.user) {
      this.router.navigateByUrl('/');
    }
    this.getAccounts();
  }

  login() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;
    const found = this.accounts?.find(el => el.email === email && el.senha === senha) || null;
    if (found) {
      this.userS.user = 'logado';
      this.router.navigateByUrl('/');
    } else {
      this.presentToastError();
      return;
    }
  }

  private getAccounts() {
    this.accounts = JSON.parse(localStorage.getItem('accounts'));
  }

  private async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Usuário e/ou senha incorretos.',
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }
}
