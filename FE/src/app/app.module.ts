import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './components/documents/documents.component';

import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@NgModule({
  exports: [
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
