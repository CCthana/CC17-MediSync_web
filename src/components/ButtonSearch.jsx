const btnMap = {
    success: "border border-ms-gold rounded-full hover:border-[#31A172] hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]",
    active: "rounded-full bg-ms-green text-[#f3f5f2] hover:bg-[#257956] text-[#f3f5f1] hover:shadow-[0px_0px_6px_rgba(49,161,114,0.7)]"
}

export default function ButtonSearch({ children, btn, type="submit", onClick, width="w-full"}) {

    return (
        <button onClick={onClick} className={`font-light py-4 px-8 text-lg outline-none transition duration-300 ${btnMap[btn]} ${width}`} type={type}>
                <i
              role="button"
              className="fa-solid fa-magnifying-glass transition duration-300
            right-6 text-[#f3f5f2] text-lg"
            ></i>&#32;{children}
        </button>
      )
}