import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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