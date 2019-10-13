import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-upload-map',
  templateUrl: './upload-map.component.html',
  styleUrls: ['./upload-map.component.css']
})
export class UploadMapComponent implements OnInit {

  forma: FormGroup;

  constructor(public fb: FormBuilder,
              public dialogRef: MatDialogRef<UploadMapComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.forma = fb.group({
      tittle: data.tittle,
      description: data.description
    });
  }


  ngOnInit() {
  }

  saveChanges() {
    this.dialogRef.close(this.forma.value);
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
