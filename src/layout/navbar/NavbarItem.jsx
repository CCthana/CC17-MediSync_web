import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";


export default function NavbarItem({ menu, active}) {
  return (
    <Link to={menu.to} className={`${active ? 'hover:no-underline font-normal' : 'hover:underline'} font-light`}>
      <Tooltip
        content={menu.tooltip}
        placement="bottom"
        className="px-3 bg-ms-gray text-[#f3f5f2] shadow-sm"
        animate={{
          mount: { scale: 1, y: 0, transition: { delay: 0.5 } },
          unmount: { scale: 0, y: -25, transition: { delay: 0 } },
        }}
      >
        <div role="button" className={`${active ? 'text-ms-green' : ''} font-th`}>
            {menu.text}
        </div>
        </Tooltip>
    </Link>
  )
}
