import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { HotelService } from 'src/app/services/hotel.service';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  reservas = [];
  quartos = [];
  checkins = [];
  quartosLivres = [];
  isModalHotelOpen = false;
  formEditHotel = {
    name: null,
    phone: null,
    email: null,
    cnpj: null,
    addressStreet: null,
    addressNumber: null,
    addressCity: null,
    addressDistrict: null,
    addressCountry: null,
    addressCep: null,
    id: null,
  };

  constructor(
    private httpS: HttpService,
    public hotelS: HotelService,
    private toastController: ToastController,
    public userS: UserService
  ) {}

  async ionViewWillEnter() {
    this.quartos = (await this.httpS.get('room')) as any;
    this.reservas = (await this.httpS.get('booking')) as any;
    this.formEditHotel = this.hotelS.hotel;

    // const today = moment().format('YYYY-MM-DD');
    const today = moment().format('YYYY-MM-DD');

    this.checkins = this.reservas.filter((el) => el.startDate.includes(today));
  }

  setModalHotelOpen(isOpen: boolean) {
    this.isModalHotelOpen = isOpen;
  }

  async editarHotel() {
    const hotelRes = await this.httpS.put(
      'hotel',
      this.formEditHotel,
      this.hotelS.hotel.id
    );
    this.hotelS.hotel = this.formEditHotel;
    await this.presentToast();
    this.isModalHotelOpen = false;
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
