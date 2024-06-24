import { Link } from "react-router-dom";


export default function NavbarItem({ menu, active}) {
  return (
    <Link to={menu.to} className={`${active ? 'hover:no-underline' : 'hover:underline'}`}>
        <div role="button" className={`${active ? 'text-[#31A172]' : ''}`}>
            {menu.text}
        </div>
    </Link>
  )
}
