import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonModal, ToastController } from '@ionic/angular';
import { HotelService } from 'src/app/services/hotel.service';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-quartos',
  templateUrl: './lista-quartos.page.html',
  styleUrls: ['./lista-quartos.page.scss'],
})
export class ListaQuartosPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  quartos = [];
  formInput: FormGroup;
  isModalEditarQuartoOpen = false;
  isModalTarifasOpen = false;
  formEdit = {
    id: null,
    name: null,
    description: null,
    quantity: null,
    capacity: null,
    tariffs: [],
    hotelId: this.hotelS.hotel.id,
    images: [],
  };
  formTarifas = {
    roomId: null,
    name: null,
    price: null,
    description: null,
    promotional: false,
    startDate: null,
    endDate: null,
  };

  constructor(
    private httpS: HttpService,
    private toastController: ToastController,
    private alertController: AlertController,
    private fb: FormBuilder,
    private hotelS: HotelService,
    public userS: UserService
  ) {}

  async ngOnInit() {}

  async ionViewWillEnter() {
    await this.atualizarQuartos();
    this.formInput = this.fb.group({
      name: null,
      description: null,
      quantity: null,
      capacity: null,
      price: null,
      hotelId: this.hotelS.hotel.id,
      photos: null,
    });
  }

  async atualizarQuartos() {
    this.quartos = (await this.httpS.get('room')) as any;
  }

  async createRoom() {
    const formData = new FormData();
    formData.append('name', this.formInput.value.name);
    formData.append('description', this.formInput.value.description);
    formData.append('quantity', this.formInput.value.quantity);
    formData.append('capacity', this.formInput.value.capacity);
    formData.append('price', this.formInput.value.price);
    formData.append('hotelId', this.formInput.value.hotelId);
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.formInput.get('photos').value.length; i++) {
      formData.append('photos', this.formInput.get('photos').value[i]);
    }

    if (!this.formInput.value.name) {
      this.presentToast('O campo Nome é obrigatório', 'danger');
      return;
    }
    if (!this.formInput.value.description) {
      this.presentToast('O campo Descrição é obrigatório', 'danger');
      return;
    }
    if (!this.formInput.value.quantity) {
      this.presentToast('O campo Quantidade é obrigatório', 'danger');
      return;
    }
    if (!this.formInput.value.capacity) {
      this.presentToast('O campo Capacidade é obrigatório', 'danger');
      return;
    }
    if (!this.formInput.value.price) {
      this.presentToast('O campo Preço é obrigatório', 'danger');
      return;
    }

    const room = await this.httpS.post('room', formData);
    if (room) {
      this.atualizarQuartos();
      this.modal.dismiss();
      this.presentToast('Quarto criado com sucesso!', 'success');
      this.formInput.reset();
    }
  }

  dismissModal() {
    this.modal.dismiss();
    this.formInput.reset();
  }

  dismissModalEdit() {
    this.setModalEditarQuartoOpen(false);
  }

  setModalTarifaOpen(isOpen: boolean, roomId?) {
    this.isModalTarifasOpen = isOpen;
  }

  dismissModalTarifa() {
    this.setModalTarifaOpen(false);
  }

  async deleteRoom(quarto) {
    await this.presentAlertConfirm(quarto);
  }

  readFiles(event) {
    const photos = (event.target as HTMLInputElement).files;
    this.formInput.patchValue({ photos });
    this.formInput.get('photos').updateValueAndValidity();
  }

  setModalEditarQuartoOpen(
    isOpen: boolean,
    quarto = {
      ...this.formEdit,
    }
  ) {
    this.formEdit = quarto;
    if (!isOpen) {
      this.formEdit = {
        id: null,
        name: null,
        description: null,
        quantity: null,
        capacity: null,
        tariffs: [],
        hotelId: this.hotelS.hotel.id,
        images: [],
      };
    }
    this.isModalEditarQuartoOpen = isOpen;
  }

  async excluirFoto(id) {
    await this.httpS.delete('room-image', id);
    this.setModalEditarQuartoOpen(false);
    await this.atualizarQuartos();
  }

  async editarQuarto() {
    await this.httpS.put('room', this.formEdit, this.formEdit.id);
    this.presentToast('Informações alteradas com sucesso.', 'success');
    this.setModalEditarQuartoOpen(false);
  }

  private async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
    });
    toast.present();
  }

  private async presentAlertConfirm(quarto) {
    const alert = await this.alertController.create({
      header: `Deseja remover o quarto ${quarto.name}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: async () => {
            await this.httpS.delete('room', quarto.id);
            this.atualizarQuartos();
            this.presentToast('Quarto removido com sucesso.', 'success');
          },
        },
      ],
    });

    await alert.present();
  }
}
