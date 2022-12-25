// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bravehearts } = initSchema(schema);

export {
  Bravehearts
};