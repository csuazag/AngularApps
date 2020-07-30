import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';

//Angular Material
import { MaterialModule } from './material.module';


//Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { UploadMapComponent } from './components/map/upload-map.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  entryComponents: [
    UploadMapComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    UploadMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDuAieZzyjBWDWJoQ5YsIKJ5pmGRGaQbU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
