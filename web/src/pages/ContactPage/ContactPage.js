/** @jsx jsx */
import { jsx } from 'theme-ui';
import MainLayout from "src/layouts/MainLayout/MainLayout"

const ContactPage = () => {
  return (
    <MainLayout>
      <h2 sx={{
        fontFamily: 'body',
        fontWeight: 400,
      }}>Contact</h2>
      <p sx={{
        fontFamily: 'body',
        fontWeight: 400
      }}>This page would make a great contact form page! <a sx={{
        fontFamily: 'heading',
        fontWeight: 400,
        color: 'text',
        ":hover": {
          color: 'accent'
        }
      }} href="https://redwoodjs.com/tutorial/everyone-s-favorite-thing-to-build-forms"> Check this guide out to find out how!</a></p>
    </MainLayout>
  )
}

export default ContactPage
