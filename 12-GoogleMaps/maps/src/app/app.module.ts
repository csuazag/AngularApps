import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Angular Material
import { MaterialModule } from './material.module';


//Components
import { MapComponent } from './components/map/map.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCDuAieZzyjBWDWJoQ5YsIKJ5pmGRGaQbU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
