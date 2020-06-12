import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly gitHubUsername: string;
  readonly friends?: UserFriend[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class UserFriend {
  readonly id: string;
  readonly user?: User;
  constructor(init: ModelInit<UserFriend>);
  static copyOf(source: UserFriend, mutator: (draft: MutableModel<UserFriend>) => MutableModel<UserFriend> | void): UserFriend;
}