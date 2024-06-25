import { Link, useLocation } from 'react-router-dom'
import logoMediSync from '../../assets/logos/MediSync-1.svg'
import NavbarItem from './NavbarItem'
import ButtonSmall from '../../components/BottonSmall'

export default function Navbar() {

    const { pathname } = useLocation()

    const menuList = [
        { id: 1, text: "หน้าหลัก", to: '/'},
        { id: 2, text: "แผนก/คลินิก", to: '/department'},
        { id: 3, text: "แพ็กเกจตรวจสุขภาพ", to: '/package'},
        { id: 4, text: "ติดต่อเรา", to: '/contact'}
    ]

  return (
    <nav className="h-20 flex items-center justify-between p-4 mt-2">
        <div className='h-9'>
            <Link to='/'>
                <img className='h-full' src={logoMediSync} alt="logoMediSync" />
            </Link>
        </div>
        <div className='flex gap-5 items-center'>
            { menuList.map((el) => (
                <NavbarItem key={el.id} menu={el} active={ pathname === el.to} />
            )) }

            <div className='gap-3 flex'>
                <ButtonSmall btn="success">
                    <div className='flex items-center gap-1'>
                        <i className="fa-solid fa-phone"></i>
                        <h1 className='font-th'>+66 9598 95464</h1>
                    </div>
                </ButtonSmall>

                <Link to='/login'>
                <ButtonSmall btn="success">
                    <div className='flex items-center gap-1'>
                        <i className="fa-solid fa-user-plus"></i>
                        <h1>login</h1>
                    </div>
                </ButtonSmall>
                </Link>
            </div>
        </div>
        
    </nav>
  )
}
