import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AdminZoneComponent } from './components/admin-zone/admin-zone.component';
import { FavouriteGamesComponent } from './components/favourite-games/favourite-games.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'gamesearch',
    component: GameSearchComponent
  },
  {
    path: 'favourites',
    component: FavouriteGamesComponent
  },
  {
    path: 'adminzone',
    component: AdminZoneComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
