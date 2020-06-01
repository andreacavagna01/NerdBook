/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateConfigInput = {
  gitHubToken: string;
};

export type ModelConfigConditionInput = {
  gitHubToken?: ModelStringInput | null;
  and?: Array<ModelConfigConditionInput | null> | null;
  or?: Array<ModelConfigConditionInput | null> | null;
  not?: ModelConfigConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateConfigInput = {
  gitHubToken?: string | null;
};

export type DeleteConfigInput = {
  id?: string | null;
};

export type ModelConfigFilterInput = {
  gitHubToken?: ModelStringInput | null;
  and?: Array<ModelConfigFilterInput | null> | null;
  or?: Array<ModelConfigFilterInput | null> | null;
  not?: ModelConfigFilterInput | null;
};

export type CreateConfigMutation = {
  __typename: "Config";
  gitHubToken: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdateConfigMutation = {
  __typename: "Config";
  gitHubToken: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeleteConfigMutation = {
  __typename: "Config";
  gitHubToken: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type GetConfigQuery = {
  __typename: "Config";
  gitHubToken: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListConfigsQuery = {
  __typename: "ModelConfigConnection";
  items: Array<{
    __typename: "Config";
    gitHubToken: string;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateConfigSubscription = {
  __typename: "Config";
  gitHubToken: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdateConfigSubscription = {
  __typename: "Config";
  gitHubToken: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeleteConfigSubscription = {
  __typename: "Config";
  gitHubToken: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateConfig(
    input: CreateConfigInput,
    condition?: ModelConfigConditionInput
  ): Promise<CreateConfigMutation> {
    const statement = `mutation CreateConfig($input: CreateConfigInput!, $condition: ModelConfigConditionInput) {
        createConfig(input: $input, condition: $condition) {
          __typename
          gitHubToken
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConfigMutation>response.data.createConfig;
  }
  async UpdateConfig(
    input: UpdateConfigInput,
    condition?: ModelConfigConditionInput
  ): Promise<UpdateConfigMutation> {
    const statement = `mutation UpdateConfig($input: UpdateConfigInput!, $condition: ModelConfigConditionInput) {
        updateConfig(input: $input, condition: $condition) {
          __typename
          gitHubToken
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConfigMutation>response.data.updateConfig;
  }
  async DeleteConfig(
    input: DeleteConfigInput,
    condition?: ModelConfigConditionInput
  ): Promise<DeleteConfigMutation> {
    const statement = `mutation DeleteConfig($input: DeleteConfigInput!, $condition: ModelConfigConditionInput) {
        deleteConfig(input: $input, condition: $condition) {
          __typename
          gitHubToken
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConfigMutation>response.data.deleteConfig;
  }
  async GetConfig(id: string): Promise<GetConfigQuery> {
    const statement = `query GetConfig($id: ID!) {
        getConfig(id: $id) {
          __typename
          gitHubToken
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetConfigQuery>response.data.getConfig;
  }
  async ListConfigs(
    filter?: ModelConfigFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListConfigsQuery> {
    const statement = `query ListConfigs($filter: ModelConfigFilterInput, $limit: Int, $nextToken: String) {
        listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            gitHubToken
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListConfigsQuery>response.data.listConfigs;
  }
  OnCreateConfigListener: Observable<OnCreateConfigSubscription> = API.graphql(graphqlOperation(`subscription OnCreateConfig($owner: String!) {
        onCreateConfig(owner: $owner) {
          __typename
          gitHubToken
          createdAt
          updatedAt
          owner
        }
      }`)) as unknown as Observable<OnCreateConfigSubscription>;

  OnUpdateConfigListener: Observable<OnUpdateConfigSubscription> = API.graphql(graphqlOperation(`subscription OnUpdateConfig($owner: String!) {
        onUpdateConfig(owner: $owner) {
          __typename
          gitHubToken
          createdAt
          updatedAt
          owner
        }
      }`)) as unknown as Observable<OnUpdateConfigSubscription>;

  OnDeleteConfigListener: Observable<OnDeleteConfigSubscription> = API.graphql(graphqlOperation(`subscription OnDeleteConfig($owner: String!) {
        onDeleteConfig(owner: $owner) {
          __typename
          gitHubToken
          createdAt
          updatedAt
          owner
        }
      }`)) as unknown as Observable<OnDeleteConfigSubscription>;
}
