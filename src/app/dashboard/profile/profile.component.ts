import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStore} from '@aws-amplify/datastore';
import {User} from '../../../models';

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

  constructor() { }

  async ngOnInit() {
    const user = await DataStore.query(User);
    this.username = user[0].gitHubUsername;

  }

  async submitForm() {
  }
}
