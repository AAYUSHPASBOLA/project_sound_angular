import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { QueBarComponent } from './common/que-bar/que-bar.component';
import { PlayerBarComponent } from './common/player-bar/player-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { from } from 'rxjs';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    QueBarComponent,
    PlayerBarComponent,
    HomeComponent,
    BrowseComponent,
    DiscoverComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
