import { Injectable } from '@angular/core';
import {Octokit} from '@octokit/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  oktokit: Octokit;

  constructor() {
  }

}
