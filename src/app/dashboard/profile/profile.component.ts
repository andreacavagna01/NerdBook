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
  user: any;

  public form = new FormGroup({
    gitHubUsername: new FormControl( '', [Validators.required]),
  });

  constructor(private githubService: GithubService) { }

  async ngOnInit() {
    const user = await DataStore.query(User);
    this.username = user[0].gitHubUsername;

  }

  async submitForm() {
  }
}
