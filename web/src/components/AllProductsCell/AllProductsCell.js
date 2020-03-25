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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

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
