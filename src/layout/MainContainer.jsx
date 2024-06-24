import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'

export default function MainContainer() {
  return (
    <div className='w-10/12 mx-auto'>
        <Navbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
