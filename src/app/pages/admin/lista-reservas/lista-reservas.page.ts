import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.page.html',
  styleUrls: ['./lista-reservas.page.scss'],
})
export class ListaReservasPage implements OnInit {
  reservas = [];

  constructor(private httpS: HttpService) {}

  async ngOnInit() {
    this.reservas = (await this.httpS.get('booking')) as any;
  }
}
