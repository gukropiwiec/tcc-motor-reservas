import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime, ToastController } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import * as moment from 'moment';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: any;

  today = moment().format('YYYY-MM-DD');

  nossosQuartos = [];

  checkInDate = null;
  checkInDateShow = '-';
  checkOutDate = null;
  checkOutDateShow = '-';
  qtyAdults = 0;
  qtyChildren = 0;

  constructor(
    private toastController: ToastController,
    private router: Router,
    private httpS: HttpService
  ) {}

  async ngOnInit(): Promise<void> {
    const nossosQuartosRes = (await this.getQuartos()) as any[];
    this.nossosQuartos = nossosQuartosRes.slice(0, 4);
  }

  getQuartos() {
    return this.httpS.get('room');
  }

  confirm() {
    this.datetime.nativeEl.confirm();
  }

  reset() {
    this.datetime.nativeEl.reset();
  }

  formatCheckOutDate(value: string) {
    this.checkOutDateShow = this.formatDate(value);
    this.checkOutDate = this.formatDate(value, 'yyyy-MM-dd');
  }

  formatCheckInDate(value: string) {
    this.checkInDateShow = this.formatDate(value);
    this.checkInDate = this.formatDate(value, 'yyyy-MM-dd');
  }

  buscarQuartos() {
    const qtyAdultsEl = (
      document.getElementById('qtyAdults') as HTMLInputElement
    ).value;
    const qtyChildrenEl = (
      document.getElementById('qtyChildren') as HTMLInputElement
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

    const form = {
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      qtyAdults: Number(qtyAdultsEl),
      qtyChildren: Number(qtyChildrenEl),
    };

    this.checkInDateShow = '-';
    this.checkOutDateShow = '-';
    this.checkInDate = null;
    this.checkOutDate = null;
    this.qtyAdults = 0;
    this.qtyChildren = 0;

    this.router.navigateByUrl('/quartos', { state: form });
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
