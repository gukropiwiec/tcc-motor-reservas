import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { HotelService } from 'src/app/services/hotel.service';
import { HttpService } from 'src/app/services/http.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public popoverOpen = false;
  hoteis = [];

  constructor(
    public userS: UserService,
    public hotelS: HotelService,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private router: Router,
    private httpS: HttpService
  ) {}

  async ngOnInit() {
    this.hoteis = (await this.httpS.get('hotel')) as any[];
    if (!this.hotelS.hotel) {
      this.hotelS.hotel = this.hoteis[0];
    }
  }

  logout() {
    this.presentAlertConfirm();
  }

  async dismissPopover() {
    await this.popoverController.dismiss();
  }

  setHotel(hotel) {
    this.hotelS.hotel = hotel;
  }

  private async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: 'Deseja mesmo <strong>sair</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
        },
        {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            this.userS.user = null;
            this.userS.pagesMenuUser = true;
            this.userS.token = null;
            this.popoverOpen = false;
            this.router.navigateByUrl('/');
          },
        },
      ],
    });

    await alert.present();
  }
}
