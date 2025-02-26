import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

import './globals.css'



export const metadata = {
  title: '23-eak-colmar',
  description: 'Project Layout',
  keywords: ['react', 'layout'],
}

const Layout = ({children}) => {
  return (
    <html>
      <body>

        {children}


      </body>
    </html>
  )
}
export default Layout;