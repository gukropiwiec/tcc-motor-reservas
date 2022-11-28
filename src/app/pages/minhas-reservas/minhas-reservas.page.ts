import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.page.html',
  styleUrls: ['./minhas-reservas.page.scss'],
})
export class MinhasReservasPage implements OnInit {
  reservas = [];

  constructor(private httpS: HttpService) {}

  async ngOnInit() {
    this.reservas = (await this.httpS.get('booking')) as any[];
  }
}
