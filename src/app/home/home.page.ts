import { Component, ViewChild, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: any;

  checkinDate = '-';
  checkoutDate = '-';

  constructor() {}

  ngOnInit(): void {

  }

  confirm() {
    this.datetime.nativeEl.confirm();
  }

  reset() {
    this.datetime.nativeEl.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MM/yyyy');
  }

  isDateEnabled(dateIsoString: string) {
    const date = new Date(dateIsoString);
    if (getDate(date) === 1 && getMonth(date) === 0 && getYear(date) === 2022) {
      // Disables January 1, 2022.
      return false;
    }
    return true;
  }

}
