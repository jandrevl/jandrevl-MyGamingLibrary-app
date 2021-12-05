import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { FavouriteGamesComponent } from './components/favourite-games/favourite-games.component';
import { AdminZoneComponent } from './components/admin-zone/admin-zone.component';
import { LoginComponent } from './components/login/login.component';
import {MatDividerModule} from '@angular/material/divider';
import { SignupComponent } from './components/signup/signup.component';
import { GameCardComponent } from './components/game-card/game-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    GameSearchComponent,
    FavouriteGamesComponent,
    AdminZoneComponent,
    LoginComponent,
    SignupComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
