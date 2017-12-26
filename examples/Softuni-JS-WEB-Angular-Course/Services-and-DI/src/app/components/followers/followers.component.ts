import {Component, OnInit} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followersData: Array<{}>;

  constructor(private githubDataService: GithubDataService) {
  }

  ngOnInit() {
  }


  loadFollowersData() {
    this.githubDataService.getFollowersData().then(data => {
      const renderData = data.json();
      this.followersData = renderData;
    }).catch((error) => {
      console.log(error);
    });
  }
}
