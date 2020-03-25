/** @jsx jsx */
import { jsx } from 'theme-ui';
import MainLayout from "src/layouts/MainLayout/MainLayout"
import AllProductsCell from 'src/components/AllProductsCell/AllProductsCell';

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
      <p sx={{
        fontFamily: 'body',
        fontWeight: 400
      }}>The site uses snipcart scripts to enable an easy ecommerce solution which can be spun up in no time. When you click the buy now button on a product snipcart takes over and directs you to a secure payment gateway. Of course there are more features that could be added such as a cart to indicate how many items you have etc.. Check this (blog post coming soon) tutorial for a detailed break down of how to build this site. </p>
      <AllProductsCell/>
    </MainLayout>
  )
}

export default HomePage
