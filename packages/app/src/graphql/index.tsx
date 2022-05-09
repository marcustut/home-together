import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars['JSON']>;
  neq?: InputMaybe<Scalars['JSON']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the collection */
  deleteFromSchemaMigrationsCollection: SchemaMigrationsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromUsersCollection: UsersDeleteResponse;
  /** Adds one or more `SchemaMigrationsInsertResponse` records to the collection */
  insertIntoSchemaMigrationsCollection?: Maybe<SchemaMigrationsInsertResponse>;
  /** Adds one or more `UsersInsertResponse` records to the collection */
  insertIntoUsersCollection?: Maybe<UsersInsertResponse>;
  /** Updates zero or more records in the collection */
  updateSchemaMigrationsCollection: SchemaMigrationsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateUsersCollection: UsersUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromSchemaMigrationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SchemaMigrationsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromUsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoSchemaMigrationsCollectionArgs = {
  objects: Array<SchemaMigrationsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoUsersCollectionArgs = {
  objects: Array<UsersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateSchemaMigrationsCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<SchemaMigrationsFilter>;
  set: SchemaMigrationsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateUsersCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  AscNullsFirst = 'AscNullsFirst',
  AscNullsLast = 'AscNullsLast',
  DescNullsFirst = 'DescNullsFirst',
  DescNullsLast = 'DescNullsLast',
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `SchemaMigrations` */
  schemaMigrationsCollection?: Maybe<SchemaMigrationsConnection>;
  /** A pagable collection of type `Users` */
  usersCollection?: Maybe<UsersConnection>;
};

/** The root type for querying data */
export type QuerySchemaMigrationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<SchemaMigrationsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SchemaMigrationsOrderBy>>;
};

/** The root type for querying data */
export type QueryUsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type SchemaMigrations = {
  __typename?: 'SchemaMigrations';
  version: Scalars['String'];
};

export type SchemaMigrationsConnection = {
  __typename?: 'SchemaMigrationsConnection';
  edges: Array<SchemaMigrationsEdge>;
  pageInfo: PageInfo;
};

export type SchemaMigrationsDeleteResponse = {
  __typename?: 'SchemaMigrationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<SchemaMigrations>;
};

export type SchemaMigrationsEdge = {
  __typename?: 'SchemaMigrationsEdge';
  cursor: Scalars['String'];
  node?: Maybe<SchemaMigrations>;
};

export type SchemaMigrationsFilter = {
  version?: InputMaybe<StringFilter>;
};

export type SchemaMigrationsInsertInput = {
  version?: InputMaybe<Scalars['String']>;
};

export type SchemaMigrationsInsertResponse = {
  __typename?: 'SchemaMigrationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<SchemaMigrations>;
};

export type SchemaMigrationsOrderBy = {
  version?: InputMaybe<OrderByDirection>;
};

export type SchemaMigrationsUpdateInput = {
  version?: InputMaybe<Scalars['String']>;
};

export type SchemaMigrationsUpdateResponse = {
  __typename?: 'SchemaMigrationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<SchemaMigrations>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Users = {
  __typename?: 'Users';
  avatarUrl?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  movedInAt?: Maybe<Scalars['Datetime']>;
  movingOutAt?: Maybe<Scalars['Datetime']>;
  phoneNumber: Scalars['String'];
  updatedAt?: Maybe<Scalars['Datetime']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  pageInfo: PageInfo;
};

export type UsersDeleteResponse = {
  __typename?: 'UsersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor: Scalars['String'];
  node?: Maybe<Users>;
};

export type UsersFilter = {
  avatarUrl?: InputMaybe<StringFilter>;
  displayName?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  movedInAt?: InputMaybe<DatetimeFilter>;
  movingOutAt?: InputMaybe<DatetimeFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type UsersInsertInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  movedInAt?: InputMaybe<Scalars['Datetime']>;
  movingOutAt?: InputMaybe<Scalars['Datetime']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type UsersInsertResponse = {
  __typename?: 'UsersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersOrderBy = {
  avatarUrl?: InputMaybe<OrderByDirection>;
  displayName?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  movedInAt?: InputMaybe<OrderByDirection>;
  movingOutAt?: InputMaybe<OrderByDirection>;
  phoneNumber?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
};

export type UsersUpdateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  movedInAt?: InputMaybe<Scalars['Datetime']>;
  movingOutAt?: InputMaybe<Scalars['Datetime']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

export type UsersUpdateResponse = {
  __typename?: 'UsersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Users>;
};

export type UsersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<UsersFilter>;
  orderBy?: InputMaybe<Array<UsersOrderBy> | UsersOrderBy>;
}>;

export type UsersQuery = {
  __typename?: 'Query';
  users?: {
    __typename?: 'UsersConnection';
    edges: Array<{
      __typename?: 'UsersEdge';
      user?: {
        __typename?: 'Users';
        id: any;
        phoneNumber: string;
        displayName?: string | null;
        avatarUrl?: string | null;
        movedInAt?: any | null;
        movingOutAt?: any | null;
        updatedAt?: any | null;
      } | null;
    }>;
  } | null;
};

export const UsersDocument = gql`
  query Users($first: Int, $after: Cursor, $filter: UsersFilter, $orderBy: [UsersOrderBy!]) {
    users: usersCollection(first: $first, after: $after, filter: $filter, orderBy: $orderBy) {
      edges {
        user: node {
          id
          phoneNumber
          displayName
          avatarUrl
          movedInAt
          movingOutAt
          updatedAt
        }
      }
    }
  }
`;

export function useUsersQuery(options?: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'>) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
}
