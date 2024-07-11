import SearchBold from "../../components/SearchBold";
import SpinnerCard from "../../components/SpinnerCard";



export default function ClinicItem({
  clinic,
  onClick,
  isClinicLoading,
  search,
}) {
  
  return (
    <div
      className="rounded-3xl py-4 px-6 border border-ms-gold hover:border-ms-green hover:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]
        cursor-pointer transition duration-200"
      onClick={() => onClick(clinic)}
    >
      {isClinicLoading ? (
        <SpinnerCard />
      ) : (
        <div className="flex items-center gap-3">
          <div className="rounded-full h-16 w-16 overflow-hidden">
            <img
              src={clinic.icon}
              className="w-full p-1 object-center"
              alt={clinic.name}
            />
          </div>

          <div>
            <h2 className="text-ms-gray font-light text-lg"><SearchBold search={search} data={clinic.name} /></h2>
          </div>
        </div>
      )}
    </div>
  );
}
