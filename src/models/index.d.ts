import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Config {
  readonly id: string;
  readonly gitHubToken: string;
  constructor(init: ModelInit<Config>);
  static copyOf(source: Config, mutator: (draft: MutableModel<Config>) => MutableModel<Config> | void): Config;
}