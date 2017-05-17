import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LOCALE_ID} from '@angular/core';
import {CapitalizarPipe} from './pipes/capitalizar.pipe';
import {DomseguroPipe} from './pipes/domSeguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: LOCALE_ID,
      useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
