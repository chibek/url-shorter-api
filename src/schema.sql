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
  delete(id: String!): String!
  update(updateUrl: UpdateUrlInput!): Url!
  updateClick(id: String!): Url!
}

type Query {
  findOne(id: String!): Url!
  urls: [Url!]!
}

type Subscription {
  clickUpdate(id: String!): Url!
}

input UpdateUrlInput {
  customUrl: String
  id: String!
  longUrl: String
  name: String
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