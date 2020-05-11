import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TechModule } from './tech/tech.module';
import { TechRoutingModule } from './tech/tech-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TechModule,
    AppRoutingModule,
    TechRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
