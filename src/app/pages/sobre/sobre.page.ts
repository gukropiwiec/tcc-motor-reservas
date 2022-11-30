import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  hotelItems = [];

  constructor(private httpS: HttpService, public hotelS: HotelService) {}

  async ngOnInit() {
    this.hotelItems = (await this.httpS.get('hotel-item')) as any[];
  }
}
