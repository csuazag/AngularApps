import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {

    const NEW_MARKER = new Marker(51.678418, 7.809007);
    this.markers.push(NEW_MARKER);
  }

  ngOnInit() {
  }

  addMarker(event) {

    const coords: {lat: number, lng: number} = event.coords;

    const NEW_MARKER = new Marker(coords.lat, coords.lng);
    this.markers.push(NEW_MARKER);
  }

}
