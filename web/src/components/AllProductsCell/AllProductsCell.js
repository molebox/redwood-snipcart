/** @jsx jsx */
import { jsx } from 'theme-ui';
import SingleProduct from "../SingleProduct"
import ProductsContainer from "../ProductsContainer"

export const QUERY = gql`
  query {
    products {
      id
      title
      price
      description
      image
      imageAlt
    }
  }
`

export const Loading = () => <h2 sx={{
  fontFamily: 'heading'
}}>Loading...</h2>

export const Empty = () => <h2 sx={{
  fontFamily: 'heading'
}}>No products have been added yet</h2>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ products }) => {
  console.log({products})
  return (
    <ProductsContainer>
      {products.map((product) => (
        <SingleProduct
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          imageAlt={product.imageAlt}
        />
      ))
      }
    </ProductsContainer>
  );
}
