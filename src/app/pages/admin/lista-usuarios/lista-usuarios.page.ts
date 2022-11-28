import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {
  users = [];

  constructor(private httpS: HttpService) {}

  async ngOnInit() {
    this.users = (await this.httpS.get('user')) as any;
  }
}
