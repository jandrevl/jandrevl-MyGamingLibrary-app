import { MatOptionModule } from '@angular/material/core';
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
import {MatCardModule} from '@angular/material/card';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
// import { UnmatchingPasswordsDialogComponent } from './components/unmatching-passwords-dialog/unmatching-passwords-dialog.component';
// import { UserCreatedDialogComponent } from './components/user-created-dialog/user-created-dialog.component';
import { AdminUserDetailsComponent } from './components/admin-user-details/admin-user-details.component';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { UserDuplicatedDialogComponent } from './components/dialog-components/user-duplicated-dialog/user-duplicated-dialog.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
// import { PublishedCommentDialogComponent } from './components/published-comment-dialog/published-comment-dialog.component';
// import { FrozenUserDialogComponent } from './components/frozen-user-dialog/frozen-user-dialog.component';
import { UnmatchingPasswordsDialogComponent } from './components/dialog-components/unmatching-passwords-dialog/unmatching-passwords-dialog.component';
import { UserCreatedDialogComponent } from './components/dialog-components/user-created-dialog/user-created-dialog.component';
import { PublishedCommentDialogComponent } from './components/dialog-components/published-comment-dialog/published-comment-dialog.component';
import { FrozenUserDialogComponent } from './components/dialog-components/frozen-user-dialog/frozen-user-dialog.component';
import { AddedFavouritesDialogComponent } from './components/dialog-components/added-favourites-dialog/added-favourites-dialog.component';
import { GameAlreadyFavouriteDialogComponent } from './components/dialog-components/game-already-favourite-dialog/game-already-favourite-dialog.component';
import { DeleteUserDialogComponent } from './components/dialog-components/delete-user-dialog/delete-user-dialog.component';
import { UserDeletedDialogComponent } from './components/dialog-components/user-deleted-dialog/user-deleted-dialog.component';


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
    GameCardComponent,
    GameDetailsComponent,
    UnmatchingPasswordsDialogComponent,
    UserCreatedDialogComponent,
    AdminUserDetailsComponent,
    UserDuplicatedDialogComponent,
    CommentCardComponent,
    PublishedCommentDialogComponent,
    FrozenUserDialogComponent,
    AddedFavouritesDialogComponent,
    GameAlreadyFavouriteDialogComponent,
    DeleteUserDialogComponent,
    UserDeletedDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatOptionModule,
    MatCarouselModule.forRoot(),
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
