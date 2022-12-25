// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "NON_BINARY": "NON_BINARY",
  "TRANS": "TRANS",
  "RATHER_NOT_SAY": "RATHER_NOT_SAY"
};

const { Bravehearts, Bet, Position, Player, Address } = initSchema(schema);

export {
  Bravehearts,
  Bet,
  Position,
  Player,
  Gender,
  Address
};