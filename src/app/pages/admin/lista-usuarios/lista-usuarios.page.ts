import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  users = [];
  userRoles = [];
  isModalUsuarioOpen = false;
  formUser = {
    addressCep: null,
    addressCity: null,
    addressCountry: null,
    addressDistrict: null,
    addressNumber: null,
    addressStreet: null,
    cpf: null,
    createdAt: null,
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
    roleId: null,
    id: null,
    password: null,
  };
  edit = false;

  constructor(
    private httpS: HttpService,
    private toastController: ToastController,
    public userS: UserService
  ) {}

  async ngOnInit() {}

  async ionViewWillEnter() {
    await this.getUsers();
    this.userRoles = (await this.httpS.get('user-role')) as any;
  }

  async getUsers() {
    this.users = (await this.httpS.get('user')) as any;
  }

  setModalUsuarioOpen(
    isOpen: boolean,
    user = { ...this.formUser },
    modalEdit = false
  ) {
    this.edit = modalEdit;
    this.formUser = user;
    if (!isOpen) {
      this.formUser = {
        addressCep: null,
        addressCity: null,
        addressCountry: null,
        addressDistrict: null,
        addressNumber: null,
        addressStreet: null,
        cpf: null,
        createdAt: null,
        email: null,
        firstName: null,
        lastName: null,
        phone: null,
        roleId: null,
        id: null,
        password: null,
      };
      this.getUsers();
    }
    this.isModalUsuarioOpen = isOpen;
  }

  async editarUsuario() {
    delete this.formUser.email;
    delete this.formUser.password;
    await this.httpS.put('user', this.formUser, this.formUser.id);
    await this.presentToast();
    this.setModalUsuarioOpen(false);
  }

  async cadastrarUsuario() {
    await this.httpS.post('user', { ...this.formUser, password: 'senha' });
    await this.presentToast();
    this.setModalUsuarioOpen(false);
  }

  findUserRole(id) {
    // eslint-disable-next-line eqeqeq
    const userRole = this.userRoles.find((el) => el.id == id);
    if (userRole) {
      return userRole.name;
    } else {
      return '';
    }
  }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'Informações editadas com sucesso.',
      duration: 3000,
      color: 'success',
    });
    toast.present();
  }
}
