import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './homes/homes.component';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeTypeFilterComponent } from './home-type-filter/home-type-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HomeSearchComponent,
    HomeTypeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
