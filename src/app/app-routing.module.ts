import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [

  {path :'',component: HomeComponent},
  {path :'browse',component: BrowseComponent},
  {path :'discover',component: DiscoverComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
