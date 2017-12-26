import {Component, OnInit} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  reposData: Array<{}>;

  constructor(private githubDataService: GithubDataService) {
  }

  ngOnInit() {
  }

  loadReposData() {
    this.githubDataService.getReposData().then(data => {
      console.log(data.json())
      const renderData = data.json();
      this.reposData = renderData;
    }).catch(error => {
      console.log(error);
    });
  }

}
