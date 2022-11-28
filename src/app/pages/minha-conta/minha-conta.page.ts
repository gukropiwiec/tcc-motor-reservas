import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.page.html',
  styleUrls: ['./minha-conta.page.scss'],
})
export class MinhaContaPage implements OnInit {
  user: any = {};
  reservas = [];

  constructor(private userS: UserService, private httpS: HttpService) {}

  async ngOnInit() {
    this.user = this.userS.userInfo;
    const reservasRes = (await this.httpS.get('booking')) as any[];
    this.reservas = reservasRes.slice(-5);
  }
}
