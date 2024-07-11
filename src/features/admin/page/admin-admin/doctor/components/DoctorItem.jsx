import SearchBold from "../../../../../../components/SearchBold";

export default function DoctorItem({ data, handleClickSelect, search}) {
  return (
    <div onClick={() => handleClickSelect(data)} className="flex w-[28rem]
    items-center gap-2 border border-ms-gold rounded-3xl px-8 py-4 hover:border-ms-green hover:shadow-[0px_0px_12px_rgba(49,161,114,0.4)]
      cursor-pointer transition duration-200">
        <div className="w-16 h-16 overflow-hidden rounded-full bg-gray-200">
            <img className="w-full h-full object-cover" src={data?.image} alt={data?.name} />
        </div>
        <div >
            <h1 className="font-th text-start font-light text-xl"><SearchBold search={search} data={data?.firstName} /> <SearchBold search={search} data={data?.lastName} /></h1>
            <p className="font-th text-start font-light text-sm">แผนก/คลินิก: <SearchBold search={search} data={data?.clinic?.name} /></p>
        </div>
    </div>
  )
}
