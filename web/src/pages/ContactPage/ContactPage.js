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
      }}>Show Redwood contact form here...</p>
    </MainLayout>
  )
}

export default ContactPage
