import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime, ToastController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import * as moment from 'moment';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const MercadoPago: any;

interface BuscaReservaQuarto {
  checkInDate: string;
  checkOutDate: string;
  qtyAdults: number;
  qtyChildren: number;
  roomId?: string;
}

@Component({
  selector: 'app-quartos',
  templateUrl: './quartos.page.html',
  styleUrls: ['./quartos.page.scss'],
})
export class QuartosPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: any;
  quartos = [];

  today = moment().format('YYYY-MM-DD');

  checkInDate = null;
  checkInDateShow = '-';
  checkOutDate = null;
  checkOutDateShow = '-';
  qtyAdults = '1';
  qtyChildren = '0';
  formBusca: BuscaReservaQuarto;
  busca = false;
  isModalOpen = false;
  isModalImagesOpen = false;
  preferenceUrl = null;
  imagesToShow = [];

  loadingReserva = false;

  constructor(
    private httpS: HttpService,
    private toastController: ToastController,
    private router: Router,
    private userS: UserService
  ) {}

  async ngOnInit() {}

  async ionViewWillEnter() {
    const data = history.state;
    delete data.navigationId;

    if (Object.keys(data).length > 1) {
      this.formBusca = data;
      this.formatCheckInDate(data.checkInDate);
      this.formatCheckOutDate(data.checkOutDate);
      this.qtyAdults = data.qtyAdults.toString();
      this.qtyChildren = data.qtyChildren.toString();
      this.quartos = (await this.httpS.post('room/available', data)) as any[];
      this.busca = true;
    } else {
      this.quartos = (await this.httpS.get('room')) as any[];
      this.busca = false;
    }
  }

  formatCheckOutDate(value: string) {
    this.checkOutDateShow = this.formatDate(value);
    this.checkOutDate = this.formatDate(value, 'yyyy-MM-dd');
  }

  formatCheckInDate(value: string) {
    this.checkInDateShow = this.formatDate(value);
    this.checkInDate = this.formatDate(value, 'yyyy-MM-dd');
  }

  async buscarQuartos() {
    const qtyAdultsEl = (
      document.getElementById('qtyAdultsEl') as HTMLInputElement
    ).value;
    const qtyChildrenEl = (
      document.getElementById('qtyChildrenEl') as HTMLInputElement
    ).value;

    if (
      !qtyAdultsEl ||
      !qtyChildrenEl ||
      !this.checkInDate ||
      !this.checkOutDate
    ) {
      this.presentToast(
        'Por favor, preencha todos os campos para pesquisar um quarto.',
        'danger'
      );
      return;
    }

    this.formBusca = {
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      qtyAdults: Number(qtyAdultsEl),
      qtyChildren: Number(qtyChildrenEl),
    };

    this.quartos = (await this.httpS.post(
      'room/available',
      this.formBusca
    )) as any[];
    this.busca = true;
  }

  async reservar(quartoId: string) {
    if (!this.userS.token || !this.userS.userInfo) {
      this.presentToast(
        'Favor fazer o login para realizar uma reserva.',
        'primary'
      );
      return;
    }

    this.formBusca.roomId = quartoId;
    if (!this.formBusca.checkInDate || !this.formBusca.checkOutDate) {
      this.presentToast(
        'Um erro ocorreu ao tentar reservar o quarto. Por favor, refaça a pesquisa novamente para reservar um quarto.',
        'danger'
      );
      return;
    }

    this.loadingReserva = true;

    const bookingRes: any = await this.httpS.post('booking', this.formBusca);

    this.preferenceUrl = bookingRes.preference_url;

    const mp = new MercadoPago(environment.mercadoPagoPublicKey, {
      locale: 'en-US',
    });
    const checkout = mp.checkout({
      preference: {
        id: bookingRes.preference_id,
      },
      autoOpen: true,
    });
    checkout.render({
      container: '.mp-container',
      label: 'Realizar Pagamento',
    });
    this.setModalOpen(true);
    this.loadingReserva = false;
  }

  openDetalhes(quartoId: string) {
    this.router.navigateByUrl(`/detalhes-quarto/${quartoId}`);
  }

  async limparFiltros() {
    this.formBusca.checkInDate = null;
    this.formBusca.checkOutDate = null;
    this.formBusca.qtyAdults = null;
    this.formBusca.qtyChildren = null;
    this.checkInDate = null;
    this.checkInDateShow = '-';
    this.checkOutDate = null;
    this.checkOutDateShow = '-';
    this.qtyAdults = '1';
    this.qtyChildren = '0';
    this.busca = false;
    this.quartos = (await this.httpS.get('room')) as any[];
  }

  setModalOpen(isOpen: boolean) {
    if (!isOpen) {
      window.location.reload();
    }
    this.isModalOpen = isOpen;
  }

  setModalImagesOpen(isOpen: boolean, quartoImages = []) {
    this.isModalImagesOpen = isOpen;
    this.imagesToShow = quartoImages;
  }

  private formatDate(value: string, pattern = 'dd/MM/yyyy') {
    return format(parseISO(value), pattern);
  }

  private async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
    });
    toast.present();
  }
}
