/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, routes } from '@redwoodjs/router';

const Header = () => {

  return (
    <header sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: 'solid 2px',
      borderColor: 'secondaryDarker'
    }}>
      <h1>
        <Link sx={{
          fontFamily: 'heading',
          fontWeight: 400,
          color: 'text',
          textDecoration: 'none',
          ":hover": {
            color: 'accent'
          }
        }} to={routes.home()}>Redwood - Snipcart</Link>
      </h1>
      <nav sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '15em'
      }}>
        {/* <Link sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            color: 'text',
            ":hover": {
              color: 'accent'
            }
        }} to={routes.store()}>Store</Link> */}
        <Link sx={{
            fontFamily: 'heading',
            fontWeight: 400,
            color: 'text',
            ":hover": {
              color: 'accent'
            }
        }} to={routes.contact()}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;