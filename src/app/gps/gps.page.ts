import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  coordinates: string = 'Esperando coordenadas...';

  constructor() { }

  ngOnInit() {
    this.printCurrentPosition();
  }

  async printCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.coordinates = `Latitud: ${lat}, Longitud: ${lon}`;
      console.log('Coordenadas actuales:', position);
    } catch (error) {
      console.error('Error al obtener las coordenadas:', error);
      this.coordinates = 'Error al obtener las coordenadas';
    }
  }
}
