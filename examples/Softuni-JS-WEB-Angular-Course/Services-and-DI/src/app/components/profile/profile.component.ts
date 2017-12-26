import {Component, OnInit} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: {};

  constructor(private githubDataService: GithubDataService) {
  }

  ngOnInit() {
    this.githubDataService.getProfileData().then(data => {
      const renderData = data.json();
      this.profileData = renderData;
    }).catch(data => {
      console.log(data);
    });
  }

}
