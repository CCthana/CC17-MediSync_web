const btnMap = {
    success: "border border-ms-gold rounded-full px-5 py-1.5 hover:border-[#31A172] hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]",
    active: "rounded-full py-1 px-5 bg-ms-green hover:underline text-[#f3f5f1] hover:shadow-[0px_0px_6px_rgba(49,161,114,0.7)]"
}

export default function Button({ children, btn, type="submit", onClick, width="w-full"}) {

    return (
        <button onClick={onClick} className={`font-light h-11 outline-none transition duration-300 hover:underline ${btnMap[btn]} ${width}`} type={type}>
                {children}
        </button>
      )
}