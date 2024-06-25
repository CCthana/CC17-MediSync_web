import Button from "../../../components/Button";


export default function CardPackageItem({ data }) {
  return (
    <div className="flex flex-col w-[25%] gap-6 items-center px-4 pt-4 pb-8 rounded-[40px]
      shadow-[0px_0px_6px_rgba(0,0,0,0.15)] hover:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]">
        <div className=" aspect-square overflow-hidden rounded-[32px]">
            <img className="w-full object-cover h-full" src={data.image} alt={data.text} />
        </div>
        <span className="text-xl font-light">{data.text}</span>
        <Button width="w-1/2" btn="success">ดู package</Button>
    </div>
  )
}

//shadow-[0px_0px_6px_rgba(49,161,114,0.4)]