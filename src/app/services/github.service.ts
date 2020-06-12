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
    console.log(environment.githubToken);
  }

  async getUserInfos(username: string){
    return await this.oktokit.graphql(
        `
        query {
          user(login: "${username}") {
            avatarUrl
            email
            login
            followers {
              totalCount
            }
            following {
              totalCount
            }
            location
            twitterUsername
            url
            websiteUrl
            bio
            company
          }
        }

        `
    );
  }
}
