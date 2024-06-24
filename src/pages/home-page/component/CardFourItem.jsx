
export default function CardFourItem({ data }) {
  return (
    <button role="button" className="flex items-center justify-center gap-2 border border-[#AF9763]
    rounded-3xl text-xl py-5 px-5 w-1/5 hover:border-[#31A172] hover:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]">
        <i class={`${data.icon} text-xl`}></i>
        <span>{data.text}</span>
    </button>
  )
}
