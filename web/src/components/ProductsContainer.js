/** @jsx jsx */
import { jsx } from 'theme-ui';

const ProductsContainer = ({children}) => (
  <div sx={{
    margin: "2em auto",
    display: "grid",
    gridAutoRows: "auto",
    gridTemplateColumns: "repeat(auto-fill, minmax(auto, 450px))",
    gap: "1.5em",
    justifyContent: "space-evenly",
    width: '100%'
  }}>
    {children}
  </div>
);

export default ProductsContainer;