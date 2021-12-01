import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeokoFeedsAndSpeedsComponent } from './shapeoko-feeds-and-speeds/shapeoko-feeds-and-speeds.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeokoFeedsAndSpeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
