import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  snackBarRef: MatSnackBar;


  constructor(private snackBar: MatSnackBar) {

    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }

  }

  ngOnInit() {
  }

  addMarker(event) {

    const coords: { lat: number, lng: number } = event.coords;

    const NEW_MARKER = new Marker(coords.lat, coords.lng);
    this.markers.push(NEW_MARKER);
    this.saveStorage();

    this.snackBar.open('Marcador agregado', 'Cerrar');
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar');
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}
