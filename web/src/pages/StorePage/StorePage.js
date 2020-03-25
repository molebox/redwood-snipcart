/** @jsx jsx */
import { jsx } from 'theme-ui';
import MainLayout from "src/layouts/MainLayout/MainLayout"
import AllProductsCell from 'src/components/AllProductsCell/AllProductsCell'

const StorePage = () => {
  return (
    <MainLayout>
      <h2 sx={{
        fontFamily: 'body',
        fontWeight: 400,
        textAlign: 'center'
      }}>Products</h2>
      <AllProductsCell/>
    </MainLayout>
  )
}

export default StorePage
