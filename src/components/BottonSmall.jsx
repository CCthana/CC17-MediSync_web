
const btnMap = {
    success: "border border-ms-gold rounded-full py-1 px-5 hover:border-[#31A172] hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]",
    active: "rounded-full py-1 px-5 hover:underline text-[#F0F4EE]"
}

export default function ButtonSmall({ children, btn, type="submit", onClick}) {

    return (
        <button
            onClick={onClick}
            className={`font-light rounded-full transition duration-300 ${btnMap[btn]}`} type={type}>{children}</button>
      )
}