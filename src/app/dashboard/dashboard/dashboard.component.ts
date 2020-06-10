import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { DataStore } from '@aws-amplify/datastore';
import {Config} from '../../../models';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public form = new FormGroup({
    gitHubToken: new FormControl( '', [Validators.required]),
  });
    currentConfig: Config;


  constructor() { }

  async ngOnInit() {
    const config = await DataStore.query(Config);
    this.currentConfig = config[0];
    console.log(this.currentConfig);
  }

  async submitForm() {
    await DataStore.save(
        new Config({
          gitHubToken: this.form.value.gitHubToken,
        })
    );
    console.log(this.form.value);
  }
}
