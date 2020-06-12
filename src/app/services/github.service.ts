import { Injectable } from '@angular/core';
import {Octokit} from '@octokit/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  oktokit: Octokit;

  constructor() {
    this.oktokit = new Octokit({auth: environment.githubToken});
  }

  async getUserInfos(username: string) {
    return await this.oktokit.graphql(
        `
        query {
          user(login: "${username}") {
            login
            repositories(last: 10) {
              nodes {
                description
                owner {
                  login
                }
              }
            }
          }
        }
        `
    );
  }
}
