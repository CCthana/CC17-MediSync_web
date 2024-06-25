
const btnMap = {
    success: "border border-[#AE8F4E] rounded-full py-1 px-5 hover:border-[#31A172] hover:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]",
    active: "rounded-full py-1 px-5 hover:underline text-[#F0F4EE]"
}

export default function ButtonSmall({ children, btn, type="submit", onClick}) {

    return (
        <button
            onClick={onClick}
            className={`px-4 py-1.5 font-normal rounded-full ${btnMap[btn]}`} type={type}>{children}</button>
      )
}