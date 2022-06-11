import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public form = {email: '', senha: '', type: 'user'};

  constructor(private userS: UserService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    if (this.userS.user) {
      this.router.navigateByUrl('/');
    }
  }

  async cadastrar() {
    if (!this.form.email || !this.form.senha) {
      await this.presentToastError();
    } else {
      const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
      accounts.push(this.form);
      localStorage.setItem('accounts', JSON.stringify(accounts));
      await this.presentToast();
      await this.router.navigateByUrl('login');
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cadastro realizado com sucesso.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentToastError() {
    const toast = await this.toastController.create({
      message: 'Preencha os campos email e senha, se o problema persistir, tente novamente.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
