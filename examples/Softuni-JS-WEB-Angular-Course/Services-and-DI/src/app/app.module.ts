import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {GithubDataService} from './services/github-data.service';
import {ProfileComponent} from './components/profile/profile.component';
import {FollowersComponent} from './components/followers/followers.component';
import {ReposComponent} from './components/repos/repos.component';
import {ContributorsComponent} from './components/contributors/contributors.component';
import {HttpModule} from '@angular/http';
import { RepoComponent } from './components/repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    FollowersComponent,
    ReposComponent,
    ContributorsComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GithubDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
