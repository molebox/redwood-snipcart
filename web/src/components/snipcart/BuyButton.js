/** @jsx jsx */
import { jsx } from 'theme-ui';

const BuyButton = ({
  id,
  title,
  price,
  image,
  description,
  url,
  path
}) => (
  <button sx={{
    fontFamily: "heading",
    fontWeight: "bold",
    border: "1px solid",
    borderRadius: "5px",
    padding: "0.35em 1.2em",
    borderColor: "secondaryDarker",
    backgroundColor: "secondary",
    color: "background",
    cursor: "pointer",
    textTransform: "uppercase",
    height: "2.5em",
    "&:hover": {
      color: "accent",
      backgroundColor: "background",
      fontWeight: "bold"
    },
    "&:active": {
      boxShadow: "-1px 1px #00001F"
    }
  }}
      className="snipcart-add-item"
      data-item-id={id}
      data-item-price={price}
      data-item-image={image}
      data-item-name={title}
      data-item-description={description}
      data-item-url={url + path}
      data-item-stackable={true}
      data-item-has-taxes-included={true}
  >
    Buy Now
  </button>
);

export default BuyButton;