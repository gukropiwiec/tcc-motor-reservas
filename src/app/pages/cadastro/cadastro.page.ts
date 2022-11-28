import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public form = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    cpf: null,
    addressStreet: null,
    addressNumber: null,
    addressCity: null,
    addressDistrict: null,
    addressCountry: null,
    addressCep: null,
  };

  constructor(
    private userS: UserService,
    private router: Router,
    private toastController: ToastController,
    private httpS: HttpService
  ) {}

  ngOnInit() {
    if (this.userS.user) {
      this.router.navigateByUrl('/');
    }
  }

  async cadastrar() {
    const user = await this.httpS.post('user', this.form);
    if (user) {
      this.presentToast();
      this.router.navigateByUrl('/');
    } else {
      this.presentToastError();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cadastro realizado com sucesso.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async presentToastError() {
    const toast = await this.toastController.create({
      message:
        'Preencha os campos email e senha, se o problema persistir, tente novamente.',
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }
}
