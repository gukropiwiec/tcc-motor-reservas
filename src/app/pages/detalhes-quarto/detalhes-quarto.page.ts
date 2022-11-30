import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-detalhes-quarto',
  templateUrl: './detalhes-quarto.page.html',
  styleUrls: ['./detalhes-quarto.page.scss'],
})
export class DetalhesQuartoPage implements OnInit {
  constructor(public hotelS: HotelService) {}

  ngOnInit() {}
}
