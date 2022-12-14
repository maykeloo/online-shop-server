import { gql } from "apollo-server";

export const typeDefs = gql`
    type Query {
      products: [Product!]!
    }

    type Product {
      id: Int
    }
`
