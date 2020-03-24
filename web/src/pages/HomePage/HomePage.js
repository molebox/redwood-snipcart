/** @jsx jsx */
import { jsx } from 'theme-ui';
import MainLayout from "src/layouts/MainLayout/MainLayout"

const smile = '\u{1F605}';

const HomePage = () => {

  return (
    <MainLayout>
      <h2 sx={{
        fontFamily: 'body',
        fontWeight: 400
      }}>Ecommerce example site</h2>
      <p sx={{
        fontFamily: 'body',
        fontWeight: 400
      }}>This is an ecommerce example site built with RedwoodJS and Snipcart. Its a proof on concept, you cannot actually purchase any of the products listed. {smile}</p>
    </MainLayout>
  )
}

export default HomePage
