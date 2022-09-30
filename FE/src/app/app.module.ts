import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './components/documents/documents.component';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  exports: [
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DocumentsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
