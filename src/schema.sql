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
  urls: [Url!]!
}

type Url {
  clicks: Float!
  customUrl: String!
  id: String!
  longUrl: String!
  name: String!
  shortUrl: String!
}