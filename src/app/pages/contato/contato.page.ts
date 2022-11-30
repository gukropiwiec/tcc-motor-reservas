import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  constructor(
    public hotelS: HotelService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async enviarMensagem() {
    const toast = await this.toastController.create({
      message: 'Mensagem enviada com sucesso!',
      duration: 3000,
      color: 'success',
    });
    setTimeout(() => {
      toast.present();
    }, 1000);
  }
}
