import SpinnerCard from "../../components/SpinnerCard";

export default function ClinicItem({ clinic, onClick, isClinicLoading }) {
  return (
    <div className="rounded-3xl py-4 px-6 border border-ms-gold hover:border-ms-green hover:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]
        cursor-pointer transition duration-200"
        onClick={() => onClick(clinic)}>

      { isClinicLoading
        ? <SpinnerCard />
        : <div className="flex items-center gap-3">
        <div className="bg-gray-300 rounded-full h-16 w-16 overflow-hidden">
          <img src={clinic.icon} className="w-full object-center" alt={clinic.name} />
        </div>

        <div>
          <h2 className="text-ms-gray font-light text-lg">
            {clinic.name}
          </h2>
        </div>
      </div>}
      

    </div>
  )
}
