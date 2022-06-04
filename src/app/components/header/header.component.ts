import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public popoverOpen = false;

  constructor(public userS: UserService, private alertController: AlertController, private popoverController: PopoverController) { }

  ngOnInit() {
  }

  logout() {
    this.presentAlertConfirm();
  }

  async dismissPopover() {
    await this.popoverController.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar',
      message: 'Deseja mesmo <strong>sair</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button'
        }, {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            this.userS.user = null;
            this.popoverOpen = false;
          }
        }
      ]
    });

    await alert.present();
  }
}
