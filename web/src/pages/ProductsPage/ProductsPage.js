/** @jsx jsx */
import { jsx } from 'theme-ui';
import MainLayout from "src/layouts/MainLayout/MainLayout"

const ProductPage = () => {
  return (
    <MainLayout>
      <h2 sx={{
        fontFamily: 'body',
        fontWeight: 400,
      }}>Products</h2>
      <p sx={{
        fontFamily: 'body',
        fontWeight: 400
      }}>Show all products here...</p>
    </MainLayout>
  )
}

export default ProductPage
