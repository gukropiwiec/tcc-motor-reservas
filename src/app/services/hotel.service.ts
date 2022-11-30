import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotelTemp = null;

  constructor() {}

  public get hotel(): any {
    if (!this.hotelTemp) {
      this.hotelTemp = JSON.parse(localStorage.getItem('hotel')) || '';
    }
    return this.hotelTemp;
  }

  public set hotel(hotel: any) {
    this.hotelTemp = hotel;
    localStorage.setItem('hotel', JSON.stringify(this.hotelTemp));
  }
}
