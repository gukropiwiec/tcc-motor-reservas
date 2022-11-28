import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  hotelItems = null;

  constructor(private httpS: HttpService) {}

  async ngOnInit() {
    this.hotelItems = (await this.httpS.get('hotel-item')) as any[];
  }
}
