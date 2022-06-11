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
  public form = {email: '', senha: ''};

  constructor(private userS: UserService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('accounts')));
    if (this.userS.user) {
      this.router.navigateByUrl('/');
    }
    this.getAccounts();
  }

  login() {
    if (this.form.email === 'admin' && this.form.senha === 'admin') {
      this.userS.user = 'admin';
      this.userS.pagesMenuUser = false;
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      this.getAccounts();
      const found = this.accounts?.find(el => el.email === this.form.email && el.senha === this.form.senha) || null;
      if (found) {
        this.userS.user = 'user';
        this.userS.pagesMenuUser = true;
        this.router.navigateByUrl('/');
      } else {
        this.presentToastError();
        return;
      }
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
