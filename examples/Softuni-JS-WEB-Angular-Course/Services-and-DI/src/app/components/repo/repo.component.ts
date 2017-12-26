import {Component, Input, OnInit} from '@angular/core';
import {GithubDataService} from '../../services/github-data.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo;
  contributors: Array<{}> = [];

  constructor(private githubDataService: GithubDataService) {
  }

  ngOnInit() {
  }

  showContributors() {
    this.githubDataService.getContributorsData(this.repo.full_name).then(data => {
      this.contributors = data.json();
      console.log(this.contributors)
    }).catch(error => {
      console.log(error);
    });
  }

}
