import { Link } from "react-router-dom";

export default function CardFourItem({ data }) {
  return (
    <Link to={data.path} className="flex items-center justify-center gap-3 border border-ms-gold transition duration-300
    rounded-3xl text-xl py-5 px-5 w-[22%] hover:border-ms-green hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]">
        <i className={`${data.icon} text-xl`}></i>
        <span className="font-light text-xl">{data.text}</span>
    </Link>
  )
}
