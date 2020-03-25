/** @jsx jsx */
import { jsx } from 'theme-ui';
import BuyButton from './snipcart/BuyButton';

const SingleProduct = ({id, title, description, price, image, imageAlt}) => {

    return (
      <div sx={{
        display: 'flex',
        flexDirection: 'column',
        border: 'solid 2px',
        borderColor: 'secondaryDarker',
        width: '100%',
        height: 'auto',
        padding: '1.5em'
      }}>
        <p sx={{
          fontFamily: 'heading',
          fontSize: '2em',
          textAlign: 'center'
        }}>{title}</p>
        <div sx={{
            width: '100%',
            height: 'auto'
        }}>
          <img src={image} width="400px" alt={imageAlt}/>
        </div>
        <p sx={{
          fontFamily: 'heading',
          fontSize: '1em',
        }}>{description}</p>
        <BuyButton
          id={id}
          title={title}
          price={price}
          description={description}
          image={image}
          url="https://redwood-snipcart.netlify.com/"
          path="/store"
        />

      </div>
    );
}

export default SingleProduct;