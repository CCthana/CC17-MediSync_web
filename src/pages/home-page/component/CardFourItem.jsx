import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function CardFourItem({ data }) {
  return (
    <>
      <Tooltip
        content={data.tooltip}
        placement="bottom"
        className="px-3 bg-ms-gray text-[#f3f5f2] shadow-sm"
        animate={{
          mount: { scale: 1, y: 0, transition: { delay: 0.5 } },
          unmount: { scale: 0, y: -25, transition: { delay: 0 } },
        }}
      >
        <Link
          to={data.path}
          className="flex items-center justify-center gap-3 border border-ms-gold transition duration-300
    rounded-3xl text-xl py-5 px-5 w-[22%] hover:border-ms-green hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]"
        >
          <i className={`${data.icon} text-xl`}></i>
          <span className="font-light font-th text-xl">{data.text}</span>
        </Link>
      </Tooltip>
    </>
  );
}
