import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

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

  constructor(private httpS: HttpService) {}

  async ionViewWillEnter() {
    this.quartos = (await this.httpS.get('room')) as any;
    this.reservas = (await this.httpS.get('booking')) as any;
  }
}
