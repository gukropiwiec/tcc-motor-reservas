import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
  accounts = [];
  public form = { email: '', password: '' };

  constructor(
    private userS: UserService,
    private toastController: ToastController,
    private router: Router,
    private httpS: HttpService
  ) {}

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('accounts')));
    if (this.userS.user) {
      this.router.navigateByUrl('/');
    }
    this.getAccounts();
  }

  async login() {
    const resLogin = (await this.httpS.loginAdmin(this.form)) as any;
    console.log(resLogin);
    if (resLogin?.token) {
      this.userS.user = 'admin';
      this.userS.token = resLogin.token;
      this.userS.pagesMenuUser = false;
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      this.presentToastError();
    }
  }

  private getAccounts() {
    this.accounts = JSON.parse(localStorage.getItem('accounts'));
  }

  private async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Usuário e/ou senha incorretos.',
      duration: 3000,
      color: 'danger',
    });
    toast.present();
  }
}
