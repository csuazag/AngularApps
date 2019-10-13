import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadMapComponent } from './upload-map.component';


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


  constructor(private snackBar: MatSnackBar,
    public dialog: MatDialog) {

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
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 3000 });
  }

  updateMarker(marker: Marker) {

    const dialogRef = this.dialog.open(UploadMapComponent, {
      width: '250px',
      data: { tittle: marker.tittle, description: marker.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      marker.tittle = result.tittle;
      marker.description = result.description;

      this.saveStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });
    });
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}
