import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {HttpClientModule} from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { MapComponent } from './components/map/map.component';
import { TableComponent } from './components/table/table.component';

import {RequestsService} from './services/requests.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MapComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LeafletModule.forRoot(),
    HttpClientModule,
    FlashMessagesModule
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
