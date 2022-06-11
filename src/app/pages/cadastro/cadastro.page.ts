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

  constructor(private userS: UserService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    if (this.userS.user) {
      this.router.navigateByUrl('/');
    }
  }

  async cadastrar() {
    const form = {email: '', senha: ''};
    form.email = (document.getElementById('email') as HTMLInputElement).value;
    form.senha = (document.getElementById('senha') as HTMLInputElement).value;
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    accounts.push(form);
    localStorage.setItem('accounts', JSON.stringify(accounts));
    this.router.navigateByUrl('login');
    await this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cadastro realizado com sucesso.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
