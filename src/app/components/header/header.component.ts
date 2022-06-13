import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public popoverOpen = false;

  constructor(
    public userS: UserService,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private router: Router
  ) {}

  ngOnInit() {}

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
          id: 'cancel-button',
        },
        {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            this.userS.user = null;
            this.userS.pagesMenuUser = true;
            this.popoverOpen = false;
            this.router.navigateByUrl('/');
          },
        },
      ],
    });

    await alert.present();
  }
}
