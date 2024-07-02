import { Link } from "react-router-dom";


export default function NavbarItem({ menu, active}) {
  return (
    <Link to={menu.to} className={`${active ? 'hover:no-underline' : 'hover:underline'} font-light`}>
        <div role="button" className={`${active ? 'text-ms-green' : ''}`}>
            {menu.text}
        </div>
    </Link>
  )
}
