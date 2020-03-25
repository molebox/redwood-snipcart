export const schema = gql`
  type Product {
    id: Int!
    title: String!
    description: String!
    price: String!
    image: String!
    imageAlt: String!
  }

  type Query {
    products: [Product]
    product(id: Int!): Product
  }

  input ProductInput {
    title: String
    description: String
    price: String
    image: String
    imageAlt: String
  }

  type Mutation {
    createProduct(input: ProductInput!): Product
    updateProduct(id: Int!, input: ProductInput!): Product
    deleteProduct(id: Int!): Product
  }
`
