const btnMap = {
    success: "border border-ms-gold rounded-full px-5 py-1.5 hover:border-[#31A172] hover:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]",
    active: "rounded-full py-1 px-5 hover:underline text-[#F0F4EE]"
}

export default function Button({ children, btn, type="submit", onClick, width="w-full"}) {

    return (
        <button onClick={onClick} className={`font-light h-11 transition duration-300 hover:underline ${btnMap[btn]} ${width}`} type={type}>
                {children}
        </button>
      )
}