
export default function DoctorItem({ data, handleClickSelect}) {
  return (
    <div role="button" onClick={() => handleClickSelect(data)} className="flex w-[28rem]
    items-center gap-2 border border-ms-gold rounded-3xl px-8 py-4">
        <div className="w-16 h-16 overflow-hidden rounded-full bg-gray-200">
            <img className="w-full h-full object-cover" src={data.image} alt={data.name} />
        </div>
        <div >
            <h1 className="font-th text-start font-light text-xl">{data.firstName} {data.lastName}</h1>
            <p className="font-th text-start font-light text-sm">แผนก/คลินิก: {data.clinic.name}</p>
        </div>
    </div>
  )
}
