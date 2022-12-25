import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  NON_BINARY = "NON_BINARY",
  TRANS = "TRANS",
  RATHER_NOT_SAY = "RATHER_NOT_SAY"
}

type EagerAddress = {
  readonly country?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly street?: string | null;
  readonly building?: string | null;
  readonly unit?: string | null;
  readonly zipcode?: string | null;
  readonly gen?: string | null;
}

type LazyAddress = {
  readonly country?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly street?: string | null;
  readonly building?: string | null;
  readonly unit?: string | null;
  readonly zipcode?: string | null;
  readonly gen?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerBravehearts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bravehearts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBravehearts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bravehearts, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bravehearts = LazyLoading extends LazyLoadingDisabled ? EagerBravehearts : LazyBravehearts

export declare const Bravehearts: (new (init: ModelInit<Bravehearts>) => Bravehearts) & {
  copyOf(source: Bravehearts, mutator: (draft: MutableModel<Bravehearts>) => MutableModel<Bravehearts> | void): Bravehearts;
}

type EagerBet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly created?: string | null;
  readonly PlayerPositions?: (Position | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly created?: string | null;
  readonly PlayerPositions: AsyncCollection<Position>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bet = LazyLoading extends LazyLoadingDisabled ? EagerBet : LazyBet

export declare const Bet: (new (init: ModelInit<Bet>) => Bet) & {
  copyOf(source: Bet, mutator: (draft: MutableModel<Bet>) => MutableModel<Bet> | void): Bet;
}

type EagerPosition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Position, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly odds?: number | null;
  readonly currency?: string | null;
  readonly created?: string | null;
  readonly expires?: boolean | null;
  readonly ttl?: number | null;
  readonly playerID: string;
  readonly betID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPosition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Position, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly odds?: number | null;
  readonly currency?: string | null;
  readonly created?: string | null;
  readonly expires?: boolean | null;
  readonly ttl?: number | null;
  readonly playerID: string;
  readonly betID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Position = LazyLoading extends LazyLoadingDisabled ? EagerPosition : LazyPosition

export declare const Position: (new (init: ModelInit<Position>) => Position) & {
  copyOf(source: Position, mutator: (draft: MutableModel<Position>) => MutableModel<Position> | void): Position;
}

type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly dob: string;
  readonly address: Address;
  readonly mobile: string;
  readonly email: string;
  readonly created: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly Positions?: (Position | null)[] | null;
  readonly username?: string | null;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly dob: string;
  readonly address: Address;
  readonly mobile: string;
  readonly email: string;
  readonly created: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly Positions: AsyncCollection<Position>;
  readonly username?: string | null;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}