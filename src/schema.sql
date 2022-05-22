# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

input CreateUrlInput {
  customUrl: String
  longUrl: String!
  name: String!
}

type Mutation {
  create(createUrl: CreateUrlInput!): Url!
}

type Query {
  findOne: Url!
  urls: [Url!]!
}

type Url {
  clicks: Float!
  created_at: Float!
  customUrl: String
  id: String!
  longUrl: String!
  name: String!
  shortUrl: String!
  updated_at: Float!
}