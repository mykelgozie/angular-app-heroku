import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavtopComponent } from './navtop/navtop.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { ServerTableComponent } from './server-table/server-table.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationTableComponent } from './application-table/application-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavtopComponent,
    CardComponent,
    TableComponent,
    HomeComponent,
    ServerComponent,
    ServerTableComponent,
    ApplicationComponent,
    ApplicationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
