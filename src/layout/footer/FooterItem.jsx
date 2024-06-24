import { Link } from "react-router-dom";

export default function FooterItem({ menu }) {
  return (
    <Link className="hover:underline" to={menu.to}>{menu.text}</Link>
  )
}
