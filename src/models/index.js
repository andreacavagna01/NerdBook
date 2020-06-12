// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, UserFriend } = initSchema(schema);

export {
  User,
  UserFriend
};