import SearchBold from "../../../../../../components/SearchBold";

export default function ClinicItem({ data, handleClickSelect, search }) {
  return (
    <div role="button" onClick={() => handleClickSelect(data)} className="flex min-w-[32rem]
    items-center gap-2 border border-ms-gold rounded-3xl px-8 py-4">
        <div className="w-14">
            <img src={data.icon} alt={data.name} />
        </div>
        <div >
            <h1 className="font-th text-start font-light text-xl"><SearchBold data={data.name} search={search} /></h1>
        </div>
    </div>
  )
}
