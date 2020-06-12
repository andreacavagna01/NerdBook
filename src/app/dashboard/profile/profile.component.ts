import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStore} from '@aws-amplify/datastore';
import {User} from '../../../models';
import {Octokit} from '@octokit/core';
import {environment} from '../../../environments/environment';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: string;

  public form = new FormGroup({
    gitHubUsername: new FormControl( '', [Validators.required]),
  });

  constructor(private githubService: GithubService) { }

  async ngOnInit() {
    const user = await DataStore.query(User);
    this.username = user[0].gitHubUsername;
    this.githubService.getUserInfos(this.username).then(console.log);
  }

  async submitForm() {
    const user = await DataStore.query(User);
    if (user) {
      User.copyOf(user[0], updated => {
        updated.gitHubUsername = this.form.value.gitHubUsername;
      });
    } else {
      await DataStore.save(
          new User({
            gitHubUsername: this.form.value.gitHubUsername,
          })
      );
    }
  }
}
