import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import ScrollToTop from '../utils/ScrollToTop'

export default function MainContainer() {
  return (
    <div className='w-10/12 mx-auto'>
        <Navbar />

        <ScrollToTop />
            <Outlet />

        <Footer />
    </div>
  )
}
